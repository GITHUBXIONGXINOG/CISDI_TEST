<template>
    <div class="list">
        <div class="list-wrap"  v-if="getListData">
            <div class="list-inner" v-for="(item,index) in getListData" :key="index" >
                <button class="unfold" value="展开"  @click="changeHiddenState(index)">展开</button>
                <transition name="fade">
                    <div class="list-info" v-show="!getListData[index].isHidden">
                        <span class="list-name">
                            {{getListData[index].name}}
                        </span>
                        <div class="operating">
                            <button class="insert" value="插入" @click="insertNewData({index})">插入</button>
                            <button class="fold" value="折叠" @click="changeHiddenState(index)">折叠</button>
                            <button class="delete" value="删除" @click="deleteDataLine(index)">删除</button>
                        </div>
                    </div>
                </transition>
            </div>

            <!--  主要操作  -->
            <div class="main-op">
                <div class="add-list" @click="addNewData()">新增</div>
                <div class="random-list" @click="randomData()">随机排序</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
    name: "list",
    created() {
        this.initList()
    },
    methods:{
        //初始化列表
        initList(){
            this.$store.dispatch('setList')
        },
        ...mapMutations([
          'queryData',//设置存储本地json
          'insertNewData',//添加数据
          'deleteDataLine',//删除数据
          'addNewData',//新增数据
          'randomData',//随机顺序
          'changeHiddenState',//改变当前状态
        ])

    },
    computed:{
        ...mapGetters([
          'getListData'//得到list
        ])
    }
}
</script>

