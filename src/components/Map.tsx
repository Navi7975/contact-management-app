import React from 'react';
import { useQuery } from 'react-query';
import { fetchCountryData } from '../api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
  const { data, isLoading, error } = useQuery('countryData', fetchCountryData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data?.data && Array.isArray(data.data) && data.data.map((country: any) => (
        <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}>
          <Popup>
            <strong>{country.country}</strong>
            <br />
            Active: {country.active}
            <br />
            Recovered: {country.recovered}
            <br />
            Deaths: {country.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
