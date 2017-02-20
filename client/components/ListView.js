import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import NewsList from './newsList';
import search from '../actions/politicianSearchActions';

// this is more of a 'ListViewItem'
class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = { searched: false };
  }

  handleClick() {
    console.log('clicky clicky', this.props.name);
    this.props.search(this.props.name);
    this.setState({ searched: !this.state.searched });
  }

  render() {
    console.log('props at render: ', this.props);
    const visible = this.state.searched;
    return (
      <div>
        <h3>Name </h3><span className="listViewItem">{this.props.name}</span>
        <h3>Title </h3><span className="listViewItem">{this.props.title}</span>
        <h3>Party </h3><span className="listViewItem">{this.props.party}</span>
        <h3>Phone </h3><span className="listViewItem">{this.props.phone}</span>
        <br />
        <button onClick={() => this.handleClick()}>In the news...</button>
        {visible ? (
          <NewsList />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

ListView.propTypes = {
  name: React.PropTypes.string,
  title: React.PropTypes.string,
  party: React.PropTypes.string,
  phone: React.PropTypes.string
};

ListView.defaultProps = {
  name: 'n/a',
  title: 'n/a',
  party: 'n/a',
  phone: 'n/a'
};

function mapStateToProps(state) {
  return { 
    News: state.news
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
// export default ListView;
