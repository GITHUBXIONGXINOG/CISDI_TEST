<template>
    <div id="app">
        <div class="main">
            <!-- 头部导航 -->
            <navigation />
            <router-view/>
        </div>
    </div>
</template>
<script>
import Navigation from "@/components/Navigation";
export default {
    components:{
        Navigation
    }
}
</script>

