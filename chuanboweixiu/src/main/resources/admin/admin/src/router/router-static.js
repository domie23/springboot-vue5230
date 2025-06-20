import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import chaunbo from '@/views/modules/chaunbo/list'
    import chengben from '@/views/modules/chengben/list'
    import chuanjia from '@/views/modules/chuanjia/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import guzhang from '@/views/modules/guzhang/list'
    import weibaogongsi from '@/views/modules/weibaogongsi/list'
    import weibaojihua from '@/views/modules/weibaojihua/list'
    import weibaorenyuan from '@/views/modules/weibaorenyuan/list'
    import dictionaryChaunbo from '@/views/modules/dictionaryChaunbo/list'
    import dictionaryChaunboZhuangtai from '@/views/modules/dictionaryChaunboZhuangtai/list'
    import dictionaryChengben from '@/views/modules/dictionaryChengben/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryGuzhang from '@/views/modules/dictionaryGuzhang/list'
    import dictionaryGuzhangZhuangtai from '@/views/modules/dictionaryGuzhangZhuangtai/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryWeibaojihua from '@/views/modules/dictionaryWeibaojihua/list'
    import dictionaryWeibaojihuaYesno from '@/views/modules/dictionaryWeibaojihuaYesno/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChaunbo',
        name: '船舶类型',
        component: dictionaryChaunbo
    }
    ,{
        path: '/dictionaryChaunboZhuangtai',
        name: '船舶状态',
        component: dictionaryChaunboZhuangtai
    }
    ,{
        path: '/dictionaryChengben',
        name: '维修成本类型',
        component: dictionaryChengben
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryGuzhang',
        name: '故障类型',
        component: dictionaryGuzhang
    }
    ,{
        path: '/dictionaryGuzhangZhuangtai',
        name: '故障状态',
        component: dictionaryGuzhangZhuangtai
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryWeibaojihua',
        name: '维保计划类型',
        component: dictionaryWeibaojihua
    }
    ,{
        path: '/dictionaryWeibaojihuaYesno',
        name: '申请状态',
        component: dictionaryWeibaojihuaYesno
    }


    ,{
        path: '/chaunbo',
        name: '船舶',
        component: chaunbo
      }
    ,{
        path: '/chengben',
        name: '维修成本',
        component: chengben
      }
    ,{
        path: '/chuanjia',
        name: '船家',
        component: chuanjia
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/guzhang',
        name: '故障上报',
        component: guzhang
      }
    ,{
        path: '/weibaogongsi',
        name: '维保公司',
        component: weibaogongsi
      }
    ,{
        path: '/weibaojihua',
        name: '维保计划',
        component: weibaojihua
      }
    ,{
        path: '/weibaorenyuan',
        name: '维保人员',
        component: weibaorenyuan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
