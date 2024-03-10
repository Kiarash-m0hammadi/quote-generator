"use client";
import React, { useState, useEffect } from "react";

function QuoteApp() {
  const [category, setCategory] = useState("movies");
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function getStaticProps() {
    return {
      props: {
        apiKey: process.env.API_KEY,
      },
    };
  }
  const apiKey = process.env.API_KEY;

  useEffect(() => {
    const fetchQuotes = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              "X-Api-Key": apiKey,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching quotes: ${response.statusText}`);
        }

        const data = await response.json();
        setQuotes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuotes();
  }, [category]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <h1>Quote App</h1>
      <select value={category} onChange={handleCategoryChange}>
        <option value="movies">movies</option>
        {/* Add options for other categories here */}
      </select>
      {isLoading && <p>Loading quotes...</p>}
      {error && <p>Error: {error}</p>}
      {quotes.length > 0 && (
        <ul>
          {quotes.map((quote) => (
            <li key={quote.quote}>
              &quot;{quote.quote}&quot; - {quote.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuoteApp;
