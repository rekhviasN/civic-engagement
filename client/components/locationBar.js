import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import submitLoc from '../actions/locationBarActions';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';
import Form from 'grommet/components/Form';

class LocationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchLocation: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ searchLocation: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.submitLoc(this.state.searchLocation);
    console.log(this.state.searchLocation);
  }

  render() {
    console.log("in locbar");
    return (
       <Form
        onSubmit={this.onFormSubmit}
        pad={{
          vertical: 'small',
          horizontal: 'small'
        }}
        plain={true}
      >
        <Title className="rep-search-bar">
        Find Your Representatives in the News
        </Title>
        <br />
        <TextInput
          className="location-searchbar"
          placeHolder="Enter Address"
          onDOMChange={this.onInputChange}
          value={this.state.searchLocation}
        />
        <Button label='search'
          type='submit'
          primary={true}
          onClick={this.onFormSubmit} />
      </Form>

    );
  }
}


function mapStateToProps(state) {
  return {
    Location: state.searchLocation
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitLoc }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationBar);
