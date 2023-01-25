<template>
  <div class="wrapper">
    <input class="input"/>
    <button class="button">Search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchField',
  props: {}
}
</script>

<style lang="scss" scoped>
.wrapper {
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

</style>
