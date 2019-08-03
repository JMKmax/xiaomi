var version = "1.0.0";
var isTest = false;
var isCleanUser = false;

var uploadImageUrl = "http://store.douwenapp.com/storage/handle";
var uploadVoiceUrl = "http://store.douwenapp.com/storage/handle";

var chatServerUrl = "http://context.douwenapp.com";
var serverUrl = "http://web.douwenapp.com"; 
//var serverUrl = "http://192.168.3.93:10013";
////
// var chatServerUrl = "http://39.107.239.40:30020";
// var serverUrl = "http://39.107.239.40:30010";

var rootWindowName = "main";

simpleVersion = true;

//isTest = true;

var visitorUrl = serverUrl + "/web/user/getVisitor"; //游客
var updateUserOnlineTimeUrl = serverUrl + "/web/user/updateUserOnlineTime"; //更新用户在线时间（5秒钟调用一次）（ok）

//用户注册
var createAuthCodeOnRegUrl = serverUrl + "/web/user/createAuthCodeOnReg"; //用户注册时获取验证码(ok)
var checkRegisterCodeUrl = serverUrl + "/web/user/checkRegisterCode"; //用户注册时校验验证码(ok)
var registerUrl = serverUrl + "/web/user/register"; //用户注册(ok)
//用户登录
var createAuthCodeOnLoginUrl = serverUrl + "/web/user/createAuthCodeOnLogin"; //用户登录时获取验证码(ok)

var loginUrl = serverUrl + "/web/user/login"; //用户登录(用户名和密码) 用户名可以是手机号或者邮箱【账号密码登录】(ok)

var loginForCodeUrl = serverUrl + "/web/user/loginForCode"; //用户快速登录(手机号和短信验证码)(ok)

//用户详情
var getUserInfoUrl = serverUrl + "/web/user/getUserInfo"; //获取用户详情(ok)
var getOtherUserInfoUrl = serverUrl + "/web/user/getOtherUserInfo"; //获取其他用户详情(ok)


//第三方登录及绑定手机号
var weixinForLoginUrl = serverUrl + "/web/user/weixinForLogin"; //微信登录
var qqForLoginUrl = serverUrl + "/web/user/qqForLogin"; //QQ登录
var weiboForLoginUrl = serverUrl + "/web/user/weiboForLogin"; //微博登录（未完成）
var bangPhoneCodeUrl = serverUrl + "/web/user/bangPhoneCode"; //绑定手机号时获取验证码(ok)
var bangPhoneUrl = serverUrl + "/web/user/bangPhone"; //绑定手机号(ok)
var bangKeyUrl = serverUrl + "/web/user/bangKey"; //绑定
var untiedAuthKeyUrl = serverUrl + "/web/user/untiedAuthKey"; //解绑


//更新用户信息部分
//--用户更换手机号
var createUpdatePhoneUrl = serverUrl + "/web/user/createUpdatePhone"; //获取更新手机号验证码(ok)
var updatePhoneUrl = serverUrl + "/web/user/updatePhone"; //更新手机号(ok)

var updateUserInfoUrl = serverUrl + "/web/user/updateUserInfo"; //用户信息更新

var updateUserThemUrl = serverUrl + "/web/user/updateUserThem"; //更改用户的主题背景图

//--绑定邮箱
var sendMailCodeUrl = serverUrl + "/web/user/sendMailCode"; //绑定邮箱时候 获取验证码 [绑定邮箱/修改邮箱](ok)
var bangMailUrl = serverUrl + "/web/user/bangMail"; //绑定邮箱(ok)
//--更换邮箱
var checkPasswordUrl = serverUrl + "/web/user/checkPassword"; //校验密码—————— 输入新邮箱前 先校验密码（ok）
var updateUserMailUrl = serverUrl + "/web/user/updateUserMail"; //更换邮箱(ok)
//--更换手机号
var createUpdateOldPhoneUrl = serverUrl + "/web/user/createUpdateOldPhone"; //获取更新手机号旧手机号验证码 (ok)
var checkOldPhoneUrl = serverUrl + "/web/user/checkOldPhone"; //校验旧手机号验证码是否正确（ok）

//用户称号
var updateUserTitleUrl = serverUrl + "/web/user/updateUserTitle"; //设置用户的称号，第一个为首页外显(ok)
var getUserTitleUrl = serverUrl + "/web/user/getUserTitle"; // 获取我的（别人的）称号，和所有的称号(ok)
var getNewTitleUrl = serverUrl + "/web/user/getNewTitle"; // - 获取我新获取的称号
var findTitleUrl = serverUrl + "/web/user/findTitle"; // - 发现称号  查看别人的称号时候使用


//首页接口
var getAllPostTypeUrl = serverUrl + "/postType/getAllPostType"; //获取所有的类型（一级和二级都包含）
var addQuestionUrl = serverUrl + "/question/addQuestion"; //发布问题
var getAllQuestionUrl = serverUrl + "/question/getAllQuestion"; //首页列表
var getNearQuestionUrl = serverUrl + "/question/getNearQuestion"; //附近列表
var getUnAnswerQuestionUrl = serverUrl + "/question/getUnAnswerQuestion"; //获取未解答的列表
var getUserQuestionPagerUrl = serverUrl + "/question/getUserQuestionPager"; //获取我解答或者我参与的列表
var delQuestionUrl = serverUrl + "/question/delQuestion"; //删除我的问题(ok)
var againQuestionUrl = serverUrl + "/question/againQuestion"; //重新发布问题(在聊天里面，饶你一命那里用)(ok)

