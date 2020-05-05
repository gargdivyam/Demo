import React,{useState,useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';

const App = () =>{

  const [news, setNews] = useState([]);

  useEffect(()=>{
    getNews();
  },[]);

  const getNews = async () =>{
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5f378f407aab475ea99e946aa4d3bf53`);
    const data = await response.json();
    setNews(data.articles);
    console.log(data);
    console.log("hi");
  }

  return(
    <div className="App">
     {news.map(articles =>(
       <div>
       <h2>{articles.title}</h2>
       <b>{articles.author}</b>
       <img src={articles.urlToImage} style={{width: '50vw'}} alt=""></img>
       <a href={articles.url}>Read More</a>
     <p>{articles.content}</p>
       </div>
     ))}
    </div>
  )
}


export default App;
