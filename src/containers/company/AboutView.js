import React, { Component } from 'react';

class AboutView extends Component {
  render() {
    console.log(this.props.history);
    return (
      <p>hello about us</p>
    );
  }
}

export default AboutView;