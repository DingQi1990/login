/**
 * Created by dllo on 17/4/24.
 */


//创建路由的步揍
    //1.引入exoress
var express=require('express');

//2.通过express 创建路由

var router=express.Router();
//3.路由访问,回调函数
router.get('/',function (req, res) {
    res.render('loginSuccess');
});
//4.模块导出
module.exports=router;
