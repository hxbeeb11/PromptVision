# PromptVision

PromptVision is a web application designed to provide an interactive chat-based interface for querying a language model and generating images based on textual prompts. Built with web technologies like React, Next.js, TypeScript, and Tailwind CSS, the app leverages advanced libraries for styling and animations such as ShadCN and Magic UI.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Key Components](#key-components)
- [License](#license)

## Features
- **Interactive Chat Interface**: Engage with an AI-powered language model to get meaningful responses.
- **Image Generation**: Generate images based on textual prompts using a powerful image generation API.
- **User Authentication**: Secure sign-in and sign-out functionality using Clerk.
- **Beautiful Animations**: Smooth UI transitions with animated components such as meteors and flickering grids.
- **Responsive Design**: Fully responsive layout optimized for different screen sizes.

## Technologies Used
- **Frontend Framework**: React, Next.js
- **Styling**: Tailwind CSS, ShadCN, Magic UI
- **Programming Language**: TypeScript
- **Authentication**: Clerk
- **APIs**:
  - Cohere API for natural language queries
  - StabilityAI for image generation

## Installation

### Prerequisites
- Node.js (v16 or above)
- npm or yarn
- Clerk account for authentication setup
- API keys for Cohere and StabilityAI

### Steps to Install
1. Clone the repository:
   ```bash
   git clone https://github.com/username/promptvision.git
   cd promptvision

2. Install dependencies:
   ```bash
   npm install

3. Set up environment variables: Create a .env.local file and add the following environment variables:
   ```bash
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   COHERE_API_KEY=<your-cohere-api-key>
   STABILITYAI_API_KEY=<your-stability-ai-api-key>

4. Run the development server:
   ```bash
   npm run dev

5. Visit the application at
   ```bash
   http://localhost:3000 

## Usage

### Landing Page
- Includes a button to redirect users to the login page.

### Login Page
- Provides a secure authentication interface powered by Clerk.

### Dashboard
#### Chat LLM Section:
- Users can type queries and interact with the language model.
- Chat messages are displayed in a conversational layout with loading indicators.

#### Image Generation Section:
- Users can input text descriptions to generate images.

## Key Components

### `RootLayout`
- Sets up global styles and fonts.
- Integrates Clerk for authentication.

### `Home`
- Displays the landing page with animations and a call-to-action button.

### `Login`
- Implements Clerk's `SignIn` component for authentication.

### `Dashboard`
- Combines the chat and image generation functionalities.
- Manages state for user inputs, API responses, and UI interactions.

### Utility Functions
- `getCohereResponse`: Fetches responses from the Cohere API based on user queries.
- `generateImage`: Interfaces with StabilityAI to generate images from text descriptions.


## License
This project is licensed under the [MIT License](LICENSE).
