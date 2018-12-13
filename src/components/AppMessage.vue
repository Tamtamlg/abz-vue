<template>
  <div class="alert alert-message" v-if="message" :class="{'alert-success': !error, 'alert-danger': error}">
    {{message}}
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.message;
    },
    error() {
      return this.$store.state.error;
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
    min-width: 200px;
    font-size: 16px;
    z-index: 100500;
  }
</style>
