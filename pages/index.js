import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home Page!</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <button onClick={() => router.push("/product")}>place order</button>
      <h3>Pre-rendering</h3>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default Home;
