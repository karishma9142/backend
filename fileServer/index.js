const fs = require("fs");
const path = require("path");
const express = require("express");
const { error } = require("console");
const app = express();

app.get("/files" , function(req,res){
    const folderPath = path.join(__dirname, "files");
    fs.readdir(folderPath , function(err,files){
        if(err){
            return res.status(500).json({
                error: "unable to read file"
            })
        }
        res.json(files);
    });
});

app.get("/files/:filename" , function(req,res){
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, "files", fileName);
    console.log(fileName);
    fs.readFile(filePath,"utf-8" , function(err,data){
        if (err) {
            return res.status(404).json({
              error: "File not found"
            });
        }
        res.json({
            fileName : fileName,
            content : data
        });
    });
});
app.post("/" , function(req,res){
    res.status(404).json({
        msg : "Not defined"
    })
});
app.put("/" , function(req,res){
    res.status(404).json({
        msg : "Not defined"
    })
});
app.delete("/" , function(req,res){
    res.status(404).json({
        msg : "Not defined"
    })
});
app.listen(3000);
