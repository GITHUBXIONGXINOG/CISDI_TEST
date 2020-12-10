import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
Vue.use(Vuex)
//生成新行数据
function newlineInfo(state) {
    let len =  state.list.length
    let lastLine = state.list[len-1]
    let idInfo = state.list.map(item=>{
        return item.id
    })
    let newId=0
    //生成新id,并唯一
    do {
        newId = Math.floor(Math.random()*100)
        idInfo.push(newId)
    }while (len===(new Set(idInfo)).length)
    let newNameNum
    if (!state.maxNameNum){
        //生成最后一个元素的名字数字加一
        let reg = /\d+/
        let nameNum = lastLine.name.match(reg)
        newNameNum = parseInt(nameNum[0])+1
        state.maxNameNum=newNameNum+1
    }else {
        newNameNum = state.maxNameNum++
    }
    let newLine = {
        id:newId,
        name:`测试元素${newNameNum}`,
        isHidden: false
    }
    return newLine
}

export default new Vuex.Store({
  state: {
      //数据列表
      list:[],
      //最大名字编号
      maxNameNum:'',
  },
  mutations: {
      //存储list
      queryData(state,payload){
         let {res} = payload
         if (res){
             state.list = res.data.list
         }
     },
      //插入list
      insertNewData(state, payload){
         let {index } = payload
         let newline =  newlineInfo(state)
          if (newline){
              state.list.splice(index,0,newline)
          }
      },
      //删除list
      deleteDataLine(state,index){
          state.list[index].isHidden=true
         if (index>=0){
             setTimeout(()=>{
                 state.list.splice(index,1)
             },400)
         }
      },
      //新增一行
      addNewData(state){
          let newline =  newlineInfo(state)
          if (newline){
              state.list.push(newline)
          }
      },
      //随机顺序
      randomData(state){
          state.list.sort(function () {
              return 0.5 - Math.random()
          })
      },
      //改变当前状态
      changeHiddenState(state,index){
          state.list[index].isHidden= !state.list[index].isHidden
      }

  },
  actions: {
      //获取数据
      async setList({commit}){
          let res =  await api.getLocalJSON()
          if (res){
              commit('queryData',{res})
          }

      }

  },
  getters: {
        //返回list
        getListData(state){
          return   state.list
        }
  }

})
