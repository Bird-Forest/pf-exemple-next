import Link from "next/link";
import React from "react";
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // ** Кешування **
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts");

  return response.json();
}

export default async function BlogPage() {
  const posts = await getData();
  return (
    <div>
      <h2>Blog page</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
