<template>
  <div class="users" id="users">
    <div class="container users__headings-wrap">
      <div class="row">
        <div class="col">
          <h2 class="users__heading">Our cheerful users</h2>
          <h5 class="users__subheading">Attention! Sorting users by registration date</h5>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(item, index) in users" :key="index">
          <AppUserCard 
            :img="item.photo" 
            :name="item.name" 
            :position="item.position" 
            :email="item.email" 
            :phone="item.phone"/>
        </div>
      </div>
    </div>
    <AppLoader v-if="loading" />
    <div class="container users__btn-container">
      <div class="row">
        <div class="col d-flex">
          <button 
            class="btn btn--primary btn--invers m-auto users__btn"
            v-if="isUsersPage"
            @click="getUsers(page, count)"
          >Show more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppUserCard from '@/components/AppUserCard.vue'
import AppLoader from '@/components/AppLoader.vue'
export default {
  name: 'AppUsers',
  components: {
    AppUserCard,
    AppLoader
  },
  data() {
    return {
      count: 6,
      page: 1
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    users() {
      return this.$store.state.users;
    },
    isUsersPage() {
      return this.$store.state.isUsersPage;
    }
  },
  methods: {
    getUsers(page, count) {
      this.$store.dispatch('getUsers', {page: page, count: count});
      this.page++;
    }
  },
  created() {
    this.getUsers(this.page, this.count);
  }
}
</script>

<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.users {
  margin-bottom: 70px;
  @media (min-width: 992px) {
    margin-bottom: 150px;
  }
  @media (min-width: 768px) {
    margin-bottom: 135px;
  }
}

.users__heading {
  color: #000;
  font-family: $font1;
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 15px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 42px;
  }
}

.users__subheading {
  color: #000;
  font-family: $font2;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 0;
  text-align: center;
  @media (max-width: 767px) {
    width: 60%;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
  }
}

.users__headings-wrap {
  margin-bottom: 35px;
  @media (min-width: 992px) {
    margin-bottom: 58px;
  }
}

.users__btn {
  min-width: 290px;
}

.users__btn-container {
  margin-top: 25px;
  @media (min-width: 992px) {
    margin-top: 0;
  }
  @media (max-width: 767px) {
    margin-top: 0;
  }
}
</style>
