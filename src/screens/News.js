import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Box, Poster} from "../components";


const News = () => {

    const [articles, setArticles ] = useState([])

    const getData = async () => {
        try {
            const {data} = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-02-13&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f')
            setArticles(data.articles)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
      <Box title={'News'}>
          {articles.map(article => (
              <Poster
                  title={article.title}
                  desc={article.description}
                  poster={article.urlToImage}
                  to={article.url}
                  key={article.author}
              />
          ))}
      </Box>
    );
};

export default News;