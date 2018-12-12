<template>
  <header class="header mobile-menu" :class="{'shown': showMenu}">
    <div class="container">
      <div class="row">
        <div class="col header__col">
          <a href="#" class="header__logo">
            <AppSvg icon="logo" width="134px" height="24px"/>
          </a>
          <AppHeaderMenu />
          <AppUserBlock />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppUserBlock from '@/components/AppUserBlock.vue'
import AppHeaderMenu from '@/components/AppHeaderMenu.vue'
import AppSvg from '@/components/AppSvg.vue'
export default {
  name: 'AppHeader',
  components: {
    AppUserBlock,
    AppHeaderMenu,
    AppSvg
  },
  computed: {
    showMenu() {
      return this.$store.state.showMenu;
    }
  }
}
</script>

<style scoped lang="scss">


</style>
