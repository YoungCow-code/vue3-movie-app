<template>
  <div class="about">
    <div class="photo">
      <Loader 
      v-if="imageLoading"
      absolute/>
      <img :src="image">
    </div>
    <div class="name"> {{name}} </div>
    <div class="email"> {{email}} </div>
    <div class="blog"> {{blog}} </div>
    <div class="phone"> {{phone}} </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '../components/Loader.vue'
export default {
  components: {
    Loader
  },
  data() {
    return{
      imageLoading: true
    }
  },
  computed: {
    ...mapState('about', [
      'image',
      'name',
      'email',
      'blog',
      'phone'
    ]),
  },
  mounted() {
    this.init()
  },
  methods: {
    async init(){
      await this.$loadImage(this.image)
      this.imageLoading= false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main";

.about{
  text-align: center;
  .photo{
    width: 250px;
    height: 250px;
    margin: 50px auto 20px;
    padding: 0px;
    border: 10px solid $gray-300;
    border-radius: 5%;
    box-sizing: border-box;
    background-color: $gray-200;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .name{
    font-size: 40px;
    font-family: 'Oswald', sans-serif;
    margin-bottom: 20px;
  }
}
</style>