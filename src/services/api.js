const BASEURL = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getCountry (country) {
  return fetch(`${BASEURL}/${country}`, headers)
    .then(response => response.json())
}

export default { getCountry }
