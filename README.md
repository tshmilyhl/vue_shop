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
- 将本地代码提交到GitHub
  - 将分支合并到主分支
  - 将主分支和分支推送到Github

### 2.主页布局

- 导入element ui组件
  - el-container/el-header/el-aside
- 左侧导航菜单
- 通过接口获取数据
- 渲染左侧菜单栏数据
- 字体图标优化
- 侧边栏的折叠与展开
- 实现首页路由重定向
- 侧边栏路由的改造
- 在sessionStorage中保存左侧菜单的激活状态
- 绘制用户列表组件的基本结构
- 获取用户列表数据
- el-table组件渲染用户列表
- 添加索引列
- 作用于插槽渲染操作列
  - 通过slot-scope="scope"可以拿到表格的内置row属性(scope.row)

- 分页效果实现
- 修改用户状态
- 实现搜索功能
  - clear事件
  - clearable
  - 清空输入框后显示全部内容
- 添加对话框
- 表单校验规则的绑定
  - **自定义校验规则的使用**
  - v-model绑定数据对象
  - :rules绑定校验规则对象
  - ref绑定引用对象
  - 校验规则prop
- 表单重置
  - close事件
- 表单预校验
- 调用API添加用户
- 绘制修改用户对话框
- 提交表单完成表单预校验并发送网络请求
- MessageBox组件使用
  - 弹框询问用户是否删除
  - 调用接口删除用户