//聊天
var rewardQuestionUrl = serverUrl + "/question/rewardQuestion"; //打赏
var checkWordUrl = serverUrl + "/question/checkWord"; //检测敏感词(ok)
var attendQuestionUrl = serverUrl + "/question/attendQuestion"; //回答问题(ok)
var overQuestionUrl = serverUrl + "/question/overQuestion"; //结束对话并评价
var appraiseQuestionUrl = serverUrl + "/question/appraiseQuestion"; //参与人评价
var sendMessageUrl = serverUrl + "/question/sendMessage"; //发送消息(ok)


//举报
var getUserReportPagerUrl = serverUrl + "/report/getUserReportPager"; //我的举报记录
var reportContentUrl = serverUrl + "/report/reportContent"; //举报内容


// 忘记密码
var createForgotAuthCodeUrl = serverUrl + "/web/user/createForgotAuthCode"; //获取忘记密码的验证码 [手机号类型修改](ok)
var updatePasswordAndLoginUrl = serverUrl + "/web/user/updatePasswordAndLogin"; //忘记密码[手机号类型修改][完成修改]）(ok)
var updatePasswordUrl = serverUrl + "/web/user/updatePassword"; //更改密码，原密码验证 [原密码类型修改](ok)

//邮箱找回密码
var sendForgotMailCodeUrl = serverUrl + "/web/user/sendForgotMailCode"; // 获取邮箱验证码 [邮箱类型修改](ok)
var checkForgotMailCodeUrl = serverUrl + "/web/user/checkForgotMailCode"; //校验邮箱验证码 [邮箱类型修改](ok)

var updatePasswordByMailCodeUrl = serverUrl + "/web/user/updatePasswordByMailCode"; // 邮箱修改密码+验证码验证[邮箱类型修改](ok)

//手机找回密码
var checkCodeUrl = serverUrl + "/web/user/checkCode"; //更改密码，短信验证[应该是手机号类型修改的验证码验证]
var createAuthCodeUpdatePasswordUrl = serverUrl + "/web/user/createAuthCodeUpdatePassword"; //更改密码获取验证码[手机号类型修改][账号安全]

//添加建议
var addSuggestionUrl = serverUrl + "/suggestion/addSuggestion"; //添加建议（ok）

//黑名单相关
var getBlackListPagerUrl = serverUrl + "/blacklist/getBlackListPager"; //获取我的黑名单(ok)
var addBlackListUrl = serverUrl + "/blacklist/addBlackList"; //添加黑名单(ok)
var removeBlackListUrl = serverUrl + "/blacklist/removeBlackList"; //移除黑名单(ok)

//钱包相关

var getChargeTypeListUrl = serverUrl + "/wallert/getChargeTypeList"; ///获取所有的充值列表(ok)
var chargeWallertUrl = serverUrl + "/wallert/chargeWallert"; ///充值
var orderPayParamUrl = serverUrl + "/wallert/orderPayParam"; ///获取支付参数(ok)
var getChargeWalletPagerUrl = serverUrl + "/wallert/getChargeWalletPager"; ///获取钱包记录(ok)
var getUserCoinUrl = serverUrl + "/wallert/getUserCoin"; ///获取钱包余额（ok）
var cashMoneyUrl = serverUrl + "/wallert/cashMoney"; ///提现（ok）
var bangCountUrl = serverUrl + "/wallert/bangCount"; ///绑定提现账号（ok）

var getNoticeNumbserUrl = serverUrl + "/notify/getNoticeNumbser"; ///获取更多里面  消息数量（ok）
var questionInfoUrl = serverUrl + "/explore/questionInfo"; //
var updateUserUrl = serverUrl + "/system/updateUser"; //更新用户的位置



//排行榜相关
var getLevelRankingUrl = serverUrl + "/ranking/getLevelRanking"; //等级排行
var getQuestionAnswerRankingByDayUrl = serverUrl + "/ranking/getQuestionAnswerRankingByDay"; //解答次数日排行
var getQuestionAnswerRankingByWeekUrl = serverUrl + "/ranking/getQuestionAnswerRankingByWeek"; //解答次数周排行
var getQuestionAnswerRankingByMonthUrl = serverUrl + "/ranking/getQuestionAnswerRankingByMonth"; //解答次数月排行
var getRemunerationeWeekRankingUrl = serverUrl + "/ranking/getRemunerationeWeekRanking"; //酬劳排行
var getRewardWeekRankingUrl = serverUrl + "/ranking/getRewardWeekRanking"; //打赏排行
var getTitleWeekRankingUrl = serverUrl + "/ranking/getTitleWeekRanking"; //称号排行
//========================加入聊天组=========================================
var joinChatGroupUrl =  chatServerUrl+"/chat/joinChatGroup";
//=========IM通知的url开始==============
var message_connectUrl=chatServerUrl+"/chat/connect";
var message_pagerUrl=chatServerUrl+"/chat/pager";
var message_checkChatUrl=chatServerUrl+"/chat/checkChat";
var message_chatUrl=chatServerUrl+"/chat/chat";
var message_testUrl=chatServerUrl+"/chat/test";
var message_deleteUrl=chatServerUrl+"/chat/delete";
//========================群聊=========================================
var getChatGroupList=chatServerUrl+"/chat/getChatGroupList";
//=========IM通知url结束==============
//版本更新
var getNewVersionListUrl = serverUrl + "/version/getNewVersionList"; //



//二期

//关注相关
var getMyFlowPagerUrl = serverUrl + "/flow/getMyFlowPager"; //获取我关注的列表
var addFlowUrl = serverUrl + "/flow/addFlow"; //关注
var channelFlowUrl = serverUrl + "/flow/channelFlow"; //取消关注
var searchUserUrl = serverUrl + "/flow/searchUser"; //根据名称查询用户
var getMyFansPagerUrl = serverUrl + "/flow/getMyFansPager"; //获取我的粉丝列表
var getOtherFlowPagerUrl = serverUrl + "/flow/getOtherFlowPager"; //获取其他用户的关注列表
var getOtherFansPagerUrl = serverUrl + "/flow/getOtherFansPager"; //获取其他用户的粉丝列表

