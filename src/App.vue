<template>
  <div id="app" ref="app">
    <AppMessage/>
    <router-view/>
  </div>
</template>

<script>
import AppMessage from "@/components/AppMessage.vue";
import lazyloading from "@/lazyloading.js";
import supportsWebP from "supports-webp";
export default {
  components: {
    AppMessage
  },
  methods: {
    detectWebp() {
      if (supportsWebP) {
        this.$refs.app.classList.add("webp");
      }
    }
  },
  mounted() {
    this.detectWebp();
    lazyloading();
  }
};
</script>


<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
$font1: "Overpass", sans-serif;
$font2: "Source Sans Pro", sans-serif;

#app {
  position: relative;
}

body {
  margin: 0;
  padding: 0;
  font-family: $font2;
  font-size: 14px;
  color: #000;
  background: #fff;
}

* {
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

::-webkit-input-placeholder {
  color: #8d8c8c;
}

::-moz-placeholder {
  color: #8d8c8c;
}

:-moz-placeholder {
  color: #8d8c8c;
}

:-ms-input-placeholder {
  color: #8d8c8c;
}

/* fix footer */

.wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow: hidden;
  padding-top: 64px;
}

.content {
  flex-grow: 1;
  width: 100%;
  position: relative;
}

/* /fix footer */

@media (min-width: 768px) {
  .container {
    max-width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}

/* btn */

.btn {
  padding: 4px 10px;
  cursor: pointer;
  &:disabled,
  &:disabled:hover {
    cursor: default;
    background: #d7d7d7;
    color: #8d8c8c;
  }
}

.btn--primary {
  color: #fefefe;
  font-family: $font2;
  font-size: 20px;
  font-weight: 700;
  border-radius: 4px;
  background-color: #ef6c00;
  &:hover {
    background-color: #fc8419;
    color: #fefefe;
  }
}

.btn--invers {
  border: 2px solid #ef6c00;
  background: transparent;
  color: #ef6c00;
  font-family: $font2;
  font-size: 20px;
  font-weight: 700;
  &:hover {
    color: #fc831f;
    background: #fee6d2;
  }
}

/* /btn */

h1 {
  font-family: $font1;
  font-size: 50px;
}
h2 {
  font-family: $font1;
  font-size: 42px;
}
h3 {
  font-family: $font1;
  font-size: 26px;
}
h4 {
  font-family: $font1;
  font-size: 22px;
}
h5 {
  font-family: $font1;
  font-size: 18px;
}

@media (max-width: 767px) {
  body {
    text-align: center;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #160c0d;
  opacity: 0.32;
  z-index: 102;
  @media (min-width: 992px) {
    display: none !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.webp .jumbotron.lazy-bg--loaded {
  background-image: url("assets/img/bg-1.webp") !important;
}
.webp .requirements.lazy-bg--loaded {
  background-image: url("assets/img/bg-2.webp") !important;
}
</style>
