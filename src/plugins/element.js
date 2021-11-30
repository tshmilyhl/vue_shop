import Vue from 'vue'
// import { Button } from 'element-ui'
// import  {Form,FormItem} from 'element-ui'
// import {Input } from 'element-ui'
//弹窗组件
// import {Button,} from 'element-ui'
//按需导入
import {Message,Form,FormItem,Input,Button} from "element-ui";


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

//全局组件
Vue.prototype.$message = Message

