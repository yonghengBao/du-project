

<template>
    <div class="first-app">
        {{msg}}
        <conm text="父组件text" @message="getmessage"></conm>

    </div>
</template>
<script>
import conm from "../sub/confirm"
export default {
    name:"fir",
    components:{
        conm
    },
    data(){
        return{
            msg:"haohaoxuexi"
        }
    },
    methods:{
        getmessage(val){
            alert(val);
        }
    }
}
</script>

