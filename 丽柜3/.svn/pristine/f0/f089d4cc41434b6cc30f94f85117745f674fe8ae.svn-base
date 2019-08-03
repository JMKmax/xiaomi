/**
 *  雀科科技- http://www.quakoo.com
 *
 *  业务配置类（继承父类：QuakooConfig）
 *
 *  放本业务相关的配置
 *
 */

var Config = (function(_super){
    function Config(){
        Config.__super.call(this);

        this.isTest = true;
        /**
         * js部分使用的版本号，项目如果持续发布版本，记得更换版本号
         * @type {string}
         */
        this.version = "1.0.0";
        this.hotVersion = "201901020001"
        this.rootWindowName = "root";
        //头部高度
        this.headHeight = 44;
        //底部高度
        this.bottomHeight = 48;

        //win窗口中打开的FRAME距离顶部的高度（win窗口头部高度）
        this.winHeadHeight = 44;
        //win窗口中打开的FRAME距离底部的高度（win窗口底部高度）
        this.winBottomHeight = 0;


        //是否初始化
        this.isInit = "isInit";
        this.lastTime = 'lastTime';
        //是否播放引导视频
        this.isShowGuide = false;
        //是否需要游客登录
        this.isNeedCustomerUser = true;
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
        // 丽柜
        // 国际区号
        this.areaAccount = 86;

        /**api服务地址*/
        this.serverUrl = "http://39.107.239.40:55010";//线上
        // this.serverUrl = "http://192.168.31.116:10035";// 本地
        // this.serverUrl = "http://192.168.3.126:10035";// 本地
        /**聊天服务地址*/
        this.chatNativeUrl = "";
        /**图片服务器地址*/
        this.uploadImageUrl = "http://store.hnrjkfapp.com/storage/handle";
        this.uploadImageDomain = "http://store.hnrjkfapp.com";


        /**聊天地址*/
        this.chatServerUrl = '39.107.247.82';
        /**聊天端口*/
        this.chatPort = '23333';
        /**推送地址*/
        this.pushServerUrl = '39.107.247.82';
        /**推送端口*/
        this.pushPort  = '23333';



    }
    var _proto = Config.prototype;

    Quakoo.class(Config,'Config',_super);


    /**=================================热更新===============================*/
    /**热更新*/
    _super.prototype.getUrl_web_version_hotUpdate = function(){return this.serverUrl + '/hotUpdate/getNewHotUpdateList';}
    /**版本更新*/
    _super.prototype.getUrl_web_version_newVersionList = function(){return this.serverUrl + '/version/getNewVersionList';}
    /**注册协议*/
    _super.prototype.getUrl_web_subordinate_getRegistrationAgreement = function(){return this.serverUrl + '/web/user/getRegistrationAgreement';}



    /*********************************************************用户登录注册*******************************************************/
    // 用户注册时获取验证码
    _super.prototype.getUrl_web_user_createAuthCodeOnReg = function(){return this.serverUrl + '/web/user/createAuthCodeOnReg';};
    // 用户注册
    _super.prototype.getUrl_web_user_register = function(){return this.serverUrl + '/web/user/register';};
    //用户登录
	 _super.prototype.getUrl_web_user_login = function(){return this.serverUrl + '/web/user/login';};
	//用户登录获取验证码
	_super.prototype.getUrl_web_user_createAuthCodeOnLogin = function(){return this.serverUrl + '/web/user/createAuthCodeOnLogin';};
	//用户快速登录
	_super.prototype.getUrl_web_user_loginForCode = function(){return this.serverUrl + '/web/user/loginForCode';};
	//忘记密码 时获取验证码
	_super.prototype.getUrl_web_user_createForgotAuthCode = function(){return this.serverUrl + '/web/user/createForgotAuthCode';};
	//修改密码
	_super.prototype.getUrl_web_user_updatePasswordAndLogin = function(){return this.serverUrl + '/web/user/updatePasswordAndLogin';};
	//微信登录
	_super.prototype.getUrl_web_user_registerWeiXin = function(){return this.serverUrl + '/web/user/registerWeiXin';};
	//QQ登录
	_super.prototype.getUrl_web_user_registerQQ = function(){return this.serverUrl + '/web/user/registerQQ';};
	//微博登录
	_super.prototype.getUrl_web_user_registerWeiBo = function(){return this.serverUrl + '/web/user/registerWeiBo';};
	//绑定手机号时获取验证码
	_super.prototype.getUrl_web_user_bangPhoneCode = function(){return this.serverUrl + '/web/user/bangPhoneCode';};
	//绑定手机号
	_super.prototype.getUrl_web_user_bangPhone = function(){return this.serverUrl + '/web/user/bangPhone';};
    //绑定第三方账号
    _super.prototype.getUrl_web_user_bindingAuthKey = function(){return this.serverUrl + '/web/user/bindingAuthKey';};

    /******************************************************首页-作品相关*****************************************************/
	//作品首页 轮播图列表
	_super.prototype.getUrl_banner_getAllBannerList = function(){return this.serverUrl + '/banner/getAllBannerList';};
	//作品推荐列表
	_super.prototype.getUrl_content_getMostPopularPager = function(){return this.serverUrl + '/content/getMostPopularPager';};
	//按照作品类型查询作品
	_super.prototype.getUrl_content_getContentByTypePager = function(){return this.serverUrl + '/content/getContentByTypePager';};
	//查看作品详情
    _super.prototype.getUrl_content_getContentInfo = function(){return this.serverUrl + '/content/getContentInfo';};
    // 首页搜索(图片视频)
	_super.prototype.getUrl_model_searchByKey = function(){return this.serverUrl + '/model/searchByKey';};
    // 首页搜索(用户)
    _super.prototype.getUrl_flow_searchUser = function(){return this.serverUrl + '/flow/searchUser';};

	//***************************************************首页-模特相关***************************************************
	//模特列表
	_super.prototype.getUrl_model_getRecommendModel = function(){return this.serverUrl + '/model/getRecommendModel';};
    // 模特/摄影师/摄影机构 主页
    _super.prototype.getUrl_model_getModelInfo = function(){return this.serverUrl + '/model/getModelInfo';};
	//个人主页中动态列表
	_super.prototype.getUrl_model_getModelCirclePager = function(){return this.serverUrl + '/model/getModelCirclePager';};
    //个人主页中动态列表
    _super.prototype.getUrl_model_modelSetWeiXinPrice = function(){return this.serverUrl + '/model/modelSetWeiXinPrice';};

    /****************************************************首页-摄影相关**************************************************/
	//摄影师/摄影机构 列表
	_super.prototype.getUrl_model_getPhotographyPager = function(){return this.serverUrl + '/model/getPhotographyPager';};
	//贡献榜
	_super.prototype.getUrl_model_getContributionRankingList = function(){return this.serverUrl + '/model/getContributionRankingList';};
	//收益榜
	_super.prototype.getUrl_model_getModelEarningRankingList = function(){return this.serverUrl + '/model/getModelEarningRankingList';};

    /****************************************************消息页面-消息相关接口**************************************************/
    // 消息列表
    _super.prototype.getUrl_notify_getNoticePager = function(){return this.serverUrl + '/notify/getNoticePager';};
    // 用户意见反馈列表
    _super.prototype.getUrl_suggestion_getSuggestList = function(){return this.serverUrl + '/suggestion/getSuggestList';};
    // 提交建议
    _super.prototype.getUrl_suggestion_addSuggestion = function(){return this.serverUrl + '/suggestion/addSuggestion';};
    // 标记已读
    _super.prototype.getUrl_notify_readNotice = function(){return this.serverUrl + '/notify/readNotice';};
    // 全部标记已读
    _super.prototype.getUrl_notify_readAllNotice = function(){return this.serverUrl + '/notify/readAllNotice';};

    // **************************************************动态页面-动态相关接口***************************************************
    // 发布动态
    _super.prototype.getUrl_circle_addCircle = function(){return this.serverUrl + '/circle/addCircle';};
    // 动态的推荐列表
    _super.prototype.getUrl_circle_getRecommendCirclePager = function(){return this.serverUrl + '/circle/getRecommendCirclePager';};
    // 我关注的动态列表
    _super.prototype.getUrl_circle_getMyFocusCirclePager = function(){return this.serverUrl + '/circle/getMyFocusCirclePager';};
    // 我创建的动态列表
    _super.prototype.getUrl_circle_getMyCreateCirclePager = function(){return this.serverUrl + '/circle/getMyCreateCirclePager';};
    // 查看动态详情
    _super.prototype.getUrl_circle_getCircleInfo = function(){return this.serverUrl + '/circle/getCircleInfo';};
    // 动态置顶
    _super.prototype.getUrl_circle_topCircle = function(){return this.serverUrl + '/circle/topCircle';};


    //************************************************** 我的页面-个人信息相关***************************************************
    //获取用户详情
    _super.prototype.getUrl_web_user_getUserInfo = function(){return this.serverUrl + '/web/user/getUserInfo';};
    //用户信息更新
    _super.prototype.getUrl_web_user_updateUserInfo = function(){return this.serverUrl + '/web/user/updateUserInfo';};
    //获取更新手机号验证码
    _super.prototype.getUrl_web_user_createUpdatePhone = function(){return this.serverUrl + '/web/user/createUpdatePhone';};
    //更新手机号
    _super.prototype.getUrl_web_user_updatePhone = function(){return this.serverUrl + '/web/user/updatePhone';};
    //更新密码
    _super.prototype.getUrl_web_user_updatePassword = function(){return this.serverUrl + '/web/user/updatePassword';};

    // ***********************************************我的页面-我的钱包相关接口******************************************************
    // 我的钱包余额
    _super.prototype.getUrl_wallet_getMyWallet = function(){return this.serverUrl + '/wallet/getMyWallet';};
    // 获取充值价格列表
    _super.prototype.getUrl_wallet_getChargeList = function(){return this.serverUrl + '/wallet/getChargeList';};
    // 充值
    _super.prototype.getUrl_wallet_chargeWallet = function(){return this.serverUrl + '/wallet/chargeWallet';};
    // 获取支付参数
    _super.prototype.getUrl_wallet_orderPayParam = function(){return this.serverUrl + '/wallet/orderPayParam';};
    // 获取支付宝参数
    _super.prototype.getUrl_wallet_aliAuthParam = function(){return this.serverUrl + '/wallet/aliAuthParamUrl';};
    // - 绑定支付宝、微信
    _super.prototype.getUrl_wallet_bangCount = function(){return this.serverUrl + '/wallet/bangCount';};
    // 提现
    _super.prototype.getUrl_wallet_cashMoney = function(){return this.serverUrl + '/wallet/cashMoney';};
    // 获取钱包记录
    _super.prototype.getUrl_wallet_getWalletRecordPager = function(){return this.serverUrl + '/wallet/getWalletRecordPager';};

    //***************************************************我的页面-我的订单 *******************************************************
    // 我的订单
    _super.prototype.getUrl_model_getOrderPager = function(){return this.serverUrl + '/model/getOrderPager';};

    //***************************************************我的页面-我的作品 *******************************************************
    // 我的订单
    _super.prototype.getUrl_content_getMyContentPager = function(){return this.serverUrl + '/content/getMyContentPager';};


    //***************************************************我的页面-我的订阅 *******************************************************
    // 我的订阅列表
    _super.prototype.getUrl_model_getSubscriptionPager = function(){return this.serverUrl + '/model/getSubscriptionPager';};

    //***************************************************我的页面-认证相关接口*******************************************************
    // 认证成为 模特、摄影师、摄影机构
    _super.prototype.getUrl_model_certificationOtherUser = function(){return this.serverUrl + '/model/certificationOtherUser';};
    // 获取我的认证信息
    _super.prototype.getUrl_model_getMyCertificationInfo = function(){return this.serverUrl + '/model/getMyCertificationInfo';};

    //****************************************************用户协议与关于我们********************************************************
    _super.prototype.getUrl_helpCenter_getDetail = function(){return this.serverUrl + '/helpCenter/getDetail';};

    //***************************************************关注相关接口****************************************************
    // 关注
    _super.prototype.getUrl_flow_addFlow = function(){return this.serverUrl + '/flow/addFlow';};
    // 取消关注
    _super.prototype.getUrl_flow_channelFlow = function(){return this.serverUrl + '/flow/channelFlow';};
    // 获取我的关注列表
    _super.prototype.getUrl_flow_getMyFlowPager = function(){return this.serverUrl + '/flow/getMyFlowPager';};
    // 获取我的粉丝列表
    _super.prototype.getUrl_flow_getMyFansPager = function(){return this.serverUrl + '/flow/getMyFansPager';};
    // 获取其他用户的关注列表
    _super.prototype.getUrl_flow_getOtherFlowPager = function(){return this.serverUrl + '/flow/getOtherFlowPager';};
    // 获取其他用户的粉丝列表
    _super.prototype.getUrl_flow_getOtherFansPager = function(){return this.serverUrl + '/flow/getOtherFansPager';};


    //**********************************************************评论相关接口*************************************************************
	//评论
	_super.prototype.getUrl_comment_add = function(){return this.serverUrl + '/comment/add';};
	//评论列表
	_super.prototype.getUrl_comment_getCommentPager = function(){return this.serverUrl + '/comment/getCommentPager';};

	//************************************************************收藏相关接口*************************************************
	//收藏
	_super.prototype.getUrl_collect_add = function(){return this.serverUrl + '/collect/add';};
	//取消收藏
	_super.prototype.getUrl_collect_del = function(){return this.serverUrl + '/collect/del';};
	//获取我收藏列表
	_super.prototype.getUrl_collect_getCollectPager = function(){return this.serverUrl + '/collect/getCollectPager';};

    //****************************************************** 钱包消费相关 *******************************************************
    //购买作品
    _super.prototype.getUrl_content_buyContent = function(){return this.serverUrl + '/content/buyContent';};
    // 购买微信
    _super.prototype.getUrl_model_buyWeiXin = function(){return this.serverUrl + '/model/buyWeiXin';};
    //购买动态
    _super.prototype.getUrl_circle_buyCircle = function(){return this.serverUrl + '/circle/buyCircle';};
    //打赏模特 或者 动态
    _super.prototype.getUrl_model_rewardModelOrCircle = function(){return this.serverUrl + '/model/rewardModelOrCircle';};
    // 订阅 
    _super.prototype.getUrl_model_buySubscription = function(){return this.serverUrl + '/model/buySubscription';};
    //模特(摄影师)打赏收益的信息
    _super.prototype.getUrl_model_getModelRewardInfo = function(){return this.serverUrl + '/model/getModelRewardInfo';};
    //获取模特（摄影师）的打赏收益记录
    _super.prototype.getUrl_wallet_getModelRewardRecordPager = function(){return this.serverUrl + '/wallet/getModelRewardRecordPager';};
    //******************************************************* 虚拟币列表相关 ********************************************************
    _super.prototype.getUrl_postType_getPostTypeListByType = function(){return this.serverUrl + '/postType/getPostTypeListByType';};

    // 其他归类的
    // 绑定第三方
    _super.prototype.getUrl_web_user_bangKey = function(){return this.serverUrl + '/web/user/bangKey';};
    //  解绑
    _super.prototype.getUrl_web_user_untiedAuthKey = function(){return this.serverUrl + '/web/user/untiedAuthKey';};
    return Config;
})(QuakooConfig);

