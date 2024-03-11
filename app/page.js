"use client";
import React from "react";
import Quote from "./quote";
import CategorySelector from "./categorySelector";
import LoadingMessage, { ErrorMessage } from "./loading";
import { useQuotes } from "./useQuotes";

export default function QuoteApp() {
  const { category, setCategory, quotes, isLoading, error, fetchNewQuotes } =
    useQuotes("random");

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  return (
    <div className="container mx-auto my-auto justify-center text-left text-center">
      <h1 className="text-left font-bold my-7 text-3xl">Quote App</h1>
      <CategorySelector
        category={category}
        onCategoryChange={handleCategoryChange}
      />
      {isLoading && <LoadingMessage />}
      {error && <ErrorMessage error={error} />}
      {quotes.length > 0 && <Quote quotes={quotes} />}
      <button onClick={fetchNewQuotes}>More Quotes</button>
    </div>
  );
}
