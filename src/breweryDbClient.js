const API = "https://api.openbrewerydb.org";
const SERVER = "http://192.168.1.209:4000";

const genericFetch = (url, optns = {}) =>
  fetch(url, optns).then(resp => {
    if (!resp.ok) throw resp.statusText;
    return resp.json();
  });

const post = (url, payload) =>
  genericFetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

export const getBreweriesByState = state =>
  genericFetch(`${API}/breweries?by_state=${state}`);

export const postNewBooking = booking => post(SERVER + "/bookings", booking);
