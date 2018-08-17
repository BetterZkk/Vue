<template>
    <div>
      <h3>测试vuex，组件之间的传值</h3>
      <h3>这个是vuex中的值{{$store.state.show}}</h3>
      <h3>这个是vuex中getters的值，依赖state的值发生变化{{$store.getters.not_show}}</h3>
      <div>
        <el-row>
          <el-button @click="$store.commit('switch_dialog',mesg)">mutations改变值</el-button>
          <el-button type="primary" @click="$store.dispatch('switch_dialog',mesg)">actions异步改变值</el-button>
          <el-button type="success">成功按钮</el-button>
        </el-row>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name:"addshops",
        data() {
            return {
              mesg:"传递信息"
            }
        }
    }
</script>
