'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getCohereResponse } from '@/utils/cohere';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Chat() {
  const [query, setQuery] = useState<string>('');
  const [messages, setMessages] = useState<{ text: string; from: 'user' | 'cohere' }[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { text: query, from: 'user' }]);
    setQuery('');
    setIsLoading(true);

    try {
      const cohereResponse = await getCohereResponse(query);
      setMessages((prev) => [...prev, { text: cohereResponse, from: 'cohere' }]);
    } catch (error) {
      console.error('Error fetching Cohere response:', error);
      setMessages((prev) => [
        ...prev,
        { text: 'Cohere: Sorry, there was an error processing your request.', from: 'cohere' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Chat LLM
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

      {/* Information Dropdown */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg m-4">
        <div className="cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <h2 className="text-lg font-semibold">How to Use This Chat Model</h2>
        </div>
        {isDropdownOpen && (
          <div className="mt-2 text-blue-900">
            <p className="mt-2">
              This chat interface allows you to interact with a language model. Here&apos;s how you can use it:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Type your question or query in the input box below.</li>
              <li>Click the <strong>Send</strong> button or press <strong>Enter</strong> to submit your query.</li>
              <li>The model will respond with an answer or relevant information.</li>
              <li>Ensure your queries are clear and concise for the best results.</li>
            </ul>
            <p className="mt-2">
              Please note: This model generates responses based on the input provided and may not always be 100% accurate. For critical tasks, verify the information independently.
            </p>
          </div>
        )}
      </div>

      <div className="flex-grow p-4">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 min-h-[69vh] max-h-[69vh] overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 mb-2 rounded-lg ${
                message.from === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'
              }`}
            >
              <p>{message.text}</p>
            </div>
          ))}
          {isLoading && <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 mx-auto"></div>}
        </div>
        <form onSubmit={handleQuerySubmit} className="flex">
          <Input
            type="text"
            placeholder="Type your query..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow mr-2"
          />
          <Button type="submit" disabled={isLoading} className="bg-blue-500 text-white">
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </div>
    </div>
  );
}
