import client from '../utils/client';
// API CALLS FOR VOCAB

const endpoint = client.databaseURL;
// TODO: GET VOCAB
const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// TODO: DELETE VOCAB
const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: GET SINGLE VOCAB
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// TODO: CREATE VOCAB // payload is taco
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload), // .stringify turns JS object into JSON text into string format.
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: UPDATE VOCAB
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// FILTER HTML VOCAB
const htmlVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const htmlText = Object.values(data);
        const filteredData = htmlText.filter((item) => item.language === 'HTML');
        resolve(filteredData);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// FILTER CSS VOCAB
const cssVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const cssStyle = Object.values(data);
        const filteredData = cssStyle.filter((item) => item.language === 'CSS');
        resolve(filteredData);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// FILTER JAVASCRIPT VOCAB
const jsVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const javaScript = Object.values(data);
        const filteredData = javaScript.filter((item) => item.language === 'JavaScript');
        resolve(filteredData);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  getVocab,
  createVocab,
  deleteVocab,
  getSingleVocab,
  updateVocab,
  htmlVocab,
  cssVocab,
  jsVocab
};