var App = (function (_super) {
    function App(){
        App.__super.call(this);
    }

    Quakoo.class(App,'Data',_super);

    var _proto = App.prototype;

    _super.prototype.systemNewInit = function () {
        if(config.isTest){
            this._systemNewInit()
        }else{
            if(api.systemType == 'ios'){
                this._systemNewInit()
            }else if(api.systemType == 'android'){
                api.accessNative({
                    name: "firstInstallation",
                    extra: {}
                }, function (ret, err) {
                });
                api.addEventListener({
                    name: 'getFirstInstallation' //监听选择完的事件
                }, function (data, err) {
                    if (data.value.path) {
                        config.fsPath = data.value.path;
                        this._systemNewInit()
                    }
                });
            };
        }


    };
    _super.prototype._systemNewInit =function () {
        var ret = quakooDb.initDb();
        if (!ret.status) {
            quakooMsg.toast("无法创建本地数据库！");
            return;
        }
        ret = quakooFs.initFs();
        if (!ret.status && !ret.exist) {
            quakooMsg.toast("无法建立本地文件夹！");
            return;
        }
        var _user = quakooUser.getUserInfo();
        if ( _user && _user.phone ) {
            quakooApp.openWin_noAnimation("main", "html/main/main.html", {},{slidBackEnabled: false});
        } else {
            quakooApp.openWin_noAnimation("login", "html/login/login.html", {},{slidBackEnabled: false});
        }
    }
    return App;
})(QuakooApp)


var User = (function (_super) {
    function User(){
        User.__super.call(this);
    }

    Quakoo.class(User,'Data',_super);

    var _proto = User.prototype;

    _super.prototype.registerNative=function() {
        var userInfo=this.getUserInfo();
        if(quakooUtils.isBlack(userInfo.icon)){
            userInfo.icon = '';
        }
        if(quakooUtils.isBlack(userInfo.name)){
            userInfo.name = '';
        }
        api.accessNative({
            name: "login",
            extra: {
                token: userInfo.token,
                id: userInfo.id,
                noticeId: userInfo.id,// 推送ID（用户主键ID）
                icon:userInfo.icon,
                name:userInfo.name,
                pushServerUrl:config.pushServerUrl,
                pushPort:config.pushPort,
                uploadImgUrl:config.uploadImageUrl
            }
        }, function (ret, err) {
        });
    }


    return User;
})(QuakooUser)

