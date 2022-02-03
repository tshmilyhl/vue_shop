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
- 创建一个user功能分支并推送到Github中

### 3.权限管理开发

#### 3.1权限列表

- 创建新的rights分支在分支上完成新功能的开发
- 创建新的组件
- 面包屑导航区域
- 调用API获取权限列表数据
- 权限列表数据渲染

#### 3.2 角色列表

- 创建Role组件
- 调用API请求角色列表数据
- 渲染角色列表数据
  - 渲染一级权限列表数据
  - 渲染二级权限列表数据
  - 渲染三级权限列表数据
  - 美化角色列表
- 点击删除权限按钮弹出提示框
- 发起网络请求删除按钮
- 分配权限对话框组件的使用
- 树形控件的使用



#### 4.商品管理开发

- el-table-with-tree-grid组件的使用	
- 自定义模板列的使用
- 添加分页组件
- 添加分类对话框使用
- 获取父级分类数据列表
- 渲染级联选择器
- 清空对话框
- 添加分类
- 编辑分类（自己完成）
- 完成商品管理功能后推送云端

#### 5.参数管理开发

- 创建分类参数组件
- 发送网络请求获取商品分类数据
- 级联选择框的渲染
- 级联选择器只允许选择三级分类

- Tab标签页组件的使用         
- 渲染添加参数按钮并控制按钮禁用状态                  
- * **商品分类的获取 **
  * 切换面板重新获取数据
  * 动态参数和静态属性渲染
  * 添加属性和添加参数的功能（Pending）
  * 渲染添加对话框组件（Peding）
  * 切换Tabas重新获取参数列表数据
  * 渲染添加参数的对话框
  * 动态参数和静态属性的删除操作
  * 渲染参数下的可选项
  * 控制按钮与文本框的切换
  * 文本框自动获得焦点
  * 文本框与按钮的切换
  * 清空表格数据
  * 完成静态属性表格中的展开行效果
  * goods_params分支的合并
  * 创建goods_list分支
  * 添加过滤器格式化时间戳 
  * 分页的实现
  * 实现搜索与清空的功能
  * 步骤条的美化 
  * 步骤条和基本栏之间的联动效果
  * 商品基本信息的绘制	
  * 获取商品分类数据
  * 绘制商品分类的级联选择器
  * 标签页的切换
    - 使用before-leave钩子
  * 获取静态属性数据(没数据库)
  * 商品属性面板的渲染
  * Upload上传图片组件的使用
  * 为上传图片组件绑定请求头字段
  * 添加、移除、预览图片操作
  * 富文本组件的使用
  * 添加商品前的表单预验证
  * 实现表单数据的预验证
  * 安装lodash依赖实现数组的深拷贝
  * 添加商品的实现

