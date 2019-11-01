import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'
Vue.use(Vuex)

export default new Vuex.Store({
	//  State  相当于VUE data
	// 获取数据  this.$store.state.age
  state: {
	  goods:[],
	  flag:false,
  },
  // mutations 相当于VUE methods
  // 调用方法 this.$store.commit("函数名",参数列表)
  mutations: {
	  addtocard(state,item){
		  state.goods.push(item)
	  },
	  setlog(state,log){
		  state.flag=log;
		  if(log){
		  		  Cookie.set("islog",true)
				  // ,{expires:1}
		  }
		  else{
		  		  Cookie.remove("islog")
		  }
	  }
	 
  },
  // 类似于computed
  //  this.$store.getters.geetLog
  getters:{
	 getlog(state){
		return state.flag||Cookie.get("islog");
	 } 
  },
  actions: {
  },
  modules: {
  }
})
