<template>
  <nav class="header-menu">
    <ul class="header-menu__list">
      <li class="header-menu__item">
        <a href="#" class="header-menu__link" v-scroll-to="'#acquaintance'">About me</a>
      </li>
      <li class="header-menu__item">
        <a href="#" class="header-menu__link" v-scroll-to="'#about'">Relationships</a>
      </li>
      <li class="header-menu__item">
        <a href="#" class="header-menu__link" v-scroll-to="'#requirements'">Requirements</a>
      </li>
      <li class="header-menu__item">
        <a href="#" class="header-menu__link" v-scroll-to="'#users'">Users</a>
      </li>
      <li class="header-menu__item">
        <a href="#" class="header-menu__link" v-scroll-to="'#registration'">Sign Up</a>
      </li>
      <li class="header-menu__item d-block d-lg-none">
        <a href="#" class="header-menu__link">Sign Out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeaderMenu'
}
</script>

<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;

.header-menu__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center; 
}

.header-menu__item:not(:last-child) {
  margin-right: 30px;
}

.header-menu__link {
  color: #000000;
  font-family: $font2;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #ef6c00;
  }
}

</style>
