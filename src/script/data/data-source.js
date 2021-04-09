import axios from 'axios'

const baseUrl = 'https://covid19.mathdro.id/api'

class DataSource {
  static indonesianCovid() {
    return axios
      .get(`${baseUrl}/countries/Indonesia`)
      .then((response) => {
        return response
      })
      .then((responseJson) => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data)
        } else {
          return Promise.reject(`data is not found`)
        }
      })
  }

  static dataCountries() {
    return axios
      .get(`${baseUrl}/countries`)
      .then((response) => {
        return response
      })
      .then((responseJson) => {
        if (responseJson.data.countries) {
          return Promise.resolve(responseJson.data.countries)
        } else {
          return Promise.reject(`data is not found`)
        }
      })
  }

  static selectCountries(country) {
    return axios
      .get(`${baseUrl}/countries/${country}`)
      .then((response) => {
        return response
      })
      .then((responseJson) => {
        console.log(responseJson)
        if (responseJson.data) {
          return Promise.resolve(responseJson.data)
        } else {
          return Promise.reject(`data is not found`)
        }
      })
  }
}

export default DataSource
