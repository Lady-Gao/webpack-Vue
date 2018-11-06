let watchFun = require("./watchFun.js")
var Path = require('path');
var chokidar = require("chokidar");

/**
 * 
 * @param {String} Interface 文件夹下监听
 */
var name =  "Interface"
var watchInterFace = chokidar.watch("./src/view/" + name)
let readyFalg=false
var aa=0
watchInterFace
    /* 新增文件夹 */
    .on('addDir', (dirpath)=>{
       /* 文件加载完成开始监听 */
        if(readyFalg){
            /* 得到父级文件夹名 */
            let dirnameArr = Path.dirname(dirpath).split("\\")
            let newName = dirnameArr[dirnameArr.length - 1]
            /* 仅监听一层文件夹 */
            if (newName == name) {
                //文件名  文件夹路径
                watchFun.addDir(dirpath)
            }
        }
    })
    .on('ready', (path, ready) => {
        console.log(0)
            readyFalg=true
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