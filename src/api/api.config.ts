export const fetchApi = (parms?: any, options: any = {}) => {
  const API_BASE_URL = `https://newsapi.org/v2/everything?q=${parms || ''}`;

  return new Promise((resolve, reject) => {
    const cachedApiKey = localStorage.getItem('apikey') || null;
    const fetchData = {
      method: options?.method || 'GET',
      headers: {
        Accept: 'application/json',
        'X-Api-Key': options?.apiKey || JSON.parse(cachedApiKey),
      },
    };

    fetch(API_BASE_URL, fetchData).then((response) => {
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
