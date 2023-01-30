export function formatWeatherCode(weatherCode) {
    switch (weatherCode) {
        case 0:
            return 'Clear sky';
        case 1:
            return 'Mainly clear';
        case 2:
            return 'Partly cloudy';
        case 3:
            return 'Overcast';
        case 45:
            return 'Fog';
        case 48:
            return 'Depositing rime fog';
        case 51 || 53 || 55:
            return 'Drizzle';
        case 56 || 57:
            return 'Freezing Drizzle';
        case 61 || 63 || 65:
            return 'Rain';
        case 66 || 67:
            return 'Freezing Rain';
        case 71 || 73 || 75:
            return 'Snow fall';
        case 77:
            return 'Snow grains';
        case 80 || 81 || 82:
            return 'Rain showers';
        case 85 || 86:
            return 'Snow showers'
        case 95:
            return 'Thunderstorm';
        case 96 || 99:
            return 'Thunderstorm';
        default:
            return ''
    }
}