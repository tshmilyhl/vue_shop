import Vue from 'vue'
// import { Button } from 'element-ui'
// import  {Form,FormItem} from 'element-ui'
// import {Input } from 'element-ui'
//弹窗组件
// import {Button,} from 'element-ui'
//按需导入
import {
    Message, Form, FormItem, Input,
    Button, Container, Header, Main, Aside,
    Menu, Submenu, MenuItem, Breadcrumb, BreadcrumbItem,
    Card, Row, Col, Table, TableColumn, Switch, Pagination, Dialog, Tooltip,
    MessageBox, Tag, Tree, Select, Option, Cascader, Alert, Tabs, TabPane, Step, Steps, Checkbox,
    CheckboxGroup, Upload
} from "element-ui";


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tooltip)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Upload)



//全局组件
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox .confirm

