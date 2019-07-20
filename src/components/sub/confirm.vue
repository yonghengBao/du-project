<template>
    <div class="confirm-buttom">
        <button @click="getbutton">{{ test || "子组件确认按钮"}}</button>

    </div>
</template>
<script>
export default {
    name:"config-button",
    props:["test"],
    data(){
        return{
            msg:"我是子组件msg",
            url:"123"
        }
    },
    methods:{
        getbutton(){
            this.$emit("message",this.msg);
        }
    }

}
</script>

