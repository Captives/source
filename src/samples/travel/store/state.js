var localCity = null;
try {
  if (localStorage.city) {
    localCity = JSON.parse(localStorage.city);
  }
} catch (e) {
  console.warn('Browsers disabled local storage.');
}

export default {
  login:false,
  city: localCity || {
    "id": 125,
    "spell": "guilin",
    "name": "桂林"
  },
  connect: false,
  list: {},
  chatList: [],
  message: ''
}
