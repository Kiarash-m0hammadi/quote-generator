"use client";
import React, { useState, useEffect } from "react";
import Quote from "./quote";
import CategorySelector from "./categorySelector";
import LoadingMessage, { ErrorMessage } from "./loading";
import { fetchQuotes } from "../api/fetchQuotes";

function QuoteApp() {
  const [category, setCategory] = useState("movies");
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuotes = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchQuotes(category);
        setQuotes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getQuotes();
  }, [category]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <h1>Quote App</h1>
      <CategorySelector
        category={category}
        onCategoryChange={handleCategoryChange}
      />
      {isLoading && <LoadingMessage />}
      {error && <ErrorMessage error={error} />}
      {quotes.length > 0 && <Quote quotes={quotes} />}
    </div>
  );
}

export default QuoteApp;
