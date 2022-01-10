const Post = ({ posts }) => {
  return (
    <div>
      <h1>{posts.title}</h1>
      <h2>{posts.body}</h2>
      <h3> {posts.id}</h3>
    </div>
  );
};

export default Post;

export function getStaticPaths() {
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
