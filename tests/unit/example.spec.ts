import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import SideBarRoomMenu from '@/components/layout/Sidebar/components/SideBarRoomMenu.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


/*describe('SideBarRoomMenu.vue',()=>{
  it('makes the get request to the room list', () =>{
    const rooms = null;
    const wrapper = shallowMount(SideBarRoomMenu,{
       
    });
    expect(wrapper.attributes()['rooms']).toBe('hello');
  })
})/
