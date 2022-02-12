const fs=require('fs')
const pathName=process.argv[2];
const extexsion = process.argv[3];
fs.readdir(pathName,(err,files)=>{
    if(err)
     console.log(err)
     else
     {

        for(var i=0;i<files.length;i++)
        {
            var ex=files[i].split('.')
             if(ex[1]==extexsion)
              console.log(files[i])
            
        }
     }
})

