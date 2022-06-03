import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div class="flex flex-col justify-center items-center h-screen">
      {articles.map((article) => (
        <ArticleItem key={articles.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
