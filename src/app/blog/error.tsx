"use client";
import React from "react";

export default function ErrorWrap({ error }: { error: Error }) {
  return (
    <div>
      <h2>Ooops!!! {error.message}</h2>
    </div>
  );
}
