<template>
  <div class="cards" v-if="cards.length > 0">
    <weather-card
        v-for="card in cards"
        :card="card"
        :key="card.cityName"
        @remove="$emit('remove', card.cityName)"
    />
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