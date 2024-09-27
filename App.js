import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "./Api_Key";
import NewsList from "./NewsList";
import "./App.css";

const API_URL = `https://newsapi.org/v2/top-headlines`;
function App() {
  const [articles, setArticles] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetcharticles();
  }, []);

  const fetcharticles = async () => {
    let pageNo = page + 1;
    console.log(pageNo);
    let response = await axios.get(API_URL, {
      params: { apiKey: API_KEY, country: "us", page },
    });
    //console.log(response,'->')

    setArticles(response.data.articles);
    setTotalResult(response.data.totalResult);
    console.log(articles);
  };
  return (
    <div className="App">
      <h1 className="font-extrabold text-white pb-6 pt-5 text-4xl">News App</h1>
      <NewsList
        articles={articles}
        fetcharticles={fetcharticles}
        totalResult={totalResult}
      />
    </div>
  );
}

export default App;
