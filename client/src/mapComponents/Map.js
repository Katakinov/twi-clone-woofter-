import React from "react";
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
import AutoComplete from "react-google-autocomplete"

  const mapData = [
    {
        firstCoord: 59.964307743264655,
        secondCoord: 30.321685968502226,
        address: "ул. Льва Толстого, 6-8, Санкт-Петербург, 197022"
    },
    {
        firstCoord: 62.046652375083504,
        secondCoord: 129.71422653169765,
        address: "ул. Петра Алексеева, д.87, Якутск, Респ. Саха (Якутия), 677005"
    },
    {
        firstCoord: 43.12479291652452,
        secondCoord: 131.88471043487627,
        address: "Октябрьская ул., 6, Владивосток, Приморский край, 690091"
    }
]

class Map extends React.Component {

  state = {
    address: '',
    city: '',
    area: '',
    state: '',
    zoom: 15,
    height: 400,
    mapPosition: {
        lat: 0,
        lng: 0,
    },
    markerPosition: {
        lat: 0,
        lng: 0,
    }
  }


  getCity = (addressArray) => {
    let city = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  getArea = (addressArray) => {
    let area = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  getState = (addressArray) => {
    let state = '';
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };

  onPlaceSelected = (place) => {
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();

    this.setState({
      address: (address) ? address : '',
      area: (area) ? area : '',
      city: (city) ? city : '',
      state: (state) ? state : '',
      markerPosition: {
        lat: latValue,
        lng: lngValue
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue
      },
    })
  }

  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 43.02439397316359, lng: 131.8937858095847 }} 
      >
      {mapData.map((item, index) => {
        return(
          <Marker
            position={{ lat: item.firstCoord, lng: item.secondCoord }} key={index} 
          >
            <InfoWindow>
              <div>
                {item.address}
              </div>
            </InfoWindow>
          </Marker>
          )})}
          <AutoComplete style={{ width: "100%", height: "40px", paddingLeft: 16, marginTop: 2, marginBottom: "2rem"}}
            types={['(regions)']}
            onPlaceSelected={this.onPlaceSelected}
          />
          </GoogleMap>
          ));
    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUdUqMjQXRRh2D_AcTndVQQ8GzCwKoXME&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `70vh`, width: '70vw', marginTop: 10, marginBottom: 10, marginLeft: 50 }} />}
        mapElement={<div style={{ height: `100%`}} />}
      />
    );
  }
}

export default Map;