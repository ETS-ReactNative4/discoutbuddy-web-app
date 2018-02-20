import React, {Component} from 'react';
import {compose, withProps} from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class MapComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
          >
          {this.props.isMarkerShown && <Marker position={{ lat: this.props.latitude, lng: this.props.longitude }} />}
          </GoogleMap>
        )
    }
}

export default compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyANO36ZOvsUmjZ77Mmp3w-8MLZTQGTzxQA&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `300px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )(MapComponent);