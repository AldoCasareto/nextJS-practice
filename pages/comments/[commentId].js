import { comments } from "../../data/comments";

const Comment = ({ comment }) => {
  return <div>{comment.id}</div>;
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const comment = comments.find((comment) => comment.id === +params.commentId);

  return {
    props: {
      comment,
    },
    revalidate: 10,
  };
}

export default Comment;
