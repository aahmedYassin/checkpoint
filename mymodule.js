const fs=require('fs');
var count=0;


function callback(pathname,extexsion)
{
   fs.readdir(pathname,(err,files)=>
   {
   
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
}

module.exports=callback;
