import { useEffect,useState } from "react";

function Art(){
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      // Lấy dữ liệu từ API
      const fetchArticles = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setArticles(data);
      };
  
      fetchArticles();
    }, []); // Chỉ chạy một lần khi component được mount
  
    return (
      <div>
        <h1>Danh sách bài viết</h1>
        <ul>
          {articles.map(article => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      </div>
    );
}
export default ArticleList;