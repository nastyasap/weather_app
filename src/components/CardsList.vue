<template>
  <h2>List of cities</h2>
  <div class="cards" v-if="cards.length > 0">
    <weather-card
        :card="card"
        :key="card.cityName"
        v-for="card in cards"/>
  </div>
  <h2 v-else>List of cities is empty</h2>
</template>

<script>
import WeatherCard from "@/components/WeatherCard";

export default {
  name: "CardsList",
  components: {WeatherCard},
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
.cards {
  @include display(row, flex-start, flex-start);
  flex-wrap: wrap;
  gap: 10px 40px;
}

</style>