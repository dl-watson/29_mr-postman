const fetchAPI = (url, method, JSON) => {
  if (method !== "GET") {
    return fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      JSON,
    }).then((res) => res.json());
  }

  return fetch(url).then((res) => res.json());
};

export default fetchAPI;
