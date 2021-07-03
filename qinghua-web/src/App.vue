<template>
  <div id="nav">
    <router-link to="/">情画代售</router-link>
<!--        <router-link to="/about">About</router-link>-->
  </div>
  <div id ="test">
    <router-view/>
  </div>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  #test{
    width: 62% ;
    margin:0 auto;
  }
  @media  screen and  (max-width: 1000px) {
    #test{
      width: 100% ;
      margin:0 auto;
    }
    #area1, #area2, #area3 {
      width: 20%;
    }
    .btn.btn-info.btn-sm{
      width: 30%;
    }
  }

}

#nav {
  //padding: 30px;

  height: 60px;
  border-top: 1px solid #e4ebf4;
  border-bottom: 1px solid #e4ebf4;
  margin-bottom: 20px;
  font-size: 28px;
  line-height: 60px;
  font-weight: bold;
  color: #595959;
  text-align: center;
  a {
    font-weight: bold;
    color: #70aeee;

    &.router-link-exact-active {
      color: #fa65b6;
    }
  }

}
.btn-info{
  background-image: -webkit-linear-gradient(
          190deg
      , #fa7e5f 0%, #fa55ca 100%);
  background-color: #f6d0c5 ;
  border-color: #f5dad3;

}
</style>
