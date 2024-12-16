import axios from "axios";

export const generateImage = async (prompt: string): Promise<string> => {
  const API_KEY = process.env.NEXT_PUBLIC_STABILITY_API_KEY;
  const API_URL = "https://api.stability.ai/v2beta/stable-image/generate/core";

  if (!API_KEY) {
    throw new Error("Stability AI API key is missing!");
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        prompt,
        aspect_ratio: "1:1",
        style_preset: "digital-art",
        output_format: "png",
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "multipart/form-data",
          Accept: "image/*",
        },
        responseType: "arraybuffer", // Ensure binary data handling
      }
    );

    if (response.status === 200) {
      const imageBlob = new Blob([response.data], { type: "image/png" });
      const imageUrl = URL.createObjectURL(imageBlob);
      console.log("Generated Image URL:", imageUrl); // Log the URL
      return imageUrl;
    } else {
      throw new Error(
        `Unexpected response: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Error generating image:", error);
    throw new Error("Failed to generate image.");
  }
};
