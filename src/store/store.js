import {defineStore} from 'pinia'
import axios from "axios";
import {useStorage} from '@vueuse/core'

const apiLocation = 'https://geocoding-api.open-meteo.com/v1/search'
const apiBase = 'https://api.open-meteo.com/v1/forecast'

export const useStore = defineStore('weather', {
    state: () => ({
        isError: false,
        isLoading: false,
        weatherData: useStorage('weatherData', [])
    }),

    getters: {
        getCards(state) {
            return state.weatherData
        },
        getError(state) {
            return state.isError
        },
        getLoading(state) {
            return state.isLoading
        },
    },
    actions: {
        async addCity(search) {
            try {
                this.isError = false
                this.isLoading = true
                const locationResponse = await axios.get(
                    `${apiLocation}?name=${search}`
                );
                const latitude = locationResponse.data.results[0].latitude
                const longitude = locationResponse.data.results[0].longitude
                const name = locationResponse.data.results[0].name

                const weatherResponse = await axios.get(
                    `${apiBase}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`
                );
                if (this.weatherData.findIndex(({cityName}) => cityName === name) === -1) {
                    const weatherData = {
                        cityName: name,
                        country: locationResponse.data.results[0].country,
                        locationData: {
                            latitude: latitude,
                            longitude: longitude,
                        },
                        temperatureHistory: weatherResponse.data.hourly,
                        currentWeather: weatherResponse.data['current_weather']
                    }
                    if (this.weatherData.length === this.weatherData.push(weatherData)) {
                        this.isError = true
                    } else this.isError = false
                }
            } catch
                (error) {
                this.isError = true
            } finally {
                this.isLoading = false
            }
        },
        removeCity(cityName) {
            const index = this.weatherData.findIndex(city => city.cityName === cityName)
            if (index > -1) {
                this.weatherData.splice(index, 1)
            }
        }
    }
})