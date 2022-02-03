<template>
  <Header />
  <RouterView />
</template>

<style lang="sass">
@import "./scss/main.scss"
</style>

<script>
import Header from './components/Header.vue'
export default {
  components:{
    Header
  }
}
</script>