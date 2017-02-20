import React, { Component } from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NewsItem from './newsItem';
import search from '../actions/politicianSearchActions';

class NewsList extends Component {
  componentWillMount() { // staged to render
    // hit API route
    // ie dispatch an actions
  }

  componentDidMount() { // after rendering
    this.props.search('barack obama'); // debug
  }

  componentWillReceiveProps() {
    console.log('newsList.js componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('newsList.js shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('newsList.js componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('newsList.js componentDidUpdate');
    this.render();
  }

  render() {
    const { PoliticianNews } = this.props;

    if (PoliticianNews && PoliticianNews.articles) {
      const NewsItems = _.map((PoliticianNews.articles), (article, index) => {
        const key = index;
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
    return <div>nothing!</div>;
  }
}

function mapStateToProps(state) {
  return {
    PoliticianNews: state.News.News
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
