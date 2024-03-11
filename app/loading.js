import React from "react";

export default function LoadingMessage() {
  return <p>Loading quotes...</p>;
}

export function ErrorMessage({ error }) {
  return <p>Error: {error}</p>;
}
