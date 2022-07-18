<template>
  <div class="sidebar-container" :style="{height: height}">
    <div v-if="containerTitle" class="container-title">
    <h4>{{containerTitle}}</h4>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    height: String,
    foldable: Boolean,
    containerTitle: String
  },
  components: {
  },
  data: () =>{
    return {
      folded: false as Boolean
    }
  }
})
export default class SideBarContainer extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.sidebar-container{
  position: relative;
  width: 90%;
  background: var(--sidebar-container-background);
  margin: 5%;
  border-radius: 6px;

  .container-title{
    position: absolute;
    height: 25px;
    width: 100%;
    top: 0;
    left: 0;
    border-radius: 6px;
    background: rgb(68, 43, 117);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    font-size: 11px;
    color: white;
    padding-left: 5px;
    padding-top: 4px;
  }
}



</style>
