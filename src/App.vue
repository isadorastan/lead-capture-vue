<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


body, html {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

* {
    box-sizing: border-box;
}

body {
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;

    background: #070020;
}

</style>
