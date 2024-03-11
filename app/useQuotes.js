// useQuotes.js
import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import { fetchQuotes } from "../api/fetchQuotes";

export function useQuotes(initialCategory) {
  const [category, setCategory] = useState(initialCategory);
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const debouncedFetchQuotes = debounce(async () => {
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
    }, 250);

    debouncedFetchQuotes();

    return () => debouncedFetchQuotes.cancel();
  }, [category]);

  const fetchNewQuotes = async () => {
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

  return { category, setCategory, quotes, isLoading, error, fetchNewQuotes };
}