//探索相关
var addExploreUrl = serverUrl + "/explore/addExplore"; //发布问题
var getFlowExplorePagerUrl = serverUrl + "/explore/getFlowExplorePager"; //获取最新记录或 关注
var getHotExplorePagerUrl = serverUrl + "/explore/getHotExplorePager"; //获取最热记录
var attendExploreUrl = serverUrl + "/explore/attendExplore"; //给探索帖子打分
var getUserExplorePagerUrl = serverUrl + "/explore/getUserExplorePager"; //探索记录(我参与的探索) 或者 我发布的探索
var getOtherExplorePagerUrl = serverUrl + "/explore/getOtherExplorePager"; //探索记录(我参与的探索) 或者 我发布的探索
var delExploreUrl = serverUrl + "/explore/delExplore"; //探索记录(我参与的探索) 或者 我发布的探索
var getMostCriticalPagerUrl = serverUrl + "/explore/getMostCriticalPager"; //最爆

//收藏相关
var collectAddUrl = serverUrl + "/collect/add"; //收藏
var collectDelUrl = serverUrl + "/collect/del"; //取消收藏
var getCollectPagerUrl = serverUrl + "/collect/getCollectPager"; //取消收藏

//消息
var getNoticePagerUrl = serverUrl + "/notify/getNoticePager"; //消息
var confirmNoticeUrl = serverUrl + "/notify/confirmNotice"; //确认通知
//==============常量（结束）========================

//头部高度
var headHeight = 44;
//底部高度

var bottomHeight = 44;

//是否初始化
var isInit = "isInit";

var lastTime = 'lastTime';
//是否播放引导视频
var isShowGuide = "isShowGuide";

//
var Storage_School_Active_Notice = "Storage_School_Active_Notice";

//短信验证码发送时间
var Storage_Sms_Time = "smsTime";
//聊天未读消息数
var Storage_chat_num = "chat_num";
//当前地址
var curAddress = 'curAddress';
//当前经度
var curLon = 'curLon';
//当前纬度
var curLat = 'curLat';
//购物车
var cartsKey = 'carts';


var industryNum = 3; //商家最多选择三个行业

//========系统级别的公共方法（开始）==========
/**
 *
 * @param url 跳转   内部跳转 inner://xxx/xxx 外部跳转 http://xxx/xxx
 * @param currentDirectory 当前目录  最外层目录小于0（index.html） 第一级目录（html文件夹下的，目前没有） 第二级目录（html文件夹下的文件夹）
 */
function systemForword(url, currentDirectory, overLoad) {
	currentDirectory = currentDirectory || 0;
	var path = "../";
	if (currentDirectory < 0) {
		path = "./";
	} else if (currentDirectory == 2) {
		path = "../../";
	}

	if (url.startWith("inner")) {
		var content = url.substring("inner://".length);
		var name;
		var uri;
		var queryStr;
		var param = {};
		var type;
		if (content.indexOf("?") > 0) {
			uri = content.substr(0, content.indexOf("?"));
			queryStr = content.substr(content.indexOf("?") + 1);
		} else {
			uri = content;
		}
		var parts = uri.split("/");
		type = parts[0];
		name = parts[parts.length - 1].replace(".html", "");

		if (isNotBlack(queryStr)) {
			var params = queryStr.split("&");
			for (var i = 0; i < params.length; i++) {
				param[params[i].split("=")[0]] = params[i].split("=")[1];
			}
		}
		openNewWindow(name, path + uri, param, overLoad);
	} else {
		var linkUrl;
		var queryStr;
		var param = {};

		if (url.indexOf("?") > 0) {
			linkUrl = url.substr(0, url.indexOf("?"));
			queryStr = url.substr(url.indexOf("?") + 1);
		} else {
			linkUrl = url;
		}

		if (isNotBlack(queryStr)) {
			var params = queryStr.split("&");
			for (var i = 0; i < params.length; i++) {
				param[params[i].split("=")[0]] = params[i].split("=")[1];
			}
		}

		param.url = linkUrl;
		openNewWindow(hex_md5(url), path + "outside/outside.html", param, overLoad);
	}
}

//打开用户的照片list页面,打开用户的主页
function openUserHome(uid) {
	//  alert("打开用户的主页"+uid);
	var url = 'inner://main/userDynamic.html?uid=' + uid;
	systemForword(url, 0, {
		reload: true
	});
}

//保存购物车
function saveCarts(obj) {
	setItem(cartsKey, JSON.stringify(carts), function (ret) {

	});
}

function showValue(id, data) {
	if (isBlack(document.getElementById(id))) {
		return;
	}
	if (isBlack(data)) {
		return;
	}
	var imgList = document.getElementById(id).querySelectorAll("*[data-type]");

	for (var i = 0; i < imgList.length; i++) {
		var img = imgList[i];
		var id = img.getAttribute("id");
		if (!document.getElementById(id)) {
			return;
		}
		if (isBlack(data[id])) {
			continue;
		}
		if (img.getAttribute("data-type") == 'show-image') {
			document.getElementById(id).src = data[id];
		} else if (img.getAttribute("data-type") == 'show-value') {
			document.getElementById(id).value = data[id];
		} else if (img.getAttribute("data-type") == 'show-inner') {
			document.getElementById(id).innerHTML = data[id];
		}
	}
}
//将商品添加到购物车
function addToCarts(obj, mallId, mallName) {
	getItem(cartsKey, function (ret, err) {
		if (ret.status) {
			var carts;
			if (isNotBlack(ret.data)) {
				carts = JSON.parse(ret.data);
				var mallIdIndex = -1;
				for (var i = 0; i < carts.length; i++) {
					if (carts[i].mallId == mallId) {
						mallIdIndex = i;
						for (var n = 0; n < carts[i].list.length; n++) {
							if (obj.id == carts[i].list[n].id) {
								api.toast({
									msg: "商品已添加至购物车！",
									duration: 2000,
									location: 'bottom'
								});
								return;
							}
						}
					}
				}
			} else {
				carts = [];
			}

			if (mallIdIndex >= 0) {
				carts[mallIdIndex].list.push(obj);
			} else {
				var cart = {};
				cart.mallId = mallId;
				cart.mallName = mallName;
				cart.list = [];
				cart.list.push(obj);
				carts.push(cart);
			}

			setItem(cartsKey, JSON.stringify(carts), function (ret) {
				api.toast({
					msg: "添加购物车成功！",
					duration: 2000,
					location: 'bottom'
				});
			});
		} else {
			//			alert(err)
			api.toast({
				msg: err.msg,
				duration: 2000,
				location: 'bottom'
			});
		}
	});
}

