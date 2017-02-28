import _ from 'underscore';
import shortid from 'shortid';
import React from 'react';

import NewsItem from './newsItem';

const NewsList = (props) => {
  const { articles } = props.news;

  if (articles.length > 0) {
    const NewsItems = _.map((articles), (article, index) => {
      const key = shortid.generate();
      const { title, blurb, thumb, url } = article;
      return (
        <NewsItem
          key={key}
          title={title}
          blurb={blurb}
          thumb={thumb}
          url={url}
        />
      );
    });
    return (
      <div>
        <h1> this is a test </h1>
        <ol>
          { NewsItems }
        </ol>
      </div>
    );
  }
  return <div>news items: nothing!</div>;
};

export default NewsList;
