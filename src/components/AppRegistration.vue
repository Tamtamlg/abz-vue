<template>
  <div class="registration" id="registration">
    <div class="container registration__headings-wrap">
      <div class="row">
        <div class="col">
          <h2 class="registration__heading">Register to get a work</h2>
          <h5 class="registration__subheading">Attention! After successful registration and alert, update the list of users in the block from the top</h5>
        </div>
      </div>
    </div>
    <form class="container registration__form" @submit.prevent="onSubmit">
      <div class="row registration__row">
        <div class="col-md-4 ">
          <div class="form-group" :class="{'is-invalid': $v.name.$error}">
            <label for="inputName" class="registration__lbl">Name</label>
            <input 
              type="text" 
              class="form-control registration__control" 
              id="inputName" 
              placeholder="Your name"
              v-model="name"
              @blur="$v.name.$touch()"
            >
            <span class="invalid-text" v-if="$v.name.$error && !$v.name.required">This field is required</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group" :class="{'is-invalid': $v.email.$error}">
            <label for="inputEmail" class="registration__lbl">Email</label>
            <input 
              type="email" 
              class="form-control registration__control" 
              id="inputEmail" 
              placeholder="Your email"
              v-model="email"
              @blur="$v.email.$touch()"
            >
            <span class="invalid-text" v-if="$v.email.$error && !$v.email.required">This field is required</span>
            <span class="invalid-text" v-if="$v.email.$error && !$v.email.email">Invalid email</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group" :class="{'is-invalid': $v.phone.$error}">
            <label for="inputPhone" class="registration__lbl">Phone</label>
            <input 
              type="tel" 
              class="form-control registration__control" 
              id="inputPhone" 
              placeholder="+38 (___)  ___ __ __"
              v-mask="'+38 (0##) ### ## ##'"
              v-model="phone"
              @blur="$v.phone.$touch()"
            >
            <span class="invalid-text" v-if="$v.phone.$error && !$v.phone.required">This field is required</span>
          </div>
        </div>
      </div>
      <div class="row registration__row">
        <div class="col-md-6">
          <div class="form-group registration__select" :class="{'is-invalid': $v.selectedPosition.$error}" @click="toggleSelect">
            <input type="text" 
              readonly
              class="form-control registration__control" 
              id="inputPosition"
              placeholder="Select your position"
              v-model="selectedPosition.name"
            >
            <span class="invalid-text" v-if="$v.selectedPosition.$error && !$v.selectedPosition.required">This field is required</span>
            <ul class="registration__dropdown registration-dropdown" v-if="opsenSelect">
              <li class="registration-dropdown__item" 
                :class="{'registration-dropdown__item--selected': selectedPosition.name.toLowerCase() === item.name.toLowerCase()}" 
                v-for="item in positions" :key="item.id"
                @click.stop="changeSelectedPosition(item.name, item.id)"
              >{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <div class="input-group">
              <div class="custom-file">
                <input 
                  type="file" 
                  class="custom-file-input" 
                  id="inputFile"
                  ref="file"
                  @change="handleFileChange()"
                >
                <label class="custom-file-label registration__control" for="inputFile">
                  <span>Upload your photo</span>
                  <div class="custom-file-label__btn" role="button">
                    <span class="d-none d-md-inline-block">Browse</span>
                    <AppSvg icon="upload" width="20px" height="24px" class="svg d-block d-md-none"/>
                  </div>
                </label>
              </div>
            </div>
            <small class="registration__hint">File format jpg  up to 5 MB, the minimum size of 70x70px</small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex">
          <button type="submit" class="btn btn--primary registration__btn m-auto" :disabled="$v.$invalid || loading">Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AppSvg from '@/components/AppSvg.vue'
import {required, email} from 'vuelidate/lib/validators'
// import axios from 'axios'

export default {
  name: 'AppRegistration',
  components: {
    AppSvg
  },
  data() {
    return {
      opsenSelect: false,
      name: '',
      email: '',
      phone: '',
      selectedPosition: {
        id: '',
        name: ''
      },
      file: '',
      positionId: ''
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    phone: {
      required
    },
    selectedPosition: {
      required
    },
    file: {
      required
    }
  },
  computed: {
    positions() {
      return this.$store.state.positions;
    },
    loading() {
      return this.$store.state.loading
    }
  },
  methods: {
    toggleSelect() {
      !this.opsenSelect ? this.opsenSelect = true : this.closeSelect();
    },
    closeSelect() {
      this.opsenSelect = false;
      this.$v.selectedPosition.$touch()
    },
    changeSelectedPosition(position, id) {
      this.selectedPosition.name = position;
      this.selectedPosition.id = id;
      this.closeSelect();
    },
    handleFileChange() {
      this.file = this.$refs.file.files[0];
      this.$v.file.$touch()
    },
    onSubmit() {
      let formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('phone', this.phone.split(' ').join('').replace('(', '').replace(')', ''));
      formData.append('position_id', this.selectedPosition.id);
      formData.append('photo', this.file);

      this.$store.dispatch('createNewUser', formData);
      // т.к. авторизации в проекте нет, а для регистрации нового пользователя нужен токен, получим его перед отправкой формы
      // axios.get(this.$store.state.api + '/token')
      //   .then(response => {
      //     console.log('token SUCCESS!!');
      //     let token = response.data.token;
      //     axios.post( this.$store.state.api + '/users', formData, {
      //       headers: {
      //         'Token': token,
      //         'Content-Type': 'multipart/form-data'
      //       }
      //     }).then(function(){
      //       console.log('user SUCCESS!!');
      //     }).catch(function(){
      //       console.log('user FAILURE!!');
      //     });
      //   }).catch(function(){
      //     console.log('token FAILURE!!');
      //   });
      
    }
  },
  created() {
    this.$store.dispatch('getPositions');
  }
}
</script>

<style scoped lang="scss">
$font1: 'Overpass', sans-serif;
$font2: 'Source Sans Pro', sans-serif;
.registration {
  margin-bottom: 60px;
  @media (min-width: 992px) {
    margin-bottom: 150px;
  }
  @media (min-width: 768px) {
    margin-bottom: 117px;
  }
}

.registration__form {
  input:active,
  input:focus {
    border: 1px solid #b7b7b7;
    box-shadow: 0 0 0 1px #b7b7b7 inset;
    outline: none;
  }
  .custom-file-input:focus~.custom-file-label {
    border-color: #b7b7b7;
    box-shadow: 0 0 0 1px #b7b7b7 inset;
  }
  .form-group {
    position: relative;
    @media (max-width: 767px) {
      margin-bottom: 36px;
    }
    input {
      color: #010000;
      font-family: $font2;
      font-size: 16px;
      font-weight: 400;
      
    }
  }
  .custom-file {
    height: 56px;
  }
  .custom-file input {
    height: 56px;
  }
  .custom-file-label {
    z-index: 3;
  }
  .custom-file-label::after {
    display: none;
  }
  .custom-file-label__btn {
    width: 130px;
    color: #ef6c00;
    font-family: $font2;
    font-size: 20px;
    font-weight: 700;
    border: 2px solid #ef6c00;
    height: auto;
    background: #fff;
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    &:hover {
      color: #fc831f;
      background: #fee6d2;
    }
    @media (max-width: 767px) {
      width: 56px;
    }
  }
  @media (max-width: 767px) {
    text-align: left;
  }
}

.registration__row {
  margin-bottom: 25px;
  &:nth-child(2) {
    margin-bottom: 62px;
  }
  @media (max-width: 767px) {
    margin-bottom: 0;
    &:nth-child(2) {
      margin-bottom: 0; 
    }
  }
}

.registration__lbl {
  position: absolute;
  padding: 0 5px;
  background: #fff;
  top: -5px;
  left: 10px;
  color: #8d8c8c;
  font-family: $font2;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
}

.registration__control {
  font-size: 16px;
  height: auto;
  padding: 15px;
  @media (max-width: 767px) {
    text-align: left;
  }
}

.registration__btn {
  min-width: 290px;
}

.registration__headings-wrap {
  margin-bottom: 33px;
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
}

.registration__heading {
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

.registration__subheading {
  color: #010000;
  font-family: $font2;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
  text-align: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 992px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 55%;
    font-size: 18px;
  }
}

.registration__hint {
  display: inline-block;
  color: #8d8c8c;
  font-family: $font2;
  font-size: 12px;
  font-weight: 400;
  padding-left: 15px;
  position: absolute;
  top: 100%;
}

.registration__upload {
  width: 130px;
  color: #ef6c00;
  font-family: $font2;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid #ef6c00;
  height: 56px;
  padding: 0;
}

.registration-dropdown {
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 3px 8px rgba(1, 1, 1, 0.24);
  border-radius: 3px;
  background-color: #fff;
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  right: 0;
  z-index: 5;
}

.registration-dropdown__item {
  color: #393939;
  font-family: $font2;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 16px;
  &:hover {
    cursor: pointer;
    background: #fce2cc;
  }
  &.registration-dropdown__item--selected {
    color: #ef6c00;
  }
}

.registration__select {
  position: relative;
  &::after {
    content: ''; 
    position: absolute;
    z-index: 1;
    right: 11px;
    top: calc(50% - 3px);
    border: 10px solid transparent;
    border-top: 10px solid #000;
    cursor: pointer;
  }
  input {
    cursor: pointer;
    background: #fff;
  }
}

.invalid-text {
  position: absolute;
  top: 100%;
  color: #f44336;
  display: inline-block;
  font-family: $font1;
  font-size: 12px;
  font-weight: 400;
  padding-left: 15px;
}

.is-invalid {
  input {
  border-color: #f44336;
    &:focus {
      border-color: #f44336;
      box-shadow: 0 0 0 1px #f44336 inset;
    }
  }
  .registration__lbl {
    color: #f44336;
  }
}
</style>
