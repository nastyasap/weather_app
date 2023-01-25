<template>
  <div class="container">
    <SearchField/>
    <WeatherCard/>
  </div>
</template>

<script>
import SearchField from './components/SearchField.vue'
import WeatherCard from './components/WeatherCard.vue'

export default {
  name: 'App',
  components: {
    SearchField,
    WeatherCard
  }
}
</script>

<style lang="scss">
.container {
  background: $background-color;
  padding: 20px 15px;
  margin: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
