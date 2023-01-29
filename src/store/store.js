import {defineStore} from 'pinia'
import axios from "axios";

const apiLocation = 'https://geocoding-api.open-meteo.com/v1/search'
const apiBase = 'https://api.open-meteo.com/v1/forecast'

export const useStore = defineStore('weather', {
    state: () => ({
        isError: false,
        weatherData: []
    }),

    getters: {
        getCards(state) {
            return state.weatherData
        },
    },
    actions: {
        async addCity(search) {
            try {
                const locationResponse = await axios.get(
                    `${apiLocation}?name=${search}`
                );
                const latitude = locationResponse.data.results[0].latitude
                const longitude = locationResponse.data.results[0].longitude
                const name = locationResponse.data.results[0].name

                const weatherResponse = await axios.get(
                    `${apiBase}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`
                );
                if (this.weatherData.find(({cityName}) => cityName === name) === undefined) {
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
                    console.log(weatherData)
                    this.weatherData.push(weatherData)
                }
            } catch
                (error) {
                console.log(error);
            }
        },
        clearAllCities() {
            // Setting the `weatherData` array to a length of zero clears it
            this.weatherData.length = 0
        }
    }
})