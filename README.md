# storage
### 使用说明
#### 分支规范
目前已有分支：
+ master (正式发布分支，发布正式版，必须打版本号tag)
+ develop (开发分支，所有新功能都在develop合并，以develop为准)
+ feature/lyx (个人开发分支，每个人在单独分支开发，开发完成的功能合并到develop)
+ release/0.1.0 (类似于这样的是发布，提交测试的分支，加版本号，release分支可以是多个)
+ hotfix 分支暂时不要吧，毕竟项目太小
...
#### 运行说明

+ 首先把项目克隆到本地
<pre>
  https: git clone https://gitee.com/tab90/storage.git
  或
  ssh: git clone git@gitee.com:tab90/storage.git
</pre>
+ 安装依赖包
<pre>
  npm i 或 cnpm i
</pre>

+ 运行项目
<pre>
  npm run start 或 npm start
</pre>

+ 打包项目
打包到项目根目录/dist目录下，里面的dist.js直接考出来，直接node dist就能使用
<pre>
  npm run build
</pre>

