<template>
  <div class="comheader">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>{{navlist[0]}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{navlist[1]}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <img src="../assets/default.jpg" alt="个人信息" class="userinf">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        navlist:[],
        navPath:[]
      }
    },
    created:function () {
      this.navlist=this.$route.meta
    },
    watch: {
      $route(to, from) {
        this.navlist=to.meta;
      }
    },
  }
</script>
<style scoped>
  .comheader {
    display: flex;
    justify-content: space-between;
  }

  .el-breadcrumb {
    height: 60px;
    line-height: 60px;
  }

  .userinf {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>
<style>
  .el-breadcrumb__separator {
    color: black !important;
  }
</style>
