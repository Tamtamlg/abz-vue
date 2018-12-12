<template>
  <div class="user-card">
    <div class="user-card__img">
      <img :src="img" :alt="name">
    </div>
    <div class="user-card__info">
      <h4 class="user-card__heading">{{name}}</h4>
      <p class="mb-0 user-card__position">{{position}}</p>
      <p class="mb-0 user-card__email text-truncate">{{email}}</p>
      <p class="mb-0 user-card__phone">{{phone}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppUserCard',
  props: {
    img: String,
    name: String,
    position: String,
    email: String,
    phone: String,
  }
}
</script>

<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;
  text-align: center;
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 58px;
  }
  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
}

.user-card__heading {
  color: #000;
  font-family: $font1;
  font-size: 22px;
  font-weight: 700;
  width: 100%;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 992px) {
    width: 85%;
    margin-bottom: 8px;
  }
}

.user-card__img {
  min-width: 70px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0;
  @media (min-width: 992px) {
    margin-right: 10px;
  }
  img {
    display: block;
    max-width: 100%;
  }
}

.user-card__info {
  padding-top: 15px;
  max-width: 100%;
  @media (min-width: 992px) {
    max-width: calc(100% - 70px);
    padding-top: 25px;
  }
  p {
    font-size: 14px;
    line-height: 18px;
  }
}
</style>
