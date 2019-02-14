import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
// import Script from 'react-load-script'
import { incrementCounter, decrementCounter } from "./TestActoins";
import { openModal } from '../modals/modalActions'
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';
// import GoogleMapReact from 'google-map-react';

// const Marker = () => <Icon name='marker' size='big' color='red'/>

export class TestComponent extends Component {

  // static defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33
  //   },
  //   zoom: 11
  // };

  // state = {
  //   address: '',
  //   scriptLoaded: false
  // };

  // handleScriptLoad = () => {
  //   this.setState({ scriptLoaded: true });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();

  //   geocodeByAddress(this.state.address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => console.log('Success', latLng))
  //     .catch(error => console.error('Error', error));
  // };

  // onChange = address => this.setState({ address });


  render() {

    // const inputProps = {
    //   value: this.state.address,
    //   onChange: this.onChange
    // };

    const { incrementCounter, decrementCounter, data, openModal } = this.props;
    return (
      <div>
        {/* <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcUomR0NQOiUDyIh_NfHfRSUHsKixm7rk&libraries=places"
          onLoad={this.handleScriptLoad}
        /> */}
        <h1>Test Compnents</h1>
        <h1>This is the answer: {data}</h1>

        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decrementCounter} color="red" content="Decrement" />
        <br />
        <br />

        <Button onClick={() => openModal('TestModal', {data: 42})} 
        color="teal" content="Open Modal" />

        <br />
        <br />


        {/* <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type="submit">Submit</button>
        </form>
        <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAcUomR0NQOiUDyIh_NfHfRSUHsKixm7rk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div> */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.test.data
});

const mapDispachToAction = {
  incrementCounter,
  decrementCounter,
  openModal
};
export default connect(
  mapStateToProps,
  mapDispachToAction
)(TestComponent);