//========系统级别的公共方法（结束）==========





//========首页的公共方法（开始）==========
function setLocalFunctionPorts(result) {
	var cacheKey = createCacheKey(functionportUrl, {});
	setItem(cacheKey, JSON.stringify(result));
}

function getLocalFunctionPorts(callBackOnGetData) {
	var cacheKey = createCacheKey(functionportUrl, {});
	getItem(cacheKey, function (ret, err) {
		var storageStr = "{}";
		if (isNotBlack(ret.data)) {
			storageStr = ret.data;
		}
		var value = JSON.parse(storageStr);
		if (isBlack(value)) {
			callBackOnGetData({});
		} else {
			callBackOnGetData(value);
		}
	});
}

//========首页的公共方法（结束）==========





//========相册的公共方法（开始）==========
//打开用户列表
//if(type==0){
//    titleDiv.innerHTML="相册访客";
//}else if(type==1){
//    titleDiv.innerHTML="相册赞过的人";
//}else if(type=2){
//    titleDiv.innerHTML="最近浏览过的人";
//}else if(type==3){
//    titleDiv.innerHTML="最近赞过的人";
//}


//========相册的公共方法（结束）==========



//===========打开聊天=======
function openChat(type, thirdId, thirdNick) {
	openNewWindow("chat" + type + "_" + thirdId, "./chat.html", {
		type: type,
		thirdId: thirdId,
		thirdNick: thirdNick
	});
}

var selectData = [{
	value: '2',
	text: '无'
}, {
	value: '1',
	text: '有'
}];


var sexData = [{
	value: '1',
	text: '男'
}, {
	value: '2',
	text: '女'
}];
var ageData = [{
	"text": 1,
	"value": 1
}, {
	"text": 2,
	"value": 2
}, {
	"text": 3,
	"value": 3
}, {
	"text": 4,
	"value": 4
}, {
	"text": 5,
	"value": 5
}, {
	"text": 6,
	"value": 6
}, {
	"text": 7,
	"value": 7
}, {
	"text": 8,
	"value": 8
}, {
	"text": 9,
	"value": 9
}, {
	"text": 10,
	"value": 10
}, {
	"text": 11,
	"value": 11
}, {
	"text": 12,
	"value": 12
}, {
	"text": 13,
	"value": 13
}, {
	"text": 14,
	"value": 14
}, {
	"text": 15,
	"value": 15
}, {
	"text": 16,
	"value": 16
}, {
	"text": 17,
	"value": 17
}, {
	"text": 18,
	"value": 18
}, {
	"text": 19,
	"value": 19
}, {
	"text": 20,
	"value": 20
}, {
	"text": 21,
	"value": 21
}, {
	"text": 22,
	"value": 22
}, {
	"text": 23,
	"value": 23
}, {
	"text": 24,
	"value": 24
}, {
	"text": 25,
	"value": 25
}, {
	"text": 26,
	"value": 26
}, {
	"text": 27,
	"value": 27
}, {
	"text": 28,
	"value": 28
}, {
	"text": 29,
	"value": 29
}, {
	"text": 30,
	"value": 30
}, {
	"text": 31,
	"value": 31
}, {
	"text": 32,
	"value": 32
}, {
	"text": 33,
	"value": 33
}, {
	"text": 34,
	"value": 34
}, {
	"text": 35,
	"value": 35
}, {
	"text": 36,
	"value": 36
}, {
	"text": 37,
	"value": 37
}, {
	"text": 38,
	"value": 38
}, {
	"text": 39,
	"value": 39
}, {
	"text": 40,
	"value": 40
}, {
	"text": 41,
	"value": 41
}, {
	"text": 42,
	"value": 42
}, {
	"text": 43,
	"value": 43
}, {
	"text": 44,
	"value": 44
}, {
	"text": 45,
	"value": 45
}, {
	"text": 46,
	"value": 46
}, {
	"text": 47,
	"value": 47
}, {
	"text": 48,
	"value": 48
}, {
	"text": 49,
	"value": 49
}, {
	"text": 50,
	"value": 50
}, {
	"text": 51,
	"value": 51
}, {
	"text": 52,
	"value": 52
}, {
	"text": 53,
	"value": 53
}, {
	"text": 54,
	"value": 54
}, {
	"text": 55,
	"value": 55
}, {
	"text": 56,
	"value": 56
}, {
	"text": 57,
	"value": 57
}, {
	"text": 58,
	"value": 58
}, {
	"text": 59,
	"value": 59
}, {
	"text": 60,
	"value": 60
}, {
	"text": 61,
	"value": 61
}, {
	"text": 62,
	"value": 62
}, {
	"text": 63,
	"value": 63
}, {
	"text": 64,
	"value": 64
}, {
	"text": 65,
	"value": 65
}, {
	"text": 66,
	"value": 66
}, {
	"text": 67,
	"value": 67
}, {
	"text": 68,
	"value": 68
}, {
	"text": 69,
	"value": 69
}, {
	"text": 70,
	"value": 70
}, {
	"text": 71,
	"value": 71
}, {
	"text": 72,
	"value": 72
}, {
	"text": 73,
	"value": 73
}, {
	"text": 74,
	"value": 74
}, {
	"text": 75,
	"value": 75
}, {
	"text": 76,
	"value": 76
}, {
	"text": 77,
	"value": 77
}, {
	"text": 78,
	"value": 78
}, {
	"text": 79,
	"value": 79
}, {
	"text": 80,
	"value": 80
}, {
	"text": 81,
	"value": 81
}, {
	"text": 82,
	"value": 82
}, {
	"text": 83,
	"value": 83
}, {
	"text": 84,
	"value": 84
}, {
	"text": 85,
	"value": 85
}, {
	"text": 86,
	"value": 86
}, {
	"text": 87,
	"value": 87
}, {
	"text": 88,
	"value": 88
}, {
	"text": 89,
	"value": 89
}, {
	"text": 90,
	"value": 90
}, {
	"text": 91,
	"value": 91
}, {
	"text": 92,
	"value": 92
}, {
	"text": 93,
	"value": 93
}, {
	"text": 94,
	"value": 94
}, {
	"text": 95,
	"value": 95
}, {
	"text": 96,
	"value": 96
}, {
	"text": 97,
	"value": 97
}, {
	"text": 98,
	"value": 98
}, {
	"text": 99,
	"value": 99
}, {
	"text": 100,
	"value": 100
}]

