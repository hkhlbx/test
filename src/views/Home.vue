<template>
  <div class="home">
    <news :msg="msg"></news>
    <!-- <router-link to="/home/news"  :msg="msg">news</router-link>| -->
    <router-link :to="{path:'/home/news',query:{name:'这是新闻88'}}" >news</router-link>|
    <router-link to="/home/message">message</router-link>
  </div>
  <router-view></router-view>
  {{print()}}
</template>

<script>
// @ is an alias to /src
import News from '@/components/News.vue'

export default {
  name: 'Home',
  data() {
    return {
      msg:"首页77"
    }
  },
  components: {
    News
  },
 
  methods: {
     print(){
      this.$nextTick(() => {
        //console.log("refs",this.$refs)
      })
     }
  },
}
</script>
