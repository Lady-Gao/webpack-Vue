var Fs = require('fs');
var Path = require('path');
var Mock = require('./template.js');
/* 新增文件夹 
 * 1. 在当前路径 文件夹下创建 indexjs 和vue文件 
*/
exports.addDir=function (path) {
    console.log(path)
    let fileNameArr = path.split("\\")
    let fileName = fileNameArr[fileNameArr.length-1]
    //创建index.js  fileName.vue
    Fs.writeFile(path + "/index.js", Mock.indexExport(fileName), function () {})
    Fs.writeFile(path + "/" + fileName + ".vue", Mock.indexVue(fileName), function () {})
}
/* 编写route文件 
*  生成router路径
*/
exports.addRouter = function (path, basenameArr,callback) {
/* 当前文件夹下的文件夹列表 */
        Fs.writeFile("./src/router/index.js", Mock.routePath(path, basenameArr), function () {
            callback()
        })
        
}