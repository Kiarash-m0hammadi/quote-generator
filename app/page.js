"use client";
import React from "react";
import Quote from "./quote";
import CategorySelector from "./categorySelector";
import LoadingMessage, { ErrorMessage } from "./loading";
import { useQuotes } from "./useQuotes";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function QuoteApp() {
  const { category, setCategory, quotes, isLoading, error, fetchNewQuotes } =
    useQuotes("random");

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  return (
    <div className="container justify-center text-center h-screen w-screen mx-auto rounded-md relative flex flex-col items-center antialiased">
      <h1 className="relative z-10 text-2xl md:text-7xl pb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 my-7 text-center font-sans font-bold">
        Quote App
      </h1>
      <CategorySelector
        category={category}
        onCategoryChange={handleCategoryChange}
      />
      {isLoading && <LoadingMessage />}
      {error && <ErrorMessage error={error} />}
      {quotes.length > 0 && <Quote quotes={quotes} />}
      <button
        onClick={fetchNewQuotes}
        className="inline-flex h-12 my-12 animate-shimmer items-center justify-center rounded-l border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:bg-slate-400 hover:text-white"
      >
        New Quotes
      </button>
      <div className="svg-container">
        <BackgroundBeams className="BackgroundBeams bg-gray-600" />
      </div>
      <a
        href="https://github.com/Kiarash-m0hammadi"
        className="fixed bottom-0 bg-slate-200 rounded-xl right-0 p-2 text-sm text-gray-500 hover:bg-gray-500 hover:text-slate-200"
      >
        Creator&apos;s github
      </a>
    </div>
  );
}
