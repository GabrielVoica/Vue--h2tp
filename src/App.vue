<template>
  <router-view/>
</template>

<style lang="scss">

@tailwind base;
@tailwind components;
@tailwind utilities;

*{
  padding: 0;
  margin: 0;
  transition: 0.5s background;
}


html,body{
  height: 100%;
}

.light{
  //Website colors
  --primary-color: rgb(0, 0, 0);
  --secondary-color: rgb(0, 0, 0);
  --page-background: rgb(0, 0, 0);



  //Header, navbar, top-page
  --header-background: rgb(66, 66, 66);
  --header-bottom-border-background: rgb(90, 90, 90);
  --header-color: rgb(39, 39, 39);
  --header-height: 30px;
  --header-width: 100%;

  //Sidebar
  --sidebar-width: 200px;
  --sidebar-height: 100vh;
  --sidebar-background: rgb(60, 60, 60);
  --sidebar-container-background: rgb(72, 72, 72);
  --sidebar-container-header-background: black;

  --sidebar-room-item-background: linear-gradient(90deg,rgb(50, 93, 110),rgb(93, 93, 93));
  --sidebar-room-item-color: white;


  --chats-container-background: rgb(41, 41, 41);
  --chats-window-background: rgb(91, 91, 91);
}

//TODO
.dark{
 --primary-color: rgb(0, 0, 0);
--secondary-color: blue;
--page-background: rgb(136 111 239);

  //Header, navbar, top-page
  --header-background: rgb(255, 255, 255);
  --header-color: black;
  --header-height: 25px;
  --header-width: 100%;

  //Sidebar
  --sidebar-width: 200px;
  --sidebar-height: 100%;
  --sidebar-background: rgb(87, 12, 12);
}

#app {
  height: 100%;
  background: var(--page-background);
}


</style>
