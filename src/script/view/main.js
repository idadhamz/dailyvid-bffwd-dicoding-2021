import DataSource from '../data/data-source.js'
import '../component/hero-content.js'
import '../component/list-countries.js'
import '../component/search-bar.js'
import '../component/countries-item.js'

const main = () => {
  const heroElement = document.querySelector('hero-content')
  const listCountriesElement = document.querySelector('list-countries')
  const searchBar = document.querySelector('search-bar')
  const countriesItemElement = document.querySelector('countries-item')

  // Get Indonesian Covid
  const getIndonesianCovid = async () => {
    try {
      const result = await DataSource.indonesianCovid()
      renderResultCovid(result)
    } catch (message) {
      fallbackResultCovid(message)
    }
  }

  const renderResultCovid = (results) => {
    heroElement.data = results
  }

  const fallbackResultCovid = (message) => {
    heroElement.renderError(message)
  }

  // Get All Countries
  const getAllCountries = async () => {
    try {
      const result = await DataSource.dataCountries()
      renderResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const renderResult = (results) => {
    listCountriesElement.countries = results
  }

  const fallbackResult = (message) => {
    listCountriesElement.renderError(message)
  }

  // Get All Countries
  const getDetailCountries = async () => {
    try {
      const result = await DataSource.selectCountries(searchBar.value || null)
      renderDetailResult(result)
    } catch (message) {
      fallbacDetailkResult(message)
    }
  }

  const renderDetailResult = (results) => {
    countriesItemElement.country = results
  }

  const fallbacDetailkResult = (message) => {
    countriesItemElement.renderError(message)
  }

  getIndonesianCovid()
  getAllCountries()

  searchBar.clickEvent = getDetailCountries
}

export default main
