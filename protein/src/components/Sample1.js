import React, { useState } from "react";
import axios from "axios";

const Header = () => {
  return (
    <div>
      <h1>News App</h1>
    </div>
  );
};

const Search = ({ query, setQuery, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for news"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

const List = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Sample1 = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=73cf10660ae34f51a1e3234e9ed03906`
      );
      console.log(response.data);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <div>
      <Header />
      <Search query={query} setQuery={setQuery} onSearch={handleSearch} />
      <List articles={articles} />
    </div>
  );
};

export default Sample1;
