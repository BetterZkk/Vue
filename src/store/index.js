import Vue from "vue"
import vuex from "vuex"
Vue.use(vuex);
export default new vuex.Store({
  state:{
    show :false
  },
  mutations:{
    switch_dialog(state,val){//这里的state对应着上面这个state,这里是直接对状态进行修改
      state.show = state.show?false:true;
      console.log(val)
      //你还可以在这里执行其他的操作改变state
    }
  },
  actions:{
    switch_dialog(context,val){//这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switch_dialog',val);
      //你还可以在这里触发其他的mutations方法，这里是对状态进行异步修改
    },
  },
  getters:{
    //getters相当于computer，当依赖的状态发生变化的时候，
    // 这个状态也就发生变化，但是不能直接多这个状态进行改变
    not_show(state){//这里的state对应着上面这个state
      return !state.show;
    }
  },
})
