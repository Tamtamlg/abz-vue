<template>
  <header class="header d-flex d-lg-none header--mobile">
    <div class="container">
      <div class="row">
        <div class="col header__col">
          <a href="#" class="header__logo">
            <AppSvg icon="logo" width="134px" height="24px"/>
          </a>
          <a class="menu-btn" href="#" role="button" @click.prevent="openMenu">
            <span class="hamburger"></span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppSvg from '@/components/AppSvg.vue'
export default {
  name: 'AppHeaderMob',
  components: {
    AppSvg
  },
  methods: {
    openMenu() {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>

<style lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.header {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
}

.header__col {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-btn {
  display: inline-block;
  width: 22px;
  height: 26px;
  position: relative;
}

.hamburger {
  display: inline-block;
  width: 22px;
  height: 4px;
  top: 0px;
  background: #2b3191;
  position: relative;
  transition: all 0.3s;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 4px;
    background: inherit;
    right: 0;
    top: -10px;
  }

  &::after {
    top: auto;
    bottom: -10px;
    width: 22px;
  }
}

.mobile-menu {
  @media (max-width: 991px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -260px;
    width: 260px;
    background: #fff;
    z-index: 103;
    transition: all 0.3s;
    .container,
    .row,
    .col {
      height: 100%;
    }
    .header__logo {
      display: none;
    }
    .header__col {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      overflow: auto;
    }
    .header-menu {
      order: 2;
      width: 100%;
      padding: 0 10px;
    }
    .header-menu__list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }
    .header-menu__item {
      margin-right: 0;
      margin-bottom: 20px;
    }
    .user-block {
      order: 1;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: flex-start;
      min-height: 180px;
      width: 100%;
      position: relative;
      padding: 25px 10px;
      margin-bottom: 25px;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -15px;
        right: -15px;
        background: #e1e1e1;
        height: 1px;
      }
    }
    .user-block__info {
      align-items: flex-start;
    }
    .user-block__img {
      margin-left: 0;
      width: 67px;
      height: 67px;
      margin-bottom: 20px;
    }
    .user-block__name {
      font-size: 20px;
      margin-bottom: 5px;
    }
    .user-block__email {
      font-size: 13px;
    }
    &.shown {
      left: 0;
    }
  }
}

</style>
