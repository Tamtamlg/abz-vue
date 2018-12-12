<template>
  <div class="about" id="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="about__heading">About my relationships with web-development</h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-12">
          <AppAboutItem img="html" title="I'm in love with HTML" text="Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications."/>
        </div>
        <div class="col-lg-4 col-md-12">
          <AppAboutItem img="css" title="CSS is my best friend" text="Cascading Style Sheets (CSS) is a  style sheet language used for describing the presentation of a document written in a markup language like HTML."/>
        </div>
        <div class="col-lg-4 col-md-12">
          <AppAboutItem img="javascript" title="JavaScript is my passion" text="JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppAboutItem from '@/components/AppAboutItem.vue'

export default {
  name: 'AppAbout',
  components: {
    AppAboutItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.about {
  margin-bottom: 45px;
  @media (min-width: 992px) {
    margin-bottom: 143px;
  }
  @media (min-width: 768px) {
    margin-bottom: 77px;
  }
}

.about__heading {
  color: #000;
  font-family: $font1;
  font-size: 26px;
  font-weight: 400;
  width: 100%;
  text-align: center;
  margin: 0 auto 30px;
  @media (min-width: 1025px) {
    width: 55%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
  @media (min-width: 768px) {
    font-size: 42px;
    width: 85%;
    margin: 0 auto 45px;
  }
}
</style>
