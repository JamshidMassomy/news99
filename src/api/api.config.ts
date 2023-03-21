import { API_BASE_URL } from '../constants';

export const fetchApi = (parms?: any, options: any = {}) => {
  return new Promise((resolve, reject) => {
    const cachedApiKey = localStorage.getItem('apikey') || null;
    const data = {
      method: options?.method || 'GET',
      headers: {
        Accept: 'application/json',
        'X-Api-Key': options?.apiKey || JSON.parse(cachedApiKey),
      },
    };
    const api = API_BASE_URL + parms;
    fetch(api, data).then((response) => {
      if (response.ok) {
        response
          .json()
          .then((json) => resolve({ ...json, apiKey: options?.data?.apiKey }));
      } else {
        response.json().then((json) => reject(json));
      }
    });
  });
};
