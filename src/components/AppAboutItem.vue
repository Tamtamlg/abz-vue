<template>
  <div class="about__item about-item">
    <div class="about-item__img">
      <img :src="require(`../assets/img/${img}.svg`)" alt="">
    </div>
    <div class="about-item__info">
      <h3 class="about-item__heading">{{title}}</h3>
      <p class="about-item__text">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAboutItem',
  props: {
    img: String,
    title: String,
    text: String
  }
}
</script>

<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.about-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  flex-direction: column;
  @media (min-width: 992px) {
    display: block;
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 47px;
  }
}

.about-item__img {
  margin-bottom: 0;
  height: 100px;
  min-width: 185px;
  padding: 0 0 0 25px;
  @media (min-width: 992px) {
    height: 114px;
    min-width: auto;
    margin-bottom: 20px;
    padding: 0;
  }
  img {
    display: block;
    height: 100%;
    margin: auto;
    @media (min-width: 992px) {
      margin: 0;
    }
  }
  @media (max-width: 767px) {
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }
}

.about-item__heading {
  color: #000;
  font-family: $font1;
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 8px;
  }
}

.about-item__text {
  color: #4c4b4b;
  font-family: $font2;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
