<template>
    <div class="chats-container">
     <div class="chats-window">

     </div>
    </div>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
       
    },
    components: {
    },
    data: () => {
        return {
            folded: false as Boolean
        }
    }
})
export default class ChatsContainer extends Vue {

}
</script>
  

<style scoped lang="scss">

.chats-container{
    height: 100%;
    width: 100%;
    background: var(--chats-container-background);
    padding: 15px;

    .chats-window{
        height: 100%;
        width: 100%;
        background: var(--chats-window-background);
        border-radius: 3px;
    }
}

</style>
  