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
    <div className="md:justify-center overflow-hidden text-center h-screen w-screen mx-auto rounded-md relative flex flex-col items-center antialiased">
      <h1 className="relative z-10 mt-16 text-4xl md:text-7xl pb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 my-7 text-center font-sans font-bold">
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
        className="inline-flex h-12 my-10 md:my-12  animate-shimmer items-center justify-center rounded border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:bg-slate-400 hover:text-white"
      >
        New Quotes
      </button>
      <div className="svg-container">
        <BackgroundBeams className="BackgroundBeams bg-slate-950 md:scale-100" />
      </div>
      <a
        href="https://github.com/Kiarash-m0hammadi"
        className="fixed bottom-1 right-1 px-3 py-2 translate-x-5 translate-y-1 md:translate-x-0 md:translate-y-0 scale-75 md:scale-100 border border-white text-white rounded-tl-full rounded-br-full font-bold transform hover:-translate-y-1 transition duration-400 shadow-[0_0_0_3px_#000000_inset] hover:bg-gray-500 hover:text-slate-200"
      >
        Creator&apos;s github
      </a>
    </div>
  );
}
