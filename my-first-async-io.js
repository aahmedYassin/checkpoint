const fs=require('fs');
var count=0;
const fileName=process.argv[2]
const buf=fs.readFile(fileName,(err,data)=>{
if(err)
 console.log(err);
else
{
 var arr=[...data.toString()];
 for(var i=0;i<arr.length;i++)
 { if(arr[i]=="\n")
    count++;
 }
 console.log(count);
}
});