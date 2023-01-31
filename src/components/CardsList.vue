<template>
  <div class="cards" v-if="cards.length > 0">
    <weather-card
        v-for="card in cards"
        :card="card"
        :key="card.cityName"
        @remove="removeCard"
    />
  </div>
  <h2 v-else>List of cities is empty</h2>
</template>

<script>
import WeatherCard from "@/components/WeatherCard";
import {useStore} from "@/store/store";

export default {
  name: "CardsList",
  components: {WeatherCard},
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  setup() {
    const store = useStore()
    return {store}
  },
  methods: {
    removeCard(cityName) {
      this.store.removeCity(cityName)
    }
  }
}
</script>

<style scoped lang="scss">
.cards {
  @include display(row, flex-start, flex-start);
  flex-wrap: wrap;
  gap: 10px 40px;
}

</style>