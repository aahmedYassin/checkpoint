const fs=require('fs');
const buf=fs.readFileSync('my-first-io.js');
const str=buf.toString();
var res=str.split('\n');
var count=0;
for(var i=0;i<res.length;i++)
{
    if(res[i]!="\n")
      count++;
}



console.log(count);