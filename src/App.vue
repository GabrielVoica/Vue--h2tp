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
  --primary-color: rgb(111, 89, 224);
  --secondary-color: rgb(54, 54, 189);
  --page-background: rgb(255, 255, 255);

  //Header, navbar, top-page
  --header-background: rgb(32, 8, 72);
  --header-bottom-border-background: rgb(32, 21, 129);
  --header-color: black;
  --header-height: 30px;
  --header-width: 100%;

  //Sidebar
  --sidebar-width: 200px;
  --sidebar-height: 100vh;
  --sidebar-background: rgb(37, 27, 104);
  --sidebar-container-background: rgb(108, 86, 218);

  --sidebar-room-item-background: linear-gradient(90deg,rgb(50, 93, 110),rgb(52, 60, 165));
  --sidebar-room-item-color: white;
}

//TODO
.dark{
 --primary-color: rgb(0, 0, 0);
  --secondary-color: blue;
  --page-background: rgb(43, 46, 46);

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
