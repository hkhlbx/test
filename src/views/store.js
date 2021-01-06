const STORAGE_KEY='todos-vuejs'

export default {
    fetch:function(){
        
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]');
        //JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
        //localStorage  储存
    },
    save:function(items){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
        //JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。



    }
}