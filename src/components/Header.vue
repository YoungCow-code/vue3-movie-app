<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div class="nav-item" v-for="nav in navigations" :key="nav.name">
        <RouterLink  :to="nav.href" active-class="active" :class="{ active: isMatch(nav.path) }" class="nav-link" >
          <span v-if="nav.name == 'Movie'" @click="myFunction">{{nav.name}}</span>
          <span v-else>{{nav.name}}</span>
        </RouterLink>

      </div>
    </div>
    <RouterLink to="/about" class="user">
      <img :src="image" :alt="name">
    </RouterLink>
  </header>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components:{
    Logo,
  },
  data(){
    return{
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie/tt4520988',
          path: /^\/movie/
        },
        {
          name: 'About',
          href: '/about'
        }
      ],
    }
  },
  computed: {
    image(){
      return this.$store.state.about.image
    },
    name(){
      return this.$store.state.about.name
    },
  },
  methods: {
    isMatch(path) {
      if (!path) return false 
      console.log(this.$route);
      return path.test(this.$route.fullPath)
    },
    myFunction() {
      alert("Search를 통해 검색해주세요");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main";
  header{
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    position: relative;
    .logo{
      margin-right: 40px;
    }
    .user{
      width: 40px;
      height: 40px;
      border-radius: 10%;
      padding: 4px;
      box-sizing: border-box;
      background-color: $gray-200;
      cursor: pointer;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      margin: auto;
      transition: .4s;
      &:hover{
        background-color: darken($gray-200, 10%);
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    @include media-breakpoint-down(sm){
      .nav{
        display: none;
      }
    }
  }
</style>