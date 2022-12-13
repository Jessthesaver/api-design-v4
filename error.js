setTimeout(()=>{
    throw new Error('oops')
},1)

process.on('uncaughtException',()=>{

})

process.on('unhandledRejection',()=>{
    
})