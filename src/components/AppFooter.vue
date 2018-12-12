<template>
  <footer class="footer">
    <div class="container footer-top">
      <div class="row footer-top__row">
        <div class="col-md-4">
          <div class="footer__logo">
            <AppSvg icon="logo" width="134px" height="24px"/>
          </div>
        </div>
        <div class="col-md-8">
          <nav class="footer-menu">
            <ul class="footer-menu__list">
              <li class="footer-menu__item">
                <a href="#" class="footer-menu__link">About me</a>
              </li>
              <li class="footer-menu__item">
                <a href="#" class="footer-menu__link">Relationships</a>
              </li>
              <li class="footer-menu__item">
                <a href="#" class="footer-menu__link">Requirements</a>
              </li>
              <li class="footer-menu__item">
                <a href="#" class="footer-menu__link">Users</a>
              </li>
              <li class="footer-menu__item">
                <a href="#" class="footer-menu__link">Sign Up</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="container footer-middle">
      <div class="row footer-middle__row">
        <div class="col-md-4">
          <ul class="footer-contacts">
            <li class="footer-contacts__item">
              <a href="mailto:work.of.future@gmail.com" class="footer-contacts__link">
                <AppSvg icon="mail" width="24px" height="26px"/>
                <span>work.of.future@gmail.com</span>
              </a>
            </li>
            <li class="footer-contacts__item">
              <a href="tel:+380507892498" class="footer-contacts__link">
                <AppSvg icon="phone" width="24px" height="26px"/>
                <span>+38 (050) 789 24 98</span>
              </a>
            </li>
            <li class="footer-contacts__item">
              <a href="tel:+380955560845" class="footer-contacts__link">
                <AppSvg icon="cellphone" width="24px" height="26px"/>
                <span>+38 (095) 556 08 45</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 d-none d-md-block">
          <ul class="footer-links">
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">News</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Blog</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Partners</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Shop</a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 d-none d-md-block">
          <ul class="footer-links">
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Overview</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Design</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Code</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Collaborate</a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 d-none d-md-block">
          <ul class="footer-links">
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Tutorials</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Resources</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Guides</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Examples</a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 d-none d-md-block">
          <ul class="footer-links">
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">FAQ</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Terms</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Conditions</a>
            </li>
            <li class="footer-links__item">
              <a href="#" class="footer-links__link">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <div class="row footer-bottom__row">
        <div class="col-md-4">
          <p class="footer-copy">&copy; abz.agency specially for the test task</p>
        </div>
        <div class="col-md-8">
          <AppFooterSocial />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AppSvg from '@/components/AppSvg.vue'
import AppFooterSocial from '@/components/AppFooterSocial.vue'

export default {
  name: 'AppFooter',
  components: {
    AppFooterSocial,
    AppSvg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.footer {
  background: #283593;
  color: #fff;
  padding-bottom: 23px;
  @media (max-width: 767px) {
   padding: 30px 0;
  }
}

.footer-top {
  position: relative;
  margin-bottom: 25px;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
    height: 1px;
    background: #5f5fc4;
  }
  @media (max-width: 767px) {
    padding-bottom: 30px;
    &::after {
      left: 0;
      right: 0;
    }
  }
}

.footer-top__row {
  min-height: 83px;
  align-items: center;
}

.footer__logo {
  .svg {
    fill: #fff;
  }
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
}

.footer-menu__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center; 
  justify-content: flex-end;
  @media (max-width: 767px) {
    flex-direction: column;
  }
}

.footer-menu__item:not(:last-child) {
  margin-right: 30px;
  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 2px;
  }
}

.footer-menu__link {
  color: #fff;
  font-family: $font2;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #ef6c00;
  }
}

.footer-links {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: right;
}

.footer-links__link {
  color: #fff;
  font-family: $font2;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #ef6c00;
  }
}

.footer-links__item:not(:last-child) {
  margin-bottom: 5px;
}

.footer-contacts {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-contacts__link {
  color: #fff;
  font-family: $font2;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  @media (min-width: 992px) {
    font-size: 20px;
  }
  &:hover {
    text-decoration: none;
    color: #ef6c00;
    .svg {
      fill: #ef6c00;
    }
  }
  .svg {
    fill: #fff;
    margin-right: 5px;
    display: none;
    @media (min-width: 992px) {
      display: inline-block;
    }
  }
}

.footer-contacts__item:not(:last-child) {
  margin-bottom: 13px;
  @media (max-width: 767px) {
    margin-bottom: 5px;
  }
}

.footer-middle {
  margin-bottom: 32px;
}

.footer-copy {
  color: #fff;
  font-family: $font2;
  font-size: 12px;
  font-weight: 400;
  @media (max-width: 767px) {
    margin-bottom: 0;
  }
}

.footer-bottom__row {
  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
}

.footer-logo {
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
}
</style>
