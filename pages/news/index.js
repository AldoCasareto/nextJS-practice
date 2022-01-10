const NewsList = ({ articles }) => {
  return (
    <div>
      <h1>News List</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <p>{article.category}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3004/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