function isNotBlack(data) {
	return (data == "" || typeof (data) == "undefined" || data == null || isNullJson(data)) ? false : true;
}

function isNullJson(obj) {
	return isJson(obj) && JSON.stringify(obj) == '{}';
}

function isJson(obj) {
	return typeof (obj) == "object" &&
		Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
}


function isBlack(data) {
	return (data == "" || typeof (data) == "undefined" || data == null || isNullJson(data)) ? true : false;
}

//检查是否是数字
function isNum(num) {
	if (!(/^\d*$/.test(num))) {
		return false;
	}
	return true;
}

function isArray(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
}

function isFunction(func) {
	if (typeof (func) == "function") {
		return true;
	}
	return false;
}

function hex_md5(string) {
	var x = Array();
	var k, AA, BB, CC, DD, a, b, c, d;
	var S11 = 7,
		S12 = 12,
		S13 = 17,
		S14 = 22;
	var S21 = 5,
		S22 = 9,
		S23 = 14,
		S24 = 20;
	var S31 = 4,
		S32 = 11,
		S33 = 16,
		S34 = 23;
	var S41 = 6,
		S42 = 10,
		S43 = 15,
		S44 = 21;
	string = uTF8Encode(string);
	x = convertToWordArray(string);
	a = 0x67452301;
	b = 0xEFCDAB89;
	c = 0x98BADCFE;
	d = 0x10325476;
	for (k = 0; k < x.length; k += 16) {
		AA = a;
		BB = b;
		CC = c;
		DD = d;
		a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
		d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
		c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
		b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
		a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
		d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
		c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
		b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
		a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
		d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
		c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
		b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
		a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
		d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
		c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
		b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
		a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
		d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
		c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
		b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
		a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
		d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
		c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
		b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
		a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
		d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
		c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
		b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
		a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
		d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
		c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
		b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
		a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
		d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
		c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
		b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
		a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
		d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
		c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
		b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
		a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
		d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
		c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
		b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
		a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
		d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
		c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
		b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
		a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
		d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
		c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
		b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
		a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
		d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
		c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
		b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
		a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
		d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
		c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
		b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
		a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
		d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
		c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
		b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
		a = addUnsigned(a, AA);
		b = addUnsigned(b, BB);
		c = addUnsigned(c, CC);
		d = addUnsigned(d, DD);
	}
	var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
	return tempValue.toLowerCase();
}



var rotateLeft = function (lValue, iShiftBits) {
	return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
}

var addUnsigned = function (lX, lY) {
	var lX4, lY4, lX8, lY8, lResult;
	lX8 = (lX & 0x80000000);
	lY8 = (lY & 0x80000000);
	lX4 = (lX & 0x40000000);
	lY4 = (lY & 0x40000000);
	lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
	if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
	if (lX4 | lY4) {
		if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
		else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
	} else {
		return (lResult ^ lX8 ^ lY8);
	}
}

var F = function (x, y, z) {
	return (x & y) | ((~x) & z);
}

var G = function (x, y, z) {
	return (x & z) | (y & (~z));
}

var H = function (x, y, z) {
	return (x ^ y ^ z);
}

var I = function (x, y, z) {
	return (y ^ (x | (~z)));
}

