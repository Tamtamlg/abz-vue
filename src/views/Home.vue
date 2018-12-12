<template>
  <div class="wrapper">

    <AppHeaderMob />
    <AppHeader />
    <transition name="fade">
      <div class="overlay" v-if="showMenu" @click="hideMenu"></div>
    </transition>

    <!-- content -->
    <div class="content">
      <main>
        <AppJumbotron />

        <AppAcquaintance />
    
        <AppAbout />

        <AppRequirements />

        <AppUsers />

        <AppRegistration />
      </main>
    </div>
    <!-- /content -->

    <AppFooter />

  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppHeaderMob from '@/components/AppHeaderMob.vue'
import AppJumbotron from '@/components/AppJumbotron.vue'
import AppAcquaintance from '@/components/AppAcquaintance.vue'
import AppAbout from '@/components/AppAbout.vue'
import AppRequirements from '@/components/AppRequirements.vue'
import AppUsers from '@/components/AppUsers.vue'
import AppRegistration from '@/components/AppRegistration.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'home',
  components: {
    AppHeader,
    AppHeaderMob,
    AppJumbotron,
    AppAcquaintance,
    AppAbout,
    AppRequirements,
    AppUsers,
    AppRegistration,
    AppFooter
  },
  computed: {
    showMenu() {
      return this.$store.state.showMenu;
    }
  },
  methods: {
    hideMenu() {
      this.$store.commit('toggleMenu')
    }
  }
  
}
</script>
