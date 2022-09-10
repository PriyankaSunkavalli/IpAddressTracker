import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>
    <img src="/images/icon-location.svg"></img>
</div>;

export default function MapsEx(props){
  const defaultProps = {
    center: {
      lat: props?.data?.latitude,
      lng: props?.data?.longitude
    // lat:16.3007,
    // lng: 80.4639
    },
    zoom: 11
  };
  console.log(props?.data?.latitude)
  console.log(props?.data?.longitude)


  return (
    // Important! Always set the container height explicitly

    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDEj2ZFdJwei_ATNfsoUtkmCfvauoPKgDE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={props?.data?.latitude}
          lng={props?.data?.longitude}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}