var FF = function (a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var GG = function (a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var HH = function (a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var II = function (a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var convertToWordArray = function (string) {
	var lWordCount;
	var lMessageLength = string.length;
	var lNumberOfWordsTempOne = lMessageLength + 8;
	var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
	var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
	var lWordArray = Array(lNumberOfWords - 1);
	var lBytePosition = 0;
	var lByteCount = 0;
	while (lByteCount < lMessageLength) {
		lWordCount = (lByteCount - (lByteCount % 4)) / 4;
		lBytePosition = (lByteCount % 4) * 8;
		lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
		lByteCount++;
	}
	lWordCount = (lByteCount - (lByteCount % 4)) / 4;
	lBytePosition = (lByteCount % 4) * 8;
	lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
	lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
	lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
	return lWordArray;
};

var wordToHex = function (lValue) {
	var WordToHexValue = "",
		WordToHexValueTemp = "",
		lByte, lCount;
	for (lCount = 0; lCount <= 3; lCount++) {
		lByte = (lValue >>> (lCount * 8)) & 255;
		WordToHexValueTemp = "0" + lByte.toString(16);
		WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
	}
	return WordToHexValue;
};

var uTF8Encode = function (string) {
	string = string.replace(/\x0d\x0a/g, "\x0a");
	var output = "";
	for (var n = 0; n < string.length; n++) {
		var c = string.charCodeAt(n);
		if (c < 128) {
			output += String.fromCharCode(c);
		} else if ((c > 127) && (c < 2048)) {
			output += String.fromCharCode((c >> 6) | 192);
			output += String.fromCharCode((c & 63) | 128);
		} else {
			output += String.fromCharCode((c >> 12) | 224);
			output += String.fromCharCode(((c >> 6) & 63) | 128);
			output += String.fromCharCode((c & 63) | 128);
		}
	}
	return output;
};

function base64_encode(str) {
	var c1, c2, c3;
	var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var i = 0,
		len = str.length,
		string = '';

	while (i < len) {
		c1 = str.charCodeAt(i++) & 0xff;
		if (i == len) {
			string += base64EncodeChars.charAt(c1 >> 2);
			string += base64EncodeChars.charAt((c1 & 0x3) << 4);
			string += "==";
			break;
		}
		c2 = str.charCodeAt(i++);
		if (i == len) {
			string += base64EncodeChars.charAt(c1 >> 2);
			string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
			string += base64EncodeChars.charAt((c2 & 0xF) << 2);
			string += "=";
			break;
		}
		c3 = str.charCodeAt(i++);
		string += base64EncodeChars.charAt(c1 >> 2);
		string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
		string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
		string += base64EncodeChars.charAt(c3 & 0x3F)
	}
	return string
}

function base64_decode(str) {
	var c1, c2, c3, c4;
	var base64DecodeChars = new Array(
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		-1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
		58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
		7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
		25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
		37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1,
		-1, -1
	);
	var i = 0,
		len = str.length,
		string = '';

	while (i < len) {
		do {
			c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
		} while (
			i < len && c1 == -1
		);

		if (c1 == -1) break;

		do {
			c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
		} while (
			i < len && c2 == -1
		);

		if (c2 == -1) break;

		string += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

		do {
			c3 = str.charCodeAt(i++) & 0xff;
			if (c3 == 61)
				return string;

			c3 = base64DecodeChars[c3]
		} while (
			i < len && c3 == -1
		);

		if (c3 == -1) break;

		string += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

		do {
			c4 = str.charCodeAt(i++) & 0xff;
			if (c4 == 61) return string;
			c4 = base64DecodeChars[c4]
		} while (
			i < len && c4 == -1
		);

		if (c4 == -1) break;

		string += String.fromCharCode(((c3 & 0x03) << 6) | c4)
	}
	return string;
}



function getCompressImg(img, w, h) {

	var src = img.substring(0, img.lastIndexOf("."));
	var suffix = img.substring(img.lastIndexOf("."));
	var width = api.frameWidth * w;
	//var height = width/h;
	src = src + "_" + width + "_" + 0 + suffix;
	return src;
}



var formatTimeToDate = function (time) {
	return new Date(time).format("yyyy-MM-dd hh:mm");
};
var formatTimeToDay = function (time) {
	return new Date(time).format("yyyy-MM-dd");
};

Date.prototype.format = function (format) {
	var date = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};
	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
				date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
};
var sdelay = 0;

function returnTop() {
	window.scrollBy(0, -100); //Only for y vertical-axis
	if (document.body.scrollTop > 0) {
		sdelay = setTimeout('returnTop()', 150);
	}
}

function openNewUrl(url, params) {
	var text = "";
	if (isNotBlack(params)) {
		text = "?";
		for (var key in params) {
			text = text + key + "=" + params[key] + "&"
		}
	}
	//  if(url.indexOf('login.html') == -1){
	location.href = url + text;
	//  }else if(checkUser()){
	//     location.href = url+text;
	//  }

}


function openSliderInfo(url) {
	var browser = api.require('webBrowser');
	browser.open({
		titleBar: {
			bg: '#39bc30',
			textColor: '#fff'
		},
		url: url
	});
}


function checkLength(num, type) {
	var value = type.value;
	if (value.length > num) {
		toast("温馨提示：密码为6至8位数字和字母的组合");
		type.value = type.value.substring(0, num)
		//     	return;
	}
}


//检查手机号码
function checkMobileNum(mobileNum) {
	if (!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(mobileNum))) {
		return false;
	}
	return true;
}


//function hideBackButton(){
//	document.getElementById("leftButton").style.opacity = 0;
//	setTimeout(function(){
//		document.getElementById("leftButton").style.opacity = 1;
//	},300)
//}
//
//
//function showBackButton(){
//	document.getElementById("leftButton").style.opacity = 1;
//}

// 初始化主题
// 使用暗色主题

// 0:light
// 1：dark

// darkFn:黑色主题要改变的(比如img便签的src)
// lightFn:白色主题要改变的
function getUserInfo() {
	return $api.getStorage("userInfo");
};
function initNavDarkTheme(cssFlieName, darkFn, lightFn,fileCurUrl) {
	var ThemeBg = getUserInfo().item;
	var defaultFn = function () {};
	darkFn = darkFn ? darkFn : defaultFn;
	lightFn = lightFn ? lightFn : defaultFn;
	if (parseInt(ThemeBg, 10) === 2) { //黑色
		addDarkTheme(cssFlieName,fileCurUrl);
		darkFn();//切换图片 src
	} else if (parseInt(ThemeBg, 10) === 1){//白色
		lightFn();//切换图片 src
	}
}

// 添加暗色主题 增加 dark 主题 link标签
function addDarkTheme(cssFlieName,fileCurUrl) {
	if (document.getElementById("theme-css-dark")) {
		return;
	}
	var link = document.createElement('link');
	link.type = 'text/css';
	link.id = "theme-css-dark"; // 加上id方便后面好查找到进行删除
	link.rel = 'stylesheet';
	fileCurUrl ? fileCurUrl : 2;
	if (fileCurUrl == 2){
		link.href = '../../css/ui_dark/' + cssFlieName + '.css';
	}else {
		link.href = '../css/ui_dark/' + cssFlieName + '.css';
	}
	document.querySelector("head").appendChild(link);
}
// 删除暗色主题
function removeDarkTheme() {
	var darkTheme = document.querySelector('#theme-css-dark');
	if (darkTheme) {
		console.log("切换白色")
		document.querySelector("head").removeChild(darkTheme)
	}

}

// 切换主题，切换img标签的src
// imgWrap:img的父容器
function switchToDark_src(imgWrap) {
	var imgEle = document.querySelector(imgWrap + ' img')
	if (imgEle) {
		var imgSrc = imgEle.src;
    if(/_dark.png/.test(imgSrc)) {
      return
    }
		imgEle.src = imgSrc.replace('.png', '_dark.png')
	}

}

function switchTolight_src(imgWrap) {
	var imgEle = document.querySelector(imgWrap + ' img')
	if (imgEle) {
		var imgSrc = imgEle.src;
		imgEle.src = imgSrc.replace('_dark.png', '.png')
	}

}
// 异步执行切换主题 （有些win没关掉,如main）
function  exec_initNavDarkTheme(cssFlieName, darkFn, lightFn,fileCurUrl) {
	var ThemeBg = getUserInfo().item;
	var defaultFn = function () {};
	darkFn = darkFn ? darkFn : defaultFn;
	lightFn = lightFn ? lightFn : defaultFn;
	if (parseInt(ThemeBg, 10) === 2) { //黑色
		// console.log("切换成黑色")
		addDarkTheme(cssFlieName,fileCurUrl);
		darkFn();//切换图片 src
	} else if (parseInt(ThemeBg, 10) === 1 || parseInt(ThemeBg, 10) !== 2){//白色
		lightFn();//切换图片 src
		removeDarkTheme()
	}
}
 //获取字符串长度（汉字算两个字符，字母数字算一个）
function listenInputNum(str, maxLen) {
//	var w = 0;
//	//length 获取字数数，不区分汉子和英文
//	for(var i = 0; i < str.value.length; i++) {
//		//charCodeAt()获取字符串中某一个字符的编码
//		var c = str.value.charCodeAt(i);
//		//单字节加1
//		if((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
//			w++;
//		} else {
//			w += 2;
//		}
//		if(w > maxLen) {
//			str.value = str.value.substr(0, i);
//			break;
//		}
//	}
	var value = str.value;
	if (value.length > maxLen) {
		str.value = str.value.substring(0, maxLen)
		//     	return;
	}
}


function openChatConnect() {

    var jsfun = 'openChatIndex();';
    api.execScript({
        name: "main",
        script: jsfun
    });



}

function closeChatConnect() {
    var jsfun = 'closeChatIndex();';
    api.execScript({
        name: "main",
        script: jsfun
    });

}


function playUserWav(path,callBack) {

	audios.play({
	    path: 'widget://res/'+path
	}, function(ret, err) {
	    if (ret) {
//	        alert(JSON.stringify(ret));
	    } else {
//	        alert(JSON.stringify(err));
	    }
	});

}
//		处理 选项宽度比例
function dealOptionWidth(results_selectOption){
// 	var ltCount = 0; // 小于20比例的选项个数
// var lgIndex = [];//存放大于20比例的selectOption中的index
// for(var f = 0 ; f<results_selectOption.length;f++) {
// 	if(results_selectOption[f].curPer < 20){// 过滤下 curPer小于20的 ,使curflex 直接等于20
// 		results_selectOption[f].curflex = 20;
// 		ltCount++ ;// 小于20比例的选项个数
// 	}else {
// 		// 大于20比例的选项,curFlex先等于curPer,后面会再做处理
// 		results_selectOption[f].curflex = results_selectOption[f].curPer;
// 		lgIndex.push(f)
// 	}
// }
//
// // 					大于20的选项(没被处理过的比例之前)在 剩下总比例中    占的比例
// var residueTotal = 0; //(没被处理过的比例之前)剩下总比例
// for(var dealOne = 0; dealOne<lgIndex.length;dealOne++) {
// 	residueTotal +=results_selectOption[lgIndex[dealOne]].curPer;
// // 						console.log(results_selectOption[lgIndex[dealOne]].curPer)
// }
//
// var noDealPerArr =[] //(没被处理过的比例)大于20的选项  在 剩下总比例中   每项占的比例
// for(var dealTwo = 0; dealTwo<lgIndex.length;dealTwo++) {
// 		var noDealPerObj = {};
// 		//noDealPerObj{index:'',per:''}
// 		//index:存放大于20比例的selectOption中的index ,per:(没被处理过的比例)在 剩下总比例中    占的比例
// 		noDealPerObj.index = lgIndex[dealTwo];
// 		noDealPerObj.per = results_selectOption[lgIndex[dealTwo]].curPer /residueTotal;
// 		noDealPerArr.push(noDealPerObj)
// }
// //					console.log(JSON.stringify(noDealPerArr))
// //					开始处理 大于20比例
// var residuePer  = 0 ; //剩余的比例
// if(ltCount == 1){ //如果只有一个小于 20比例时
// 	residuePer = 100 - 20;
// 	if(results_selectOption.length == 2){ // 探案 2个选项时
// 		for(var deal = 0; deal<lgIndex.length;deal++) {
// 			results_selectOption[lgIndex[deal]].curflex =residuePer
// 		}
// 	}else if(results_selectOption.length == 3){// 探案 3个选项时
// 		for(var noDealItem = 0; noDealItem<noDealPerArr.length;noDealItem++) {
//
// 			results_selectOption[noDealPerArr[noDealItem].index].curflex = parseInt(Math.round(80*noDealPerArr[noDealItem].per)); //取整
// 		}
// 	}
// }else if(ltCount == 2)  { //如果2个小于 20比例时
// 		residuePer = 100 - 2*20;
// 		for(var deal = 0; deal<lgIndex.length;deal++) {
// 			results_selectOption[lgIndex[deal]].curflex =residuePer
// 		}
// 	}
// 	return results_selectOption

		var proportionClassify = classifyPer(results_selectOption)
		var noDealPerArr 	   = lg_Init_surplus(results_selectOption,proportionClassify.lgIndex)
		return handleScore(results_selectOption,proportionClassify.ltIndex,proportionClassify.lgIndex,proportionClassify.equalZero,noDealPerArr)
}



//	var proportionClassify = classifyPer(results_selectOption)
//	var noDealPerArr 	   = lg_Init_surplus(results_selectOption,proportionClassify.lgIndex)
//	handleScore(results_selectOption,proportionClassify.ltIndex,proportionClassify.equalZero,noDealPerArr)
//统计出  0、1-20、大于20 
function classifyPer(optionObj){
		var proportionClassify = null;
		var ltIndex = []; //存放小于20(不包含0)比例的selectOption中的index
		var equalZero = []; //存放等于 0比例的selectOption中的index
		var lgIndex = [];//存放大于20比例的selectOption中的index
		for(var f = 0 ; f<optionObj.length;f++) {
			if(optionObj[f].curPer > 0 && optionObj[f].curPer < 20){// 过滤下 curPer小于20的 ,使curflex 直接等于20
				optionObj[f].curflex = 20;
				ltIndex.push(f)
			}else if(optionObj[f].curPer == 0){
				optionObj[f].curflex = 0;
				equalZero.push(f)
			}else {
				// 大于20比例的选项,curFlex先等于curPer,后面会再做处理 
				optionObj[f].curflex = optionObj[f].curPer; 
				lgIndex.push(f)
			}
		}
		proportionClassify = {
			ltIndex :ltIndex,
			equalZero:equalZero,
			lgIndex:lgIndex,
		}
		return proportionClassify
}

function lg_Init_surplus(optionObj, lgIndex) {
	//大于20的选项(没被处理过的比例之前)在 剩下总比例中    占的比例  
	var residueTotal = 0; //(没被处理过的比例之前)剩下总比例					
	for(var dealOne = 0; dealOne < lgIndex.length; dealOne++) {
		residueTotal += optionObj[lgIndex[dealOne]].curPer*1;
		
	}
//	console.log(residueTotal)
	var noDealPerArr = [] //(没被处理过的比例)大于20的选项  在 剩下总比例中   每项占的比例 
	for(var dealTwo = 0; dealTwo < lgIndex.length; dealTwo++) {
		var noDealPerObj = {};
		//noDealPerObj{index:'',per:''} 
		//index:存放大于20比例的selectOption中的index ,per:(没被处理过的比例)在 剩下总比例中    占的比例  
		noDealPerObj.index = lgIndex[dealTwo];
		noDealPerObj.per = optionObj[lgIndex[dealTwo]].curPer / residueTotal;
		noDealPerArr.push(noDealPerObj)
	}
//	console.log(JSON.stringify(noDealPerArr))
	return noDealPerArr
}


//处理评分 所占宽度比例
function handleScore(optionObj,ltIndex,lgIndex,equalZero,noDealPerArr){
		var residuePer  = 0 ; //剩余的比例
		if(optionObj.length == 2){ // 探索 2个选项时
			
				if(equalZero.length == 0) {
					if(ltIndex.length == 1){ //如果只有一个小于 20比例时
						residuePer  = 100 - 20;
						for(var deal = 0; deal<lgIndex.length;deal++) {
							optionObj[lgIndex[deal]].curflex =residuePer
						}
					}
				}else if(equalZero.length == 1) {
					for(var deal = 0; deal<lgIndex.length;deal++) {
						optionObj[lgIndex[deal]].curflex = 100;
					}
				}else if(equalZero.length == 2) {

				}
		}else if(optionObj.length == 3){// 探索 3个选项时

			if(equalZero.length == 0) {
					if(ltIndex.length == 1){ //如果只有一个小于 20比例时
						residuePer  = 100 - 20;
						for(var noDealItem = 0; noDealItem<noDealPerArr.length;noDealItem++) {
							optionObj[noDealPerArr[noDealItem].index].curflex = toFixed(residuePer*noDealPerArr[noDealItem].per,2);
						}
					}else if(ltIndex.length  == 2)  { //如果2个小于 20比例时
						residuePer = 100 - 2*20;
						for(var noDealItem = 0; noDealItem<noDealPerArr.length;noDealItem++) {
							optionObj[noDealPerArr[noDealItem].index].curflex =residuePer
						}
					}

			}else if(equalZero.length == 1) {
					if(ltIndex.length == 1){ //如果只有一个小于 20比例时
						residuePer  = 100 - 20;
						for(var deal = 0; deal<lgIndex.length;deal++) {
							optionObj[lgIndex[deal]].curflex = residuePer ;
						}
					}
			}else if(equalZero.length == 2) {
					for(var noDealItem = 0; noDealItem<noDealPerArr.length;noDealItem++) {
						optionObj[noDealPerArr[noDealItem].index].curflex = 100;
					}
			}
		}
		return equalZero
}

//var erralert=0;
//window.onerror=function (msg,url,line,column,detail){
//  if (erralert++< 5 && detail){
//      var errorMsg="douwewn error:"+msg+"\n"+detail.stack || detail;
//      errorMsg=encodeURIComponent(errorMsg);
//      ajaxGetUser("http://test.quakoo.com:8888/douwen.jpg?errorMsg="+errorMsg,{},function () {
//      
//      },function () {});
//
//  }
//}
