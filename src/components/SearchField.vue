<template>
  <div class="wrapper">
    <h2>Get weather for city</h2>
    <div class="searchField">
      <input class="input"
             type="text"
             placeholder="Inter city..."
             v-model.trim="search"
             @keydown.enter="addCity"/>
      <button class="button" @click="addCity">Search</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchField',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    addCity() {
      this.$emit('addCity', this.search)
      this.search = ''
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  @include display(column, flex-start);
  gap: 10px;
  width: 100%;

  .searchField {
    display: flex;
    gap: 10px;
    width: 100%;

    .input {
      color: $color-black;
      padding: 6px 10px;
      box-shadow: $box-shadow-standard;
      border-radius: $border-radius;
      outline: none;
      border: none;
      font-size: $font-size;
    }

    .button {
      @include display();
      box-shadow: $box-shadow-standard;
      border-radius: $border-radius;
      border: none;
      cursor: pointer;
      font-weight: $font-weight-bold;
      background: $colour-secondary;
      color: $color-white;
    }
  }
}

</style>
