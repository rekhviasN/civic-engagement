import React, { Component } from 'react';
import { connect } from 'react-redux';

import top20Search from '../actions/top20SearchActions';
import { categories, cycles } from '../constants/top20SelectorOptions';


class Top20Console extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'contribution-total',
      cycle: 2016
    };
    this.catHandleChange = this.catHandleChange.bind(this);
    this.cycleHandleChange = this.cycleHandleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.top20Search('pac-total', '2016');
  }

  componentWillUpdate(nextProps, nextState) {
    if (JSON.stringify(this.state) === JSON.stringify(nextState)) {
      return
    }
    this.props.top20Search(this.state.category, this.state.cycle);
  }

  catHandleChange(event) {
    this.setState({
      category: event.target.value
    });
  }

  cycleHandleChange(event) {
    this.setState({
      cycle: event.target.value
    });
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  // }

  render() {
    const catOptions = categories.map(category =>
      (
        <option value={category[0]}>{ category[2] }</option>
      )
    );
    const cycleOptions = cycles.map(cycle =>
      (
        <option value={cycle}>{cycle}</option>
      )
    );

    if (this.props.data) {
      const results = this.props.data.results;
      let spend = [];

      if (results) {
        spend = results.map((candidate, index) => {
          return (
            <div
              key={index}
            >
              {candidate.name}
            </div>
          )
        });

        return (
          <div className="top20-console">
            <div className="row">
              <form>
                <label>
                    Category:
                    <select value={this.state.category} onChange={this.catHandleChange}>
                      {catOptions}
                    </select>
                </label>
                <label>
                    Election Cycle:
                    <select value={this.state.cycle} onChange={this.cycleHandleChange}>
                      {cycleOptions}
                    </select>
                </label>
              </form>
            </div>
            <div>
              { spend }
            </div>
          </div>
        );
      }
      return (
        <div>
          <h3>Loading</h3>
        </div>
      );
    }
    return (
      <div>
        <h3>Loading</h3>
      </div>
    );
  }


    // if (this.props.data) {
    //   const results = this.props.data.results;
    //   let spend = [];
    //
    //   if (results) {
    //     spend = results.map((candidate, index) => {
    //       return (
    //         <div
    //           key={index}
    //         >
    //           {candidate.name}
    //         </div>
    //       )
    //     });
  //
  //       return (
  //         <div className="top20-console">
  //           <div className="row">
  //             <>
  //           </div>
  //           { spend }
  //         </div>
  //       );
  //     }
  //   }
  //   return (
  //     <div>
  //       <h3>Loading</h3>
  //     </div>
  //   );
  // }
}

function mapStateToProps(state) {
  return {
    data: state.Propublica.Top20
  };
}

export default connect(mapStateToProps, { top20Search })(Top20Console);
