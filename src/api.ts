import axios from 'axios';

const API_BASE = 'https://disease.sh/v3/covid-19';

export const fetchAllData = () => axios.get(`${API_BASE}/all`);
export const fetchCountryData = () => axios.get(`${API_BASE}/countries`);
export const fetchHistoricalData = () => axios.get(`${API_BASE}/historical/all?lastdays=all`);
