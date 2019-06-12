import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 14.50237,
      lng: 121.04357
    },
    zoom: 15
  };

  render() {
    const { lat, lng, text } = this.props;

    const center = {
      lat,
      lng
    };

    console.log({ center });
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '95%', marginBottom: '1rem' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCXXsxV_GFMPxtRkyw42SefsH7RO5oA1Qc' }}
          defaultCenter={center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={lat} lng={lng} text={text || ''} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
