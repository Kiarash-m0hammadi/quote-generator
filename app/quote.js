import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Quote({ quotes }) {
  const [copiedQuote, setCopiedQuote] = useState("");

  function copyQuoteToClipboard(quote) {
    setCopiedQuote(quote.quote);
    navigator.clipboard.writeText(`"${quote.quote}" - ${quote.author}`);
  }
  const handelClick = () => {
    setTimeout(() => {
      document.querySelector("ul").click();
    }, 500);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <ul ul className="mx-3 text-left lg:mx-36 md:mx-16">
            {quotes.map((quote, index) => (
              <div
                key={index}
                onClick={() => {
                  copyQuoteToClipboard(quote);
                  handelClick();
                }}
              >
                <TextGenerateEffect
                  className="text-lg md:text-2xl font-serif my-4 text-slate-200 cursor-pointer transition-colors hover:text-slate-400"
                  key={quote.quote}
                  words={`"${quote.quote}"`}
                />
                <div className="text-lg text-right mr-10 md:text-2xl font-serif my-4 text-slate-400 cursor-pointer transition-colors hover:text-slate-400 ">
                  {`- ${quote.author}`}
                </div>
              </div>
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
