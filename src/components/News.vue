<template>
    <h3>
        这是{{msg}}
    </h3>
    <h3>
        这是{{$route.query.name}}
    </h3>
    {{print1()}}
</template>

<script>
export default{
    name:"news",
    props:[
        "msg"
    ],
    methods: {
       print1(){
        //console.log("parents",this.$parent)
       }
    },
}
</script>

<style>

</style>