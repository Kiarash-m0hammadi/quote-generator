import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Quote({ quotes }) {
  const [copiedQuote, setCopiedQuote] = useState("");

  function copyQuoteToClipboard(quoteText, author) {
    const fullQuote = `${quoteText} - ${author}`;
    navigator.clipboard
      .writeText(fullQuote)
      .then(() => {
        setCopiedQuote(fullQuote);
      })
      .catch((err) => {
        console.error("Failed to copy quote:", err);
      });
  }
  ``;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <ul>
            {quotes.map((quote) => (
              <li
                key={quote.quote}
                onClick={() => {
                  copyQuoteToClipboard(quote.quote, quote.author);
                  setTimeout(() => {
                    document.querySelector("ul").click();
                  }, 1000);
                }}
              >
                &quot;{quote.quote}&quot; - {quote.author}
                {copiedQuote === `${quote.quote} - ${quote.author}`}
              </li>
            ))}
          </ul>
        </div>
      </PopoverTrigger>
      <PopoverContent>Copied!</PopoverContent>
    </Popover>
  );
}

export default Quote;
