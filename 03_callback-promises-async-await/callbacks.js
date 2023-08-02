function asyncTask(cb){
    setTimeout(()=>{
        cb(null,"This is data from server");
    },0)
}


asyncTask((err,data)=>{
    if(err) throw err
    console.log(data)
})