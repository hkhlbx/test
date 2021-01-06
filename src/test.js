function fn1(name){    
    var result = name+" fn1 处理过 "
    fn2(result)
}
function fn2(arg){    
    return arg +" fn2 处理过 "
}
fn1("hoho")