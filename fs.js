const fs=require('fs');

//writing to file

const contendToWrite="Hello,Node.js!!!";
fs.writeFile('example.txt',contendToWrite,(err)=>{
    if(err){
        console.error("Error writing to file",err)
    }else{
        console.log("File written successfully");
    }
    }

)

//Reading the file

fs.readFile('module.txt','utf8',(err,data)=>{
    if (err) {
        console.error("Error in Reading file",err)
    } else {
        console.log("File Content :", data);
    }
})

//file Information
fs.stat("module.txt",(err,stat)=>{
    if (err) {
        console.error("Error in stat",err)
    } else {
        console.log("File size:",stat.size,"bytes")
        console.log("Is the file ?",stat.isFile())
        console.log("Is the Directory?",stat.isDirectory())
    }
    })

    //appending file information
    const contendToAppend="Welcome to MERN OR MEAN stack development !!!"
    fs.appendFile("module.txt",contendToAppend,(err)=>{
        if (err) {
            console.error("Error in appending fil",err)
        } else {
            console.log("Contend appended successfully..")
        }
    })

    //delete a file
    fs.unlink("example.txt",(err)=>{
    if (err){
        console.error("Error in deleting fil",err)
    }else{
        console.log("File deleted successfully..")
    }
    })

    //reading directory
    fs.readdir(".",(err,files)=>{
        if(err){
            console.error("Error in creating directory",err)

        }else{
            console.log("Files in directory",files)
        }
    });

    //removing directory
    fs.rmdir("new-directory",(err)=>{
        if (err) {
            console.error("Error in removing directory",err)
        } else {
            console.log("Directory removed successfully..")
        }
    });