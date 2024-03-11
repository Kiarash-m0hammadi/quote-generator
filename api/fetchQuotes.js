"use client";
export async function fetchQuotes(category) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const response = await fetch(
    `https://api.api-ninjas.com/v1/quotes?category=${category}`,
    {
      headers: {
        "X-Api-Key": API_KEY,
        "Content-Type": "application/json",
      },
      mode: "cors",
    }
  );
  console.log(response);

  if (!response.ok) {
    throw new Error(`Error fetching quotes: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
