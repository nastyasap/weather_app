<template>
  <div class="card">
    <button @click="$emit('remove', card.cityName)">x</button>
    <h2>{{ card.cityName }}, {{ card.country }}</h2>
    <span><strong>Tonight: </strong> {{ card.currentWeather.temperature }}°C, {{ weatherDescription }}</span>
    <chart-weather :temperature-history="card.temperatureHistory"/>
  </div>
</template>

<script>

import ChartWeather from "@/components/ChartWeather";
import {formatWeatherCode} from '@/utils/formatWeatherCode.js'

export default {
  components: {ChartWeather},
  data() {
    return {
      weatherDescription: formatWeatherCode(this.card.currentWeather.weathercode)
    }
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin-top: 20px;
  padding: 10px;
  background-color: $color-white;
  border-radius: $border-radius;
  box-shadow: $box-shadow-standard;
}
</style>