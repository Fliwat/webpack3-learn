# 3-3 编译 ES6

babel-preset针对的语法，比方说ES6、ES7的新特性

babel-polyfill，babel-runtime-transform针对的是函数方法（某些低版本的浏览器不支持），比如Generator(es7)，Set，Map，Array.from，Array.prototype.includes

开发应用使用babel-polyfill(全局垫片)，开发框架使用babel-runtime-transform(局部垫片)

**安装注意**

之前版本安装的命令如下
```javascript
npm install babel-loader@8.0.0-beta.0 @babel/core
```

如果是这个命令，则版本对不上
```javascript
npm install babel-polyfill babel-runtime --save
npm install babel-plugin-transform-runtime --save-dev
```

正确的安装命令
```javascript
npm install @babel/runtime --save
npm install @babel/plugin-transform-runtime --save-dev
```
