import axios from 'axios';

export const getCohereResponse = async (query: string) => {
  try {
    const response = await axios.post(
      'https://api.cohere.ai/generate',
      {
        model: 'command-r-plus-08-2024',
        prompt: query,
        max_tokens: 200,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_COHERE_API_KEY}`,
        },
      }
    );

    return response.data.text;
  } catch (error) {
    console.error('Error fetching Cohere response:', error);
    throw new Error('Error fetching Cohere response');
  }
};
