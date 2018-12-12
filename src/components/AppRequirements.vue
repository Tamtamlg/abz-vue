<template>
  <div class="requirements" id="requirements">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="requirements__heading">General requirements for the test task</h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row requirements__flex">
        <div class="col-md-6">
          <div class="requirements__text">
            <p>Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.</p>
            <p>If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.</p>
            <p>Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="requirements__img">
            <img src="../assets/img/man-laptop-v1.svg" alt="" class="d-block d-md-none d-lg-block">
            <img src="../assets/img/man-laptop-v2.svg" alt="" class="d-none d-md-block d-lg-none">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRequirements'
}
</script>

<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.requirements {
  min-height: 692px;
  background: #283593 url('../assets/img/bg-2.jpg') center top no-repeat;
  color: #fff;
  padding: 68px 0 52px;
  margin-bottom: 68px;
  @media (min-width: 1025px) {
    padding: 135px 0 100px;
  }
  @media (min-width: 992px) {
    padding: 135px 0 145px;
    margin-bottom: 135px;
  }
  @media (min-width: 768px) {
    padding: 115px 0 105px;
    margin-bottom: 113px;
  }
  
}

.requirements__flex {
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
  }
}

.requirements__heading {
  color: #fff;
  font-family: $font1;
  font-size: 26px; 
  font-weight: 400;
  margin-bottom: 25px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media (min-width: 992px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    font-size: 42px;
    width: 65%;
    margin-bottom: 40px;
  }
}

.requirements__text {
  color: #fefefe;
  font-family: $font2;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  p:not(:last-child) {
    margin-bottom: 24px;
    @media (min-width: 1025px) {
      margin-bottom: 20px;
    }
  }
}

.requirements__img {
  @media (max-width: 767px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
  img {
    display: block;
    max-width: 100%;
    margin: auto; 
  }
}
</style>
