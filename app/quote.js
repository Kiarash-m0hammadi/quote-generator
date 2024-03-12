import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { motion } from "framer-motion";
import { set } from "lodash";

export default function Quote({ quotes }) {
  const [copiedQuote, setCopiedQuote] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  function copyQuoteToClipboard(quote) {
    setCopiedQuote(quote.quote);
    navigator.clipboard.writeText(`"${quote.quote}" - ${quote.author}`);
  }
  const handelClick = () => {
    setTimeout(() => {
      document.querySelector("ul").click();
    }, 1000);
  };

  useEffect(() => {
    setQuoteIndex(0);
    setTyping(true);
  }, [quotes]);

  function Typewriter({ text }) {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        if (currentIndex < text.length) {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setTyping(false);
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
                className="text-lg md:text-2xl font-serif my-4 text-slate-200 cursor-pointer transition-colors hover:text-slate-400 active:animate-ping"
                key={quote.quote}
                onClick={() => {
                  copyQuoteToClipboard(quote);
                  handelClick();
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
      <PopoverContent className="bg-slate-800 text-white rounded-2xl text-center w-fit">
        Copied!
      </PopoverContent>
    </Popover>
  );
}
