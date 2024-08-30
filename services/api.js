import axios from 'axios';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GITHUB_API_URL = 'https://api.github.com/users/';

async function checkGitHubUser(username) {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${username}`);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

export async function generateMeme(username, type) {
  try {
    const isValidUser = await checkGitHubUser(username);
    if (!isValidUser) {
      throw new Error('Invalid GitHub username');
    }

    const prompt = type === 'compliment'
      ? `Give a funny, sweet beautiful out of the word compliment for the GitHub user: ${username}. Keep it simple, easy, and humanly words.`
      : `Give a funny, too much harsh insult for the GitHub user: ${username}. Keep it simple, strong, and humanly words.`;

    const response = await axios.post(
      GROQ_API_URL,
      {
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'system',
            content: `You are the best and most creative ${type} generator, making funny and humanly ${type}s for GitHub users.`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 100
      },
      {
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}
