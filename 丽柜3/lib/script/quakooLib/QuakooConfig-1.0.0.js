/**
 *  雀科科技- http://www.quakoo.com
 *
 *  配置类
 *
 *
 *  跟后端积木工程对应的接口请保持所有项目一致
 *  积木工程接口，请查看积木工程接口文档
 *
 */


var QuakooConfig = (function () {
    function QuakooConfig() {
        this.isTest=false;
        /**
         * js部分使用的版本号
         * @type {string}
         */
        this.version = "1.0.0";
        this.rootWindowName = "root";
        //头部高度
        this.headHeight = 44;
        //底部高度
        this.bottomHeight = 48;


        //win窗口中打开的FRAME距离顶部的高度（win窗口头部高度）
        this.winHeadHeight = 45;
        //win窗口中打开的FRAME距离底部的高度（win窗口底部高度）
        this.winBottomHeight = 0;

        //是否初始化
        this.isInit = "isInit";
        this.lastTime = 'lastTime';
        //是否播放引导视频
        this.isShowGuide = false;
        //是否需要游客登录
        this.isNeedCustomerUser = false;
        //短信验证码发送时间
        this.Storage_Sms_Time = "smsTime";
        //聊天未读消息数
        this.Storage_chat_num = "chat_num";
        //当前地址
        this.curAddress = 'curAddress';
        //当前经度
        this.curLon = 'curLon';
        //当前纬度
        this.curLat = 'curLat';
        //购物车
        this.cartsKey = 'carts';




        //=======================Quakoo Data配置 开始====================
        this.quakooPage_downNum=12;
        this.quakooDate_upNum=6;
        this.quakooDate_threshold=100;
        this.quakooDate_openUpAction=true;//开始上拉事件效果
        this.quakooDate_customRefreshHeaderInfo=false;        //使用自定义下拉组件


        //使用自定义下拉刷新组件之前，需要在config.xml里面配置要使用的自定义下拉刷新模块名称，如：
        //<preference name="customRefreshHeader" value="UIPullRefresh"/>


        //=======================Quakoo Data配置 开始====================







        //=======================项目所用API 开始====================

        /**api服务地址*/
        this.serverUrl = "";
        /**聊天服务地址*/
        this.chatNativeUrl = "";
        /**图片服务器地址*/
        this.getUploadImageUrl = "";




    }



    var _proto = QuakooConfig.prototype;
    Quakoo.class(QuakooConfig,'QuakooConfig');
    _proto.getServerUrl=function () {
        return this.serverUrl;
    }


    return QuakooConfig;
})();

