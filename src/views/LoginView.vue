<template>
  <div class="home">
    <AppHeader :links="headerLinks"></AppHeader>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import App from '@/App.vue';
import AppHeader from '../components/layout/Header/AppHeader.vue';
import AppSideBar from '../components/layout/Sidebar/AppSideBar.vue';

@Options({
  components: {
    AppHeader,
    AppSideBar
  },
  data: () =>{
    return {
        headerLinks: ['/','register'] as Array<String>
    }
  }
})
export default class HomeView extends Vue {}
</script>
