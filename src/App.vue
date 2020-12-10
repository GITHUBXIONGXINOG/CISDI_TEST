<template>
    <div id="app">
        <div class="main">
            <!-- 头部导航 -->
            <navigation />
            <transition :name="transitionName">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </transition>

        </div>
    </div>
</template>
<script>
import Navigation from "@/components/Navigation";
export default {
    components:{
        Navigation
    },
    data(){
        return{
            transitionName:''
        }
    },
    watch:{
        $route(to,from){
            // debugger
            if (to.fullPath=='/list'){
                this.transitionName = 'fade-slide-left'
            }else {
                this.transitionName = 'fade-slide-right'
            }
        }
    }
}
</script>

