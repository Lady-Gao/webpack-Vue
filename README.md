## 自动化router

 * @author: gaoyanan
 * @version 0.0 .2
 * @created: Tue Nov 06 2018 13:30:01 GMT+0800
 * @see https: //github.com/Lady-Gao
 
### 命令

> cnpm run buildfile
## 监听文件夹下的新建文件  自动生成vue模板
>aaa
>>index.js
```js
import aaa from './aaa.vue';
export default aaa
```
>>aaa.vue
```js
<template>
    <div id="aaa">
    </div>
</template>

<script>
    export default {
        data(){
           
        }
    }
</script>

<style scoped>

</style>
```
> cnpm run watchfile