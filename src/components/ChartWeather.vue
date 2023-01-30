<template>
  <apexchart
      width="400"
      type="line"
      :options="chartOptions"
      :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: "ChartWeather",
  props: {
    temperatureHistory: {
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
          categories: this.temperatureHistory.time,
        },
      },
      series: [{
        name: 'temperature',
        data: this.temperatureHistory['temperature_2m']
      }],
    };
  },
}
</script>

<style scoped>

</style>