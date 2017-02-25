import _ from 'underscore';
import shortid from 'shortid';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { bio as search } from '../actions/politicianSearchActions';

class RepBillsList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    // propublica lookup for 2 senators + rep
    const { rep } = props;
    this.props.search(rep.name);
    console.log('look up propublica bio: ', rep.name);
  }

  render() {
    /*const { articles } = props.news;

    // if (PoliticianNews && PoliticianNews.articles) {
    if (articles.length > 0) {
      const RepBillsLists = _.map((articles), (article, index) => {
        const key = shortid.generate();
        // console.log(article);
        const { title, blurb, thumb, url } = article;
        return (
          <RepBillsList
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
            { RepBillsLists }
          </ol>
        </div>
      );
    }*/
    return <div>nothing!</div>;
  // }
  }
}

function mapStateToProps(state) {
  return {
    district: state.GoogleResults.district
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RepBillsList);
// export default RepBillsList;
