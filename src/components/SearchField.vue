<template>
  <div class="wrapper">
    <h2 class="title">Weather</h2>
    <div class="searchField">
      <input class="input"
             type="text"
             placeholder="Enter a city..."
             v-model.trim="search"
             @keydown.enter="addCity"/>
      <button class="button" @click="addCity">Search</button>
      <custom-loader v-if="isLoading"/>
    </div>
    <span v-if="isError" class="error">City is not found</span>
  </div>
</template>

<script>
import CustomLoader from "@/components/CustomLoader";

export default {
  name: 'SearchField',
  components: {CustomLoader},
  data() {
    return {
      search: ''
    }
  },
  props: {
    isError: {
      type: Boolean,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
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

  .title {
    margin: 8px 0;
  }

  .error {
    color: $color-error
  }

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
