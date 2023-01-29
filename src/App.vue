<template>
  <div class="container">
    <search-field @addCity="addCity"/>
    <card-list :cards="cards"/>
  </div>
</template>

<script>
import {useStore} from "@/store/store";
import SearchField from '@/components/SearchField.vue'
import CardList from '@/components/CardsList.vue'

export default {
  name: 'App',
  components: {
    SearchField,
    CardList
  },
  setup() {
    const store = useStore()
    return {store}
  },
  data() {
    return {
      cards: []
    }
  },
  methods: {
    addCity(search) {
      this.store.addCity(search)
    }
  },
  mounted() {
    this.cards = this.store.getCards
  }

}
</script>

<style lang="scss">
.container {
  background: $background-color;
  padding: 20px 15px;
  margin: 0;
  width: 100%;
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
