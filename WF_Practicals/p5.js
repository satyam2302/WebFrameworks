//using nodejs create a web page to read two file names from names from user and append contents of first file into second file

var fs=require('fs');
fs.readFile('first.txt',function(err,data){
fs.appendFile('second.txt',data,function(err){
    if(err) throw err;
    console.log('Saved!');
});    
});