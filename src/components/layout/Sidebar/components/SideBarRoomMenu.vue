<template>
  <div id="sidebar-room-menu">
    <div class="room-item" v-for="(room,i) in rooms" key="i">
    <p>{{room.name}}</p>
    <p>{{room.users}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { assertExpressionStatement } from '@babel/types';
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';


@Options({
  props: {
    
  },
  data: () =>{
    return {
      rooms: [] as Array<{}>
    }
  },
  components:{
  },
  mounted(){
    axios.get('api/rooms')
    .then((response : any)=>{
      this.rooms = response.data;
     
    })
  }
})
export default class SideBarRoomMenu extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#sidebar-room-menu{
  padding: 1px;
  padding-top: 26px;

  .room-item{
    display: flex;
    background: var(--sidebar-room-item-background);
    color: var(--sidebar-room-item-color);
    justify-content: space-between;
    padding: 0px 5px;
    margin-bottom: 1px;
  }
}

</style>
