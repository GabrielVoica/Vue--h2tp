<template>
  <div id="header">
    <nav class="navbar">
        <ul class="navbar-links" v-for="(link,i) in links">
             <router-link class="link" :to="link">{{capitalizedLinks[i]}}</router-link>
        </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    links: [] as Array<String>
  },
  data: () =>{
    return {
      
    }
  },
  computed: {
    capitalizedLinks(){
      return this.links.map((item: String)=>{
        if(item == '/'){
          return 'Home';
        }
        item = item.charAt(0).toUpperCase() + item.substring(1,item.length);
        return item;
      });
    }
  }
})
export default class AppHeader extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

#header{
   background: var(--header-background);
   height: var(--header-height);
   color: var(--header-color);
   width: var(--header-width);

   .navbar{
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .navbar-links{
        margin-left: 5px;
        display: flex;
        justify-content: space-around;
        color: white;
        font-size: 12px;

        .link{
          margin: 10px;
        }
    }
   }
}
</style>
