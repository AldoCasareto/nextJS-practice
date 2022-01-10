const Category = ({ articles, category }) => {
  console.log(articles);
  return (
    <div>
      <h1>{category}</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  const { category } = params;
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Aldo"]);

  const response = await fetch(
    `http://localhost:3004/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
