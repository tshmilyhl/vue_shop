# vue_shop
一个使用element ui开发的后台管理系统

## 一.项目初始化

### 1.1.前台初始化

- npm install -g @vue/cli
- vue ui 
- 安装element插件
- 安装axios
- 配置ssh公钥并上传Github

### 1.2.后台初始化

- 安装MySQL数据库
- 导入mysql.sql文件，导入不成功的解决方式(点击MySQL-front登录数据库导入文件)，导入成功找到数据库目录会有一个命名文件

### 1.3.后台项目的环境安装配置

-  npm install 安装依赖（在后台文件中）
- 运行node app.js
- postman测试接口（参看接口文档）

### 1.4.登录/退出功能

- 登录Token的原理（参看PPT）
- 登录页面的布局
  - 通过Element UI组件实现
- **新的功能在分支上面进行开发，一个功能提交一次Git**
- 登录路径配置路由规则
- 表单的数据绑定
- 表单的数据验证(:rules)
- 表单的重置(resetFileds)
- 表单登录之前的预验证(validate)
- 配置axios发送登录请求
- 弹窗组件的使用(Message)
- 登录跳转到/home
- 路由导航守卫控制访问权限
- 退出功能的实现
- Eslint的配置(省略)

