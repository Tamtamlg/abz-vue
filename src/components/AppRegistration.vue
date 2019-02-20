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
          <div class="form-group" :class="{'is-invalid': errors.first('name')}">
            <label for="inputName" class="registration__lbl">Name</label>
            <input 
              type="text" 
              class="form-control registration__control" 
              id="inputName" 
              placeholder="Your name"
              name="name"
              v-model="name"
              v-validate="'required'"
            >
            <span class="invalid-text">{{ errors.first('name') }}</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group" :class="{'is-invalid': errors.first('email')}">
            <label for="inputEmail" class="registration__lbl">Email</label>
            <input 
              type="email" 
              class="form-control registration__control" 
              id="inputEmail" 
              placeholder="Your email"
              name="email"
              v-model="email"
              v-validate="'required|email'"
              data-vv-validate-on="blur"
            >
            <span class="invalid-text">{{ errors.first('email') }}</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group" :class="{'is-invalid': errors.first('phone')}">
            <label for="inputPhone" class="registration__lbl">Phone</label>
            <input 
              type="tel" 
              class="form-control registration__control" 
              id="inputPhone" 
              name="phone"
              placeholder="+38 (___)  ___ __ __"
              v-mask="'+38 (0##) ### ## ##'"
              v-model="phone"
              v-validate="'required|min:19'"
            >
            <span class="invalid-text">{{ errors.first('phone') }}</span>
          </div>
        </div>
      </div>
      <div class="row registration__row">
        <div class="col-md-6">
          <div class="form-group registration__select" :class="{'is-invalid': errors.first('position')}" @click="toggleSelect">
            <input type="text" 
              readonly
              class="form-control registration__control" 
              id="inputPosition"
              placeholder="Select your position"
              v-model="selectedPosition"
              name="position"
              v-validate="'required'"
            >
            <span class="invalid-text">{{ errors.first('position') }}</span>
            <ul class="registration__dropdown registration-dropdown" v-if="opsenSelect">
              <li class="registration-dropdown__item" 
                :class="{'registration-dropdown__item--selected': selectedPosition.toLowerCase() === item.name.toLowerCase()}" 
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
                  name="file"
                  @change="handleFileChange()"
                  v-validate="'required|ext:jpeg,jpg|size:5242880|mindimensions:500,500'"
                >
                <label class="custom-file-label registration__control" for="inputFile" :class="{'is-invalid': errors.first('file')}">
                  <span v-if="file && file.name">{{file.name}}</span>
                  <span v-else>Upload your photo</span>
                  <div class="custom-file-label__btn" role="button">
                    <span class="d-none d-md-inline-block">Browse</span>
                    <AppSvg icon="upload" width="20px" height="24px" class="svg d-block d-md-none"/>
                  </div>
                </label>
              </div>
            </div>
            <small class="registration__hint" :class="{'invalid-text': errors.first('file')}">File format jpg  up to 5 MB, the minimum size of 70x70px</small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex">
          <button type="submit" class="btn btn--primary registration__btn m-auto" :disabled="!isFormValid">Sign Up</button> 
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AppSvg from '@/components/AppSvg.vue'

// custom validator
const minDimensionsRule = {
  getMessage(field, [width, height], data) {
      return (data && data.message) || `The ${field} field must be UP TO ${width} pixels by ${height} pixels.`;
  },
  validate(files, [width, height]) {
    const validateImage = (file, width, height) => {
    const URL = window.URL || window.webkitURL;
      return new Promise(resolve => {
        const image = new Image();
        image.onerror = () => resolve({ valid: false });
        image.onload = () => resolve({
          valid: image.width >= Number(width) && image.height >= Number(height)
        });

        image.src = URL.createObjectURL(file);
      });
    };
    const list = [];
    for (let i = 0; i < files.length; i++) {
      if (! /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
        return false;
      }
      list.push(files[i]);
    }
    return Promise.all(list.map(file => validateImage(file, width, height)));
  }
};

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
      selectedPosition: '',
      file: '',
      positionId: ''
    }
  },
  computed: {
    positions() {
      return this.$store.state.positions;
    },
    loading() {
      return this.$store.state.loading
    },
    isFormValid () {
      return !Object.keys(this.fields).some(key => this.fields[key].invalid)
    }
  },
  methods: {
    toggleSelect() {
      !this.opsenSelect ? this.opsenSelect = true : this.closeSelect();
    },
    closeSelect() {
      this.opsenSelect = false;
    },
    changeSelectedPosition(position, id) {
      this.selectedPosition = position;
      this.positionId = id;
      this.closeSelect();
    },
    handleFileChange() {
      this.file = this.$refs.file.files[0];
      this.$refs.file.blur();
    },
    onSubmit() {
      let formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('phone', this.phone.split(' ').join('').replace('(', '').replace(')', ''));
      formData.append('position_id', this.positionId);
      formData.append('photo', this.file);

      this.$store.dispatch('createNewUser', formData);
    }
  },
  created() {
    this.$store.dispatch('getPositions');
    // add custom validator
    this.$validator.extend('mindimensions', minDimensionsRule);
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
  &.custom-file-label {
    border-color: #f44336;

  }
  &.custom-file-label:focus {
    border-color: #f44336;
    box-shadow: 0 0 0 1px #f44336 inset;
  }
}
</style>
