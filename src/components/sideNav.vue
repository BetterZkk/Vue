<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="select"
        background-color="#48576a"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
        router>
        <router-link to="/homepage">
          <el-menu-item index="0">
            <template>
              <i class="el-icon-menu"></i>
              <span>首页</span>
            </template>
          </el-menu-item>
        </router-link>
        <el-submenu index="数据管理">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>数据管理</span>
          </template>
          <el-menu-item-group>
              <el-menu-item index="/userlist">用户列表</el-menu-item>
              <el-menu-item index="/business">商家列表</el-menu-item>
              <el-menu-item index="/food">食品列表</el-menu-item>
              <el-menu-item index="/order">订单列表</el-menu-item>
              <el-menu-item index="/administrator">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="添加数据">
          <template slot="title">
            <i class="el-icon-plus"></i>
            <span slot="title">添加数据</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/addshops">添加商铺</el-menu-item>
            <el-menu-item index="/addfoods">添加商品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-edit"></i>
            <span>编辑</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/textedit">文本编辑</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="设置">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/adminset">管理员设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      select(key,keyPath){
//        key是这个路径的名字，keypath是这个路径
//        通过路由传参数，这个路由的路径，修改导航
      }
    }
  }
</script>
<style>
  .el-menu-item {
    text-align: left;
    font-family: 微软雅黑;
  }

  .el-submenu__icon-arrow {
    font-size: 20px;
    font-weight: 800;
  }

  .el-submenu {
    text-align: left;
  }

  .el-submenu__icon-arrow {
    font-size: 18px;
  }

  a:hover {
    text-decoration: none;
  }
</style>
