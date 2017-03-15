import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'grommet/components/Form';
import SearchInput from 'grommet/components/SearchInput';
import meetupSearch from '../actions/meetupSearchActions';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';

class MeetupSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  }

  onSubmit(event) {
    console.log("woot!")
    event.preventDefault();
    this.props.meetupSearch(this.state.input);
    console.log(this.state.input);
  }
  


  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        pad={{
          vertical: 'small',
          horizontal: 'small'
        }}
        plain={true}
      >
        <TextInput
          className="meetup-searchbar"
          placeHolder="Enter Address"
          onDOMChange={this.onInputChange}
          value={this.state.input}
        />
        <Button label='search'
          type='submit'
          primary={true}
          onClick={this.onSubmit} />
      </Form>
    );
  }
}


function mapStateToProps(state) { // Temporary state setup. Please feel free to modify this.
  return {
    EventLocation: state.input
  };
}

export default connect(mapStateToProps, { meetupSearch })(MeetupSearchBar);
