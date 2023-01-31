<template>
  <div class="card">
    <div class="deleteWrapper">
      <button class="delete" @click="$emit('remove', card.cityName)">x</button>
    </div>
    <h2 class="title">{{ card.cityName }}, {{ card.country }}</h2>
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

  .deleteWrapper {
    display: flex;
    justify-content: flex-end;

    .delete {
      border-radius: 50%;
      border: none;
      width: 30px;
      height: 30px;
      box-shadow: $box-shadow-standard;
      cursor: pointer;
      font-weight: $font-weight-bold;
      background: $colour-secondary;
      color: $color-white;
    }
  }

  .title {
    margin-top: 0;
  }
}
</style>