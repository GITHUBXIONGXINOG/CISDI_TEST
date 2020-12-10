<template>
    <div class="index">
        <h1>测试列表主页</h1>
        <table>
            <tr class="text-wrap" v-for="(i,index) in 9" :key="index">
                <td class="text-inner" v-for="(j,n) in i" :key="n"
                     v-text="`${j} * ${i} = ${j*i}`"
                >
                </td>
            </tr>
        </table>

    </div>
</template>

<script>

export default {


}
</script>

