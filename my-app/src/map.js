
/*
function Map(){
    const [location, setLocation] = useState([]);
    useEffect(() => {
        const handleLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                 
                    },
                
                    (error) => {
                        console.error('Error fetching location:', error);
                        // Handle location fetch error (optional)
             
                    }
                );
            } else {
                console.log('Geolocation not supported');
            }
        };
    
        handleLocation();
    }, []);

const {longitude,latitude}=location;
return (

    <>
    
    <h1>location :{longitude} ,{latitude}</h1>
    </>
)    


}
export default Map;
*/
import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const onMarkerClick = (props, marker) => {
    setSelectedPlace({ name: 'Current location' }); // Update with your logic
  };

  const onInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  return (
    <Map google={props.google} zoom={14}>
      <Marker onClick={onMarkerClick} name={'Current location'} />
      {selectedPlace && (
        <InfoWindow marker={Marker} onClose={onInfoWindowClose}>
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD-buj5rw521DMEqC0hj3Zfsyry-0qyCJU"),
})(MapContainer);
