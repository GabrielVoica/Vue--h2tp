<template>
  <div id="sidebar">
    <SideBarContainer height="300px" :foldable="true" containerTitle="Your rooms">
      <SideBarRoomMenu></SideBarRoomMenu>
    </SideBarContainer>

    <SideBarContainer height="100px" :foldable="false">
      <SideBarUserInfo></SideBarUserInfo>
    </SideBarContainer>

    <SideBarContainer height="300px" :foldable="true" containerTitle="Friends">
      <SideBarFriendsMenu></SideBarFriendsMenu>
    </SideBarContainer>


  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SideBarRoomMenu from './components/SideBarRoomMenu.vue';
import SideBarUserInfo from './components/SideBarUserInfo.vue';
import SideBarContainer from './components/SideBarContainer.vue';
import SideBarFriendsMenu from './components/SideBarFriendsMenu.vue';

@Options({
  props: {

  },
  data: () => {
    return {

    }
  },
  components: {
    SideBarRoomMenu,
    SideBarUserInfo,
    SideBarContainer
  },
})
export default class AppSideBar extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#sidebar {
  width: var(--sidebar-width);
  height: var(--sidebar-height);
  left: var(--sidebar-left);
  top: var(--sidebar-top);
  background: var(--sidebar-background);
  position: fixed;
  transition: 0.3s background;
  overflow: scroll;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
