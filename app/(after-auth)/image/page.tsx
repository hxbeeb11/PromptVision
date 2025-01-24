'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { generateImage } from '@/utils/stabilityAI';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';

export default function ImageGeneration() {
  const [imagePrompt, setImagePrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleImageGeneration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imagePrompt.trim()) return;

    setIsGenerating(true);
    setGeneratedImage(''); // Reset the image

    try {
      const imageUrl = await generateImage(imagePrompt);
      setGeneratedImage(imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadImage = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = 'generated-image.png';
    link.click();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
<header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Image Generator
        </h1>
        <SignedIn>
          <div className="flex items-center space-x-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
        <SignedOut>
          <p className="text-gray-500">You are signed out. Please sign in to continue.</p>
        </SignedOut>
      </header>
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg m-4">
        <div className="cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <h2 className="text-lg font-semibold">How to Use This Image Generator</h2>
        </div>
        {isDropdownOpen && (
          <div className="mt-2 text-blue-900">
            <p className="mt-2">
            This tool allows you to generate images based on a description. Here&apos;s how to use it:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Type a detailed description of the image you want to generate in the input box below.</li>
              <li>Click the <strong>Generate</strong> button to create the image.</li>
              <li>If satisfied with the result, click <strong>Download</strong> to save the image.</li>
              <li>Ensure the description is clear and specific for better results.</li>
            </ul>
            <p className="mt-2">
            Note: The quality and relevance of the image depend on the description provided.
            </p>
          </div>
        )}
      </div>
      <div className="flex-grow p-4">
  <div
    className="bg-white rounded-lg shadow-md p-10 mb-4 flex justify-center items-center flex-col" // Adding flex-col to stack the image and button vertically
    style={{ height: '69vh' }}
  >
    {isGenerating ? (
      <p>Generating image...</p>
    ) : generatedImage ? (
      <>
        <Image 
          src={generatedImage} 
          alt="Generated" 
          className="max-w-full max-h-full object-contain"
          width={512}
          height={512}
        />
        <Button
          onClick={handleDownloadImage}
          className="bg-blue-500 text-white mt-4"
        >
          Download Image
        </Button>
      </>
    ) : (
      <p>No image generated yet</p>
    )}
  </div>
  <form onSubmit={handleImageGeneration} className="flex">
    <Input
      type="text"
      placeholder="Describe the image..."
      value={imagePrompt}
      onChange={(e) => setImagePrompt(e.target.value)}
      className="flex-grow mr-2"
    />
    <Button type="submit" disabled={isGenerating} className="bg-green-500 text-white">
      Generate
    </Button>
  </form>
</div>

    </div>
  );
}
