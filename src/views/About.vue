<template>
  <div class="about" @click="changeLarge">
    <h1>This is an about page{{msg}}</h1>
    
    <h2 v-on:click.stop="change">{{text}}</h2>
    <div v-if="changeShow" v-on:click.stop>
      <input type="text" v-model="text" >
    </div>

    <div v-on:click.stop class="div1">
     <h2>购物车</h2> 
      <!-- <div v-for="item in books" @click="changeActive(item)" v-bind:class="{'Active':item.active}"> -->
        <div v-for="item in books" @click="changeActive(item)" v-bind:class="[item.active?'Active':'lazy']">
        <div>
          <span>{{item.name}}</span>-----------
          <span>{{item.price}}</span>

        </div>
      </div>
      <hr>
      <div>
        Total:     {{sum|capitalize}}  

      </div>
    </div>
    <hr>
    <div >
      <input type="text" placeholder="请输入搜索内容" v-model="searchString">
      <div v-for="item in filterKeyWord">
        {{item.title}}
      </div>
    </div>
    <hr>
    <div>
      <div>
        <a href="#" @click="layout='aaa'" :class="{ccc:layout=='aaa'}">布局1</a>------
        <a href="#" @click="layout='bbb'"  :class="{ccc:layout=='bbb'}">布局2</a>
        
      </div>
      <div>
        <div v-if="layout=='aaa'" class="aaa">
            布局1
        </div>
        <div v-if="layout=='bbb'" class="bbb">
            布局2
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>


  export default{
    name:"about",
    data() {
      return {
        msg:"关于",
        text:"点我，并编辑内容。",
        changeShow:false,
        books:[{
          name:"最佳歌手",
          price:100,
          active:true
        },{
          name:"雅俗共赏",
          price:200,
          active:false
        },{
          name:"花满楼",
          price:300,
          active:false
        }],
        //sum:0,
        searchs:[
          {title:'最佳歌手'},
          {title:'最佳鸽手'},
          {title:'摆脱'},
          {title:'隐隐约约'},
          {title:'宇宙之大'},
          {title:'小宇宙'},
        ],
        searchString:'',
        layout:"",
      }
    },
    methods: {
      change(){
        this.changeShow=!this.changeShow
      },
      changeLarge(){
        this.changeShow=false
      },
      changeActive(item){
        item.active=!item.active
      }
    },
    computed:{
      sum(){
        let sum=0;
       
        this.books.forEach(book => {
          if(book.active){
            sum+=book.price
          }
        });
        return sum
      },
      filterKeyWord(){
        let  searchArr = this.searchs;
        let searchKeyWord=this.searchString;
        if(!searchKeyWord){
          return searchArr
        }
        searchKeyWord=searchKeyWord.trim().toLowerCase();
        searchArr = searchArr.filter(function(item){
          //console.log(item);
          if(item.title.toLowerCase().indexOf(searchKeyWord)!==(-1)){
            return item
          }
        })
        return searchArr;
        },
        
    },
    filters: {
    capitalize: function (value) {
      console.log("capitalize: function (value) {");
      if (!value) return ''
      
      return "$"+value
    }
}
    
  }

  
</script>

<style>
  .about{
    height: 650px;
  }
  .div1{
    background-color: rgb(97,161,188);
  }
  .Active{
    background-color: rgb(142,193,109);
  }
  .lazy{
    background-color: rgb(227,88,133);
  }
  .aaa{
    background-color: aqua;
  }
  .bbb{
    background-color: blueviolet;
  }
  .ccc{
    color: brown;
  }
</style>