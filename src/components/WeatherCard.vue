<template>
  <div class="card">
    <h2>{{ card.cityName }}, {{ card.country }}</h2>
    <apexchart
        width="400"
        type="line"
        :options="chartOptions"
        :series="series"
    ></apexchart>
  </div>
</template>

<script>

export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      chartOptions: {
        chart: {
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            color: '#760cb0',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 0.5,
            inverseColors: true,
          }
        },
        colors: ['rgba(183,168,234,0.97)', 'rgba(148,122,250,0.97)'],
        yaxis: {
          title: {
            text: 'temperature, °C'
          },
        },
        xaxis: {
          labels: {
            format: 'dd MMM',
          },
          type: 'datetime',
          categories: this.card.temperatureHistory.time,
        },
      },
      series: [{
        name: 'temperature',
        data: this.card.temperatureHistory.temperature_2m
      }],
    };
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