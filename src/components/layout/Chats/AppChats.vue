<template>
    <div id="chats">
      <ChatsContainer></ChatsContainer>
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
import ChatsContainer from './components/ChatsContainer.vue';
  
  @Options({
    components: {
     ChatsContainer
    },
    props: {
      
    },
    data: () =>{
      return {
        
      }
    }
  })
  export default class AppChats extends Vue {
   
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  
  #chats{
    height: calc(100% - 30px);
    width: calc(100% - 195px);
    margin-left: 195px;
  }
 
  </style>
  