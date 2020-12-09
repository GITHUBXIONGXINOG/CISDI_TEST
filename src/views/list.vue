<template>
    <div class="list">
        <div class="list-wrap">
            <div class="list-inner" v-for="(item,index) in list" :key="index">
                <button class="unfold" value="展开"  @click="changeHiddenState(index)">展开</button>
                <transition name="fade">
                    <div class="list-info" v-show="!list[index].isHidden">
                        <span class="list-name">
                            {{list[index].name}}
                        </span>
                        <div class="operating">
                            <button class="insert" value="插入" @click="insertButton(index)">插入</button>
                            <button class="fold" value="折叠" @click="changeHiddenState(index)">折叠</button>
                            <button class="delete" value="删除" @click="deleteButton(index)">删除</button>
                        </div>
                    </div>
                </transition>
            </div>

            <!--  主要操作  -->
            <div class="main-op">
                <div class="add-list" @click="insertNewLine">新增</div>
                <div class="random-list" @click="randomLine">随机排序</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "list",
    data(){
        return{
            list: [
                {
                    "id": 74,
                    "name": "测试元素1",
                    "isHidden": false
                },
                {
                    "id": 43,
                    "name": "测试元素2",
                    "isHidden": false
                },
                {
                    "id": 1,
                    "name": "测试元素3",
                    "isHidden": false
                },
                {
                    "id": 61,
                    "name": "测试元素4",
                    "isHidden": false
                },
                {
                    "id": 84,
                    "name": "测试元素5",
                    "isHidden": false
                }
            ],
            maxNameNum:'',
        }
    },
    methods:{
        //改变当前状态
        changeHiddenState(index){
            this.list[index].isHidden=!this.list[index].isHidden
        },
        //前面插入新行
        insertButton(index){
            let newLine = this.newlineInfo()
            this.list.splice(index,0,newLine)
        },
        //删除当前行
        deleteButton(index){
            this.list[index].isHidden=true
            setTimeout(()=>{
                this.list.splice(index,1)
            },400)

        },
        //生成新行数据
        newlineInfo(){
            let len =  this.list.length
            let lastLine = this.list[len-1]
            let idInfo = this.list.map(item=>{
                return item.id
            })
            let newId=0
            //生成新id,并唯一
            do {
                newId = Math.floor(Math.random()*100)
                idInfo.push(newId)
            }while (len===(new Set(idInfo)).length)
            let newNameNum
            if (!this.maxNameNum){
                //生成最后一个元素的名字数字加一
                let reg = /\d+/
                let nameNum = lastLine.name.match(reg)
                newNameNum = parseInt(nameNum[0])+1
                this.maxNameNum=newNameNum+1
            }else {
                newNameNum = this.maxNameNum++
            }
            let newLine = {
                id:newId,
                name:`测试元素${newNameNum}`,
                isHidden: false
            }
            return newLine
        },
        //新增一行
        insertNewLine(){
            let newLine = this.newlineInfo()
            this.list.push(newLine)
        },
        //随机排序
        randomLine(){
            this.list.sort(function () {
              return 0.5 - Math.random()
            })
        }

    }
}
</script>

