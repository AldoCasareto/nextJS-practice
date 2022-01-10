import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} passHref>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
};
