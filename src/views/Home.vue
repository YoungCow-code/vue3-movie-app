<template>
  <Headline />
  <Search />
  <MovieList />
</template>

<script>
// @ is an alias to /src
import Headline from '../components/Headline.vue'
import Search from '../components/Search.vue'
import MovieList from '../components/MovieList.vue'
export default {
  components:{
    Headline,
    Search,
    MovieList
  },
  created(){
    this.$store.commit('movie/resetMovies')
  },
  data(){

  }
}
</script>
