# GitHub Reacts

GitHub Reacts is a React application that generates humorous memes based on GitHub usernames. Users can receive either a funny compliment or a playful insult. The app features dynamic animations using Framer Motion and handles API interactions with Axios.

## Live Demo

You can try out the live demo of GitHub Reacts at: [https://github-reacts.vercel.app/](https://github-reacts.vercel.app/)

## Features

- **Animated Text**: Engaging text animations with Framer Motion.
- **Meme Generation**: Generate amusing compliments or insults based on GitHub usernames.
- **Copy to Clipboard**: Easily copy the generated memes with a single click.
- **Responsive Design**: Modern and mobile-friendly user interface.

## Components

### `AnimatedText.jsx`

Displays text with animations using Framer Motion. The component animates each letter individually with a floating effect and hover interactions.

### `MemeGenerator.jsx`

Main component for generating memes. It includes:

- **Username Input**: Accepts GitHub usernames.
- **Buttons**: Generates either a compliment or insult.
- **Error Handling**: Displays error messages if the username is invalid or if there are other issues.
- **Copy Functionality**: Allows users to copy the generated meme to their clipboard.

### `Footer.jsx`

Displays the footer with copyright information and creator details.

### `Header.jsx`

Displays the header with similar content to the footer. 

### `api.js`

Handles interactions with external APIs:

- **`checkGitHubUser`**: Validates GitHub usernames.
- **`generateMeme`**: Requests meme content based on the username and type of meme (compliment or insult).

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/StarKnightt/GitHub-Reacts.git
    ```

2. Navigate to the project directory:
    ```bash
    cd GitHub-Generator
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## Configuration

Create a `.env` file in the root directory and add your API key: (I'm using Groq ai)

VITE_GROQ_API_KEY=your_api_key_here


## Contributing

Feel free to open issues or submit pull requests to improve the project. 

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, reach out to [Prasenjit Nayak](https://github.com/StarKnightt) on GitHub.

