<template>
  <div class="acquaintance" id="acquaintance">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="acquaintance__heading">Let's get acquainted</h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="acquaintance__img">
            <img src="../assets/img/man-mobile.svg" alt="">
          </div>
        </div>
        <div class="col-md-8">
          <div class="acquaintance__text">
            <h3 class="acquaintance__subheading">I am cool frontend developer</h3>
            <p>When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
            <p>Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.</p>
            <a href="#" class="acquaintance__link" v-scroll-to="'#registration'">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAcquaintance'
}
</script>

<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.acquaintance {
  margin-bottom: 65px;
  @media (min-width: 1025px) {
    margin-bottom: 80px;
  }
  @media (min-width: 992px) {
    margin-bottom: 100px;
  }
  @media (min-width: 768px) {
    margin-bottom: 135px;
  }
}

.acquaintance__heading {
  color: #000;
  font-family: $font1;
  font-size: 26px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 25px;
  @media (min-width: 992px) {
    font-size: 42px;
  }
  @media (min-width: 768px) {
    margin-bottom: 45px;
  }
}

.acquaintance__subheading {
  color: #000;
  font-family: $font1;
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 5px;
  @media (max-width: 767px) {
    font-size: 22px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 15px;
  }
}

.acquaintance__text {
  p {
    color: #4c4b4b;
    font-family: $font2;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 22px;
    @media (min-width: 1025px) {
      margin-bottom: 10px;
      &:not(:last-of-type) {
        margin-bottom: 22px;
      }
    }
  }
}

.acquaintance__link {
  color: #ef6c00;
  font-family: $font2;
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;

  &:hover {
    color: #fc831f;
    text-decoration: none;
  }
}

.acquaintance__img {
  @media (max-width: 767px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
  }
  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
}
</style>
