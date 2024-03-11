import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { motion } from "framer-motion";

export default function Quote({ quotes }) {
  const [copiedQuote, setCopiedQuote] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  function copyQuoteToClipboard(quote) {
    setCopiedQuote(quote.quote);
    navigator.clipboard.writeText(`"${quote.quote}" - ${quote.author}`);
  }

  function Typewriter({ text }) {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        if (currentIndex < text.length) {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setTyping(false); // Stop typing when complete
        }
      }, 10);
      return () => clearInterval(timer);
    }, [text, currentIndex]);

    return <>{currentText}</>;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <ul>
            {quotes.map((quote, index) => (
              <motion.li
                key={quote.quote}
                onClick={() => {
                  copyQuoteToClipboard(quote);
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {typing && quoteIndex === index ? (
                  <Typewriter text={`"${quote.quote}" - ${quote.author}`} />
                ) : (
                  `"${quote.quote}" - ${quote.author}`
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </PopoverTrigger>
      <PopoverContent>Copied!</PopoverContent>
    </Popover>
  );
}
