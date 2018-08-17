<template>
  <div id="app">
    <el-container>
      <el-aside>
        <side-nav></side-nav>
      </el-aside>
      <el-container>
        <el-header>
          <com-header></com-header>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import comHeader from './components/header.vue'
  import sideNav from './components/sideNav.vue'
  export default {
    name: 'App',
    data(){
      return{

      }
    },
    components: {
      sideNav: sideNav,
      comHeader:comHeader
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    font-weight: 600;
  }

  .el-aside {
    background-color: #48576a;
    color: #333;
    text-align: center;
    line-height: 200px;
    width: 200px;
    height: 950px;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
