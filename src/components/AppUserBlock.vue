<template>
  <div class="user-block">
    <div class="user-block__info">
      <div class="user-block__name">{{activeUser.name}}</div>
      <div class="user-block__email">{{activeUser.email}}</div>
    </div>
    <a href="#" class="user-block__img">
      <img :src="activeUser.photo" :alt="activeUser.name">
    </a>
    <a href="#" class="user-block__btn d-none d-lg-inline-block">
      <AppSvg icon="sign-out" width="24px" height="20px"/>
    </a>
  </div>
</template>

<script>
import AppSvg from '@/components/AppSvg.vue'
export default {
  name: 'AppUserBlock',
  components: {
    AppSvg
  },
  computed: {
    activeUser() {
      return this.$store.state.activeUser;
    }
  },
  methods: {
    getActiveUser() {
      this.$store.dispatch('getActiveUser');
    }
  },
  created() {
    this.getActiveUser();
  }
}
</script>

<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.user-block {
  display: flex;
  align-items: center;
}

.user-block__info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-block__name {
  color: #000;
  font-family: $font2;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
}

.user-block__email {
  color: #8d8c8c;
  font-family: $font2;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.user-block__img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 15px;
  img {
    display: block;
    max-width: 100%;
  }
  &:hover {
    img {
      opacity: 0.9;
    }
  }
}

.user-block__btn {
  margin-left: 15px;
  text-decoration: none;
  .svg {
    fill: #283593;
  }
  &:hover {
    text-decoration: none;
    .svg {
      fill: #2638bb;
    }
  }
}
</style>
