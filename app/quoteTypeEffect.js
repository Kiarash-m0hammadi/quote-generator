import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Quote({ quotes }) {
  const words = [];
  for (const obj of quotes) {
    words.push(...obj.quote.split(" ").map((word) => ({ text: word })));
  }

  return (
    <div>
      <ul>
        <TypewriterEffectSmooth
          key={quotes.map((q) => q.quote).join(" ")}
          words={words}
        />
      </ul>
    </div>
  );
}
