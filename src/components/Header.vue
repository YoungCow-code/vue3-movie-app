<template>
  <header>
    
    <div class="nav nav-pills">
      <div class="nav-item" v-for="nav in navigations" :key="nav.name">
        <RouterLink :to="nav.href" active-class="active" class="nav-link">
          {{nav.name}}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie'
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  }
}
</script>