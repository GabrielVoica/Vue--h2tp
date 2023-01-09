<template>
  <div id="home" class="home">
    <AppHeader :links="links"></AppHeader>
    <AppSideBar class="shadow-lg"></AppSideBar>
    <AppChats></AppChats>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import App from '@/App.vue';
import AppHeader from '../components/layout/Header/AppHeader.vue';
import AppSideBar from '../components/layout/Sidebar/AppSideBar.vue';
import AppChats from '@/components/layout/Chats/AppChats.vue';

@Options({
  components: {
    AppHeader,
    AppSideBar,
    AppChats
  },
  data: () => {
    return {
      links: ['login','register']
    }
  }
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">

#home{
  background: --page-background;
  height: 100%;
}

</style>