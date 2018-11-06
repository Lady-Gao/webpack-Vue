let watchFun = require("./watchFun.js")
var Path = require('path');
var Fs = require('fs');
var chokidar = require("chokidar");

/**
 * 
 * @param {String} Interface 文件夹下监听
 */
var name = "Interface"
var watchInterFace = chokidar.watch("./src/view/" + name)
var dirname, basenameArr=[]
watchInterFace
/* 新增文件夹 */
.on('addDir', (dirpath) => {
    /* 得到当前文件夹的父级文件夹名 */
    dirname=Path.dirname(dirpath)//
    // let dirnameArr = dirname.split("\\")
    // let newName = dirnameArr[dirnameArr.length - 1]
    // /* 得到当前文件夹名 */
    // let basename=Path.basename(dirpath)
    // /* 仅监听一层文件夹 */
    //         if (newName == name) {
    //            //得到当前文件夹名
    //             basenameArr.push(basename)
    //         }
    })
     .on('ready', (path, ready) => {
         //遍历文件夹列表  添加数组  
          Fs.readdir(dirname, function (err, files) {
              watchFun.addRouter(dirname, files,()=>{
                   watchInterFace.close()
                   
              })
          })
     })
    .on('error', (path, e) => {
        console.log(path, e, "error");
    })


// watch
//     //增加文件
//     .on('add', (path) => {
//         console.log(path, "add");
//     })
//     //新增文件夹
//     .on('addDir', (path) => {
//         console.log(path, "addDir");
//     })
//     // 文件内容改变时
//     .on('change', (path) => {
//         console.log(path, "change");
//     })
//     // 删除文件时
//     .on('unlink', (path) => {
//         console.log(path, "unlink");
//     })
//     // 删除文件夹时
//     .on('unlinkDir', (path) => {
//         console.log(path, "unlinkDir");
//     })
//     .on('error', (path, e) => {
//         console.log(path, e, "error");
//     })