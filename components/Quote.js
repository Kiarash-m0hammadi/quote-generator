"use client";
import React from "react";
import quoteHandler from "@/api/quoteAPI";

const Quote = () => {
  const [quotes, setQuotes] = React.useState([]);

  React.useEffect(() => {
    quoteHandler().then((response) => {
      setQuotes(response);
    });
  }, []);

  return (
    <div>
      {quotes.map((quote, index) => (
        <div key={index}>
          <p>{quote.quote}</p>
          <p>- {quote.author}</p>
          <p>{quote.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Quote;
