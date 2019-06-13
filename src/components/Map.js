import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { StaticQuery, graphql } from 'gatsby';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ lat, lng, text }) => (
  <StaticQuery
    query={graphql`
      query ApiQuery {
        site {
          siteMetadata {
            apiKey
          }
        }
      }
    `}
    render={data => {
      const center = {
        lat,
        lng
      };
      const zoom = 15;
      return (
        <>
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <div style={{ height: '445px', width: '95%', marginBottom: '1rem' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: data.site.siteMetadata.apiKey
              }}
              defaultCenter={center}
              defaultZoom={zoom}
            >
              <AnyReactComponent lat={lat} lng={lng} text={text || ''} />
            </GoogleMapReact>
          </div>
        </>
      );
    }}
  />
);

export default Map;
