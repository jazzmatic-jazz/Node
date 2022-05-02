//The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

var fs = require('fs');
fs.appendFile('newfile1.txt','Appends from using appendfile function', function(err)
  { 
     if(err) throw err;
     console.log('Saved!!');

})
//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", 
//the specified file is opened for writing. 
//If the file does not exist, an empty file is created
fs.open('newfile1.txt','w', function(err) //w means for writing
{ 
    if(err) throw err;
    console.log('Saved the open file');

}
)

//The fs.writeFile() method replaces the specified file and content if it exists. 
//If the file does not exist, a new file, containing the specified content, will be created:

fs.writeFile('newfile1.txt','Content changed', function(err)
{ 
   if(err) throw err;
   console.log('write!!');

})

/*DELETE THE FILE */

fs.unlink('newfile1.txt',function(err)
{ 
   if(err) throw err;
   console.log('deleted!!');

}
)

/*RENAME THE FILE */

fs.rename('newfile1.txt','renaming.txt', function(err)
{ 
   if(err) throw err;
   console.log('renamed!!');

})