import { fetchQuotes } from "@/api/fetchQuotes";

export default function Quote({ quotes }) {
  return (
    <ul>
      {quotes.map((quote) => (
        <li key={quote.quote}>
          &quot;{quote.quote}&quot; - {quote.author}
        </li>
      ))}
    </ul>
  );
}
