<template>
  <ul class="footer-social">
    <li class="footer-social__item">
      <a href="#" class="footer-social__link">
        <AppSvg icon="facebook" width="26px" height="26px"/>
      </a>
    </li>
    <li class="footer-social__item">
      <a href="#" class="footer-social__link">
        <AppSvg icon="linkedin" width="26px" height="26px"/>
      </a>
    </li>
    <li class="footer-social__item">
      <a href="#" class="footer-social__link">
        <AppSvg icon="instagram" width="26px" height="26px"/>
      </a>
    </li>
    <li class="footer-social__item">
      <a href="#" class="footer-social__link">
        <AppSvg icon="twitter" width="26px" height="26px"/>
      </a>
    </li>
    <li class="footer-social__item">
      <a href="#" class="footer-social__link">
        <AppSvg icon="pinterest" width="26px" height="26px"/>
      </a>
    </li>
  </ul>
</template>

<script>
import AppSvg from '@/components/AppSvg.vue'

export default {
  name: 'AppFooterSocial',
  components: {
    AppSvg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.footer-social {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 767px) {
    justify-content: center;
    margin-bottom: 15px;
  }
}

.footer-social__item:not(:last-child) {
  margin-right: 20px;
}

.footer-social__link {
  .svg {
    fill: #fff;
  }
  &:hover {
    .svg {
      fill: #ef6c00;
    }
  }
}
</style>
