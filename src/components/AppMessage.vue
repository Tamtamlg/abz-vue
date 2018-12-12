<template>
  <div class="alert alert-success alert-message" v-if="message">
    {{message}}
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.message;
    }
  }
}
</script>

<style>
  .alert.alert-message {
    position: fixed;
    top: 10px;
    right: 10px;
    max-width: 80%;
    z-index: 100500;
  }
</style>
