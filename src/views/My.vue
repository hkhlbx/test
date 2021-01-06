<template>
    <div>
        <input type="text" @keyup.enter.native='addTodo' v-model="message">
        <div v-for="(item,index) in todos">
            <div>
                <span  :class="{'finished':item.isFinish}" @click="isFinish(item)">{{item.text}}</span>
                <!-- <span>{{item}}</span> -->
                ------
                <button @click="delTodo(index)">删除</button>
            </div>
        </div>
        <hr>
        <div>
            {{count}}
        </div>
        <div>
            {{count2}}
        </div>
    </div>
</template>

<script>
    import Store from './store'

    export default{
        name:'My',
        data() {
            return {
                // todos:[
                //     '吃东西','做作业','看电视'
                // ],
                todos:Store.fetch(),
                //Store.fetch(),
                message:"",
                count:0
            }
        },
        methods: {
            addTodo(){
                //console.log("回车");
                this.todos.push({
                    text:this.message,
                   // "isFinish":false
                    isFinish:false
                })
                this.message=""
            },
            delTodo(index){
                //console.log(index);
                this.todos.splice(index,1)
                //从零开始，删除一个
                //this.todos.splice(index,0,'aa','bb')
            },
            isFinish(item){
                item.isFinish=true
            }
        },
        watch:{
            todos:{
                handler:function(todos){
                    Store.save(todos)
                },
                deep:true
            },
            message(newMsg,oldMsg){
                // console.log("newmsg",newMsg);
                // console.log("oldMsg",oldMsg);
            },
            count(newMsg,oldMsg){
                console.log("count由"+oldMsg+"变成了"+newMsg);
            }

        },
        computed:{
            count2(){
                this.count += 20;
                return this.count
            }
        }
    }

</script>

<style>
.finished{
  text-decoration:line-through;
}
</style>