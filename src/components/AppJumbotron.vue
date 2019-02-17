<template>
  <div class="jumbotron lazy-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-7">
          <div class="jumbotron__info">
            <h1 class="jumbotron__heading">Test assignment for Frontend Developer position</h1>
            <p class="jumbotron__text">We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. <span class="d-none d-md-inline">Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</span></p>
            <a href="#" class="btn btn--primary jumbotron__btn" v-scroll-to="'#registration'">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppJumbotron'
}
</script>

<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.jumbotron {
  background: #283593 center top no-repeat;
  background-size: cover;
  margin-bottom: 67px;
  border-radius: 0;
  padding: 0;
  &.lazy-bg--loaded {
    background-image: url('../assets/img/bg-1.jpg');
  }
  @media (min-width: 992px) {
    margin-bottom: 135px;
  }
  @media (min-width: 768px) {
    margin-bottom: 111px;
  }
}

.jumbotron__info {
  padding: 65px 0 73px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  @media (min-width: 1025px) {
    padding: 130px 0 135px;
  }
  @media (min-width: 992px) {
    padding: 130px 0 157px;
  }
  @media (min-width: 768px) {
    padding: 113px 0 121px;
  }
}

.jumbotron__btn {
  min-width: 290px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
}

.jumbotron__heading {
  color: #fff;
  font-family: $font1;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 5px;
  text-align: center;
  @media (min-width: 992px) {
    font-size: 50px;
  }
  @media (min-width: 768px) {
    font-size: 42px;
    text-align: left;
    margin-bottom: 23px;
  }
}

.jumbotron__text {
  color: #fff;
  font-family: $font2;
  font-size: 16px; 
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 30px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  @media (min-width: 1025px) {
    margin-bottom: 32px;
  }
  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 40px;
  }
  @media (min-width: 768px) {
    text-align: left;
    font-size: 18px;
    width: 100%;
  }
}
</style>
