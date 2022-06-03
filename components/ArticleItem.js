import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <div class=" bg-gray-200 p-5 max-w-sm rounded overflow-hidden shadow-sm hover:shadow-lg content-center mb-5">
        <a>
          <h3 class="font-bold text-xl hover:text-blue-400 mb-2">
            {article.title.substring(0, 40)}
          </h3>
          <p class="text-gray-700 text-base  mb-5">
            {article.body.substring(0, 100)}
          </p>
        </a>
      </div>
    </Link>
  );
};

export default ArticleItem;
