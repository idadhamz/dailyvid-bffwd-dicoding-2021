import DataSource from '../data/data-source.js'
import '../component/hero-content.js'
import '../component/countries-content.js'

const main = () => {
  const heroElement = document.querySelector('hero-content')
  const countriesContentElement = document.querySelector('countries-content')

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
    countriesContentElement.countries = results
  }

  const fallbackResult = (message) => {
    countriesContentElement.renderError(message)
  }

  getIndonesianCovid()
  getAllCountries()
}

export default main
