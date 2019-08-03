/**
 * Created by PC on 2016/7/25.
 */

function setUserInfo(user){
    localStorage.setItem('user',JSON.stringify(user));
}

function getUserInfo(){

    var user = localStorage.getItem('user');
    if(isNotBlack(user)){
        return JSON.parse(user);
    }else{
        layer.msg("请检查浏览器是否设置无痕浏览");
    }
}


function setDataItem(name,data){
    localStorage.setItem(name,JSON.stringify(data));
}


function getItemData(name){
    var data = localStorage.getItem(name);
    if(isNotBlack(data)){
        try {
            return JSON.parse(data);
        }catch(err){
            return data;
        }
    }else{
        return data;
    }


}


function showLoading(title) {
	if (!$("#loading").html()) {
		if(title) {
			jQuery('body').append("<div id='loading'><div class='weui-mask_transparent'></div><div class='weui-toast'><i class='weui-loading weui-icon_toast'></i><p class='weui-toast__content'>" + title + "</p></div></div>")
		}else{
			jQuery('body').append("<div id='loading'><div class='weui-mask_transparent'></div><div class='weui-toast'><i class='weui-loading weui-icon_toast'></i><p class='weui-toast__content'>数据加载中..</p></div></div>")
		}
	}
}

function hideLoading() {
	if ($("#loading").html()) {
		$("#loading").remove();
	}
}

function openNewWindow(url,params){
	if (isNotBlack(params)) {
		params.v = Math.random();
	}else{
		params = {v:Math.random()}
	}
	var user = getUserInfo();
    var text = "";
    if(isNotBlack(params)){
        text ="?";
        for(var key in params){
            text = text+key+"="+params[key]+"&"
        }
    }
    var urlHistorys=getItemData("urlHistory");
    if(!urlHistorys){
        urlHistorys=[];
    }
    if(urlHistorys.length>100){
        urlHistorys.shift();
    }
    urlHistorys.push(window.location.href);
    setDataItem("urlHistory",urlHistorys);
    //history.go(-100);
    window.location.href=(url+text);
}


function goBackToHome(inner){
	stopEventBubble();
	if (inner) {
		window.location.href ="../main.html";
	}else{
		window.location.href = "main.html";
	}
}


function opeUserRegister(url,params){
    var text = "";
    if(isNotBlack(params)){
        text ="?";
        for(var key in params){
            text = text+key+"="+params[key]+"&"
        }
    }
    location.href = url+text;
}

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    url = decodeURIComponent(url)
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]= unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function openRegister(){
    location.href = './mallRegister.html';
}


function checkUser(){
    var user = getUserInfo();
    if(isBlack(user) || isBlack(user.phone)){
        location.href = '/html/login/login.html';
        return false;
    }
    return true;
}

//同步post请求
function ajaxNoSync(url,data,callback,err){
    ajax(url,data,true,'post',callback,err);
}


function ajaxGet(url,getData,callback,origin){
	var token = sessionStorage.getItem('token');
	getData.token = token;
    ajax(url,getData,true,'post',callback,origin);
}


function ajaxGetUser(url,getData,callback,err){
    ajax(url,getData,true,'post',callback,err);
}

function ajax(url,data,sync,dataType,callback,origin){
    if(isBlack(url)){
        layer.msg('你没有传url');
        return;
    }
    data = data || {};
//	if(!berRedirect()){
// 		return;
// 	}
    $.ajax({
        url:url,
        type:"post",
        async:sync,
        data:data,
        dataType:"json",
        success:function(data){
            if(data){
        		if(isFunction(callback)){
                    callback(data);
                }    
            }
        },
        error:function(errs){
            if(isFunction(errs)||origin){
                errs();
            }else{
            	hideLoading();
                layer.msg('当前网络不给力');
            }
        }
    })
}


	function closeWin(closeMore){
        var urlHistorys=getItemData("urlHistory");
        if(!urlHistorys){
            urlHistorys=[];
        }
        var lastUrl="";
        if(urlHistorys.length>0){
            lastUrl=urlHistorys.pop();
            if (closeMore) {
                lastUrl=urlHistorys.pop();
            }
            if (closeMore == 3) {
            	console.log("################################45254243151531352")
                lastUrl=urlHistorys.pop();
            }
        }
        setDataItem("urlHistory",urlHistorys);

        if(lastUrl&&lastUrl.indexOf("/main.html?")!=-1){
            if(lastUrl.indexOf("roomNo")!=-1){
                lastUrl=lastUrl.replace("roomNo","orn");
            }
        }
        if(lastUrl&&lastUrl.indexOf("/main.html")!=-1&&lastUrl.indexOf("cached")==-1){
            if(lastUrl.indexOf("cached")==-1){
                if(lastUrl.indexOf("/main.html?")!=-1){
                    lastUrl=lastUrl+"&cached=true";
                }else{
                    lastUrl=lastUrl+"?cached=true";
                }
            }
        }
       	window.location.href=(lastUrl);
	}


    //点击切换tab标签
	function openTab(type) {
	    if (!type) {
	        return;
	    }
	    setDataItem("activeTap",type);
	    //切换样式
	    var header = $api.dom('#header .active');//对应头部的样式
	    $api.removeCls(header, 'active');
	    var thisHeader = $api.dom('#header .' + type);
	    $api.addCls(thisHeader, 'active');
	    var actTab = $api.dom('#nav .active');//对应底部的样式
	    $api.removeCls(actTab, 'active');
	    var thisTab = $api.dom('#nav .' + type);
	    thisTab = thisTab.parentNode;
	    $api.addCls(thisTab, 'active');
	    if(type == 'home'){//主页推荐
//	    	goButtom();
	        $("#main").load('home/recommend.html');
	    }
	    if(type == 'modal'){//模特热度
	        $("#main").load('modal/modal_hot.html');
	    }
	    if(type == 'notice'){//消息
	        $("#main").load('message/message_body.html');
	    }
	    if(type == 'mine'){//我的
	    	$("#main").load('mine/mine.html');
	    }
	    if(type == "mall"){
	    	$("#main").load('home/mall_body.html');	     
	    }
	};

function concatJson(param1,param2){
    if(!isNullJson(param1)&&!isNullJson(param2)){
        for(var key in param1){
            param2[key] = param1[key];
        }
        return param2;
    }
    param1 = param1 || {};
    param2 = param2 || {};
    return param1 || param2;
}

function getVisitor(callback){
    var user = null;
    $.ajax({
        url:loginVisitorUrl,
        type:'post',
        async:false,
        data:{},
        dataType:"json",
        success:function (ret) {
            if (isNotBlack(ret) && ret.token) {
                user = ret;
                setUserInfo(user);
                callback();
            } else {
                var btnArray = ['否', '重试'];
                mui.confirm('网络连接不好，是否重试？', '提示', btnArray, function (e) {
                    if (e.index == 1) {
                        getVisitor(callback);
                    } else {
                        layer.msg('初始化失败');
                        cleanDb();
                    }
                })
            }
        },
        error:function(){
            var btnArray = ['否', '重试'];
            mui.confirm('网络连接不好，是否重试？', '提示', btnArray, function (e) {
                if (e.index == 1) {
                    getVisitor(callback);
                } else {
                    layer.msg('初始化失败');
                    cleanDb();
                }
            })
        }
    });
}



function cleanDb(callBack) {
    window.localStorage.clear();
    if(callBack){
        callBack();
    }
}


function setDataItem(name,data){
    localStorage.setItem(name,JSON.stringify(data));
}


function getItemData(name){
    var data = localStorage.getItem(name);
    if(isNotBlack(data)){
        try {
            return JSON.parse(data);
        }catch(err){
            return data;
        }
    }else{
        return data;
    }
}

var formatTimeToDate = function(time){
    return new Date(time).format("yyyy-MM-dd hh:mm");
};
var formatTimeToDay = function(time){
    return new Date(time).format("yyyy-MM-dd");
};
var formatTimeToMonth = function(time){
    return new Date(time).format("MM-dd");
};
var formatTimeToHours = function(time){
    return new Date(time).format("hh:mm");
};

Date.prototype.format = function(format) {
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
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
};


//获取图片的宽高，如果有传入最大宽度，计算出相同比率的高度。
function getWidthAndHeightByImageSrc(imgSrc,maxWidth,maxHeight){
    // /images/436*300*d1bda1*de7104*162f52*e70cc814cf8874e2f450aa7ed24519ff
    maxWidth=maxWidth||0;
    maxHeight=maxHeight||0;
    var result={w:350,h:350};
    if(isBlack(imgSrc)){
        result.err = true;
        return result;
    }
    var s1=imgSrc.split("/youhuipai/");
    if(s1&& s1.length<1){
        return result;
    }
    var s2=s1[1].split("*");
    if(s2&&s2.length<1){
        return result;
    }
    result.srcW=parseInt(s2[0]);
    result.srcH=parseInt(s2[1]);
    if(maxWidth>0){
        var b=maxWidth/result.srcW;
        result.h=Math.round(result.srcH*b);
        result.w=maxWidth;
    }
    if(maxHeight>0){
        var b=maxHeight/result.srcH;
        result.w=Math.round(result.srcW*b);
        result.h=maxHeight;
    }
    return result;
}

//检查手机号码
//function checkMobileNum(mobileNum){
//  if(!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(mobileNum))){
//      return false;
//  }
//  return true;
//}

//获取屏幕高度
function getWinHeigh(){
    return document.body.clientHeight;
}

//获取屏幕高度
function getWinWidth(){
    return document.body.clientWidth;
}
//获取图片真实尺寸
function getImageRealSize(url){
//  if(url.startWith("http")){
        if(url.indexOf("/guoguo/") != (-1)){
            var s1=url.split("/guoguo/");
        }else if(url.indexOf("/storage/") != (-1)){
            var s1=url.split("/storage/");
        }
        var group=s1[1].split("*");
        var orgWidth=parseFloat(group[0]);
        var orgHeight=parseFloat(group[1]);
        var obj ={w:orgWidth,h:orgHeight};
        return obj;
//  }
}
function getHeightFromWidth(realWidth,realHeight,thumWidth){
    var thumHeight = Math.round((thumWidth/realWidth)*realHeight);//显示宽度除以图片真实宽度 乘以 图片真实高度
    return thumHeight;
}

////压缩图片  并且做变形处理
//function getImgByThisSize(url,showWidth,showHieght){
//	if(url.indexOf("http") == 0){
//		if(url.indexOf("/guoguo/") != (-1)){
//	        var s1=url.split("/guoguo/");
//	    }else if(url.indexOf("/storage/") != (-1)){
//	        var s1=url.split("/storage/");
//	    }else{
//	    	return {url:url,style:"width:"+showWidth+"px;height:"+showHieght+"px;"};
//	    }
//	    var group=s1[1].split("*");
//	    var orgWidth=parseFloat(group[0]);
//	    var orgHeight=parseFloat(group[1]);
//	    var width = Math.round(showWidth*2);
//	    if (width < orgWidth) {
//	    	var imgTypes = url.substring(url.lastIndexOf("."));
//	    	var imgName = url.split(imgTypes)[0]+"_"+width+"_0";
//	    	url = imgName+imgTypes;
//	    }
//	    return getImgSizeBySize(url,showWidth,showHieght);
//	}
//}

////只是压缩图片  不做变形处理
//function changeImgBySize(url,showWidth){
//	if(url.indexOf("/guoguo/") != (-1)){
//      var s1=url.split("/guoguo/");
//  }else if(url.indexOf("/storage/") != (-1)){
//      var s1=url.split("/storage/");
//  }
//  var group=s1[1].split("*");
//  var orgWidth=parseFloat(group[0]);
//  var orgHeight=parseFloat(group[1]);
//  var width = Math.round(showWidth*2);
//  if (width < orgWidth) {
//  	var imgTypes = url.substring(url.lastIndexOf("."));
//  	var imgName = url.split(imgTypes)[0]+"_"+width+"_0";
//  	url = imgName+imgTypes;
//  }
//  return url;
//}


////截取照片
//function getImgSizeBySize(url,showWidth,showHieght){
//  var realSize = getImageRealSize(url);
//  var thumSize = {w:showWidth,h:showHieght};
//  var h = getHeightFromWidth(realSize.w,realSize.h,thumSize.w);
//
//  //判断高度是否超出；大于，图片不够显示，截左右
//  if(thumSize.h > h){
//      var w = getHeightFromWidth(realSize.h,realSize.w,thumSize.h);//肯定超出去
//      var over = 0-Math.round((w - thumSize.w)/2);//左右截取
//      //margin-left: 17px;margin-right: 17px
//      var obj = {img_height:realSize.h,img_width:realSize.w,url:url,style:"margin-left:"+over+"px"+"; margin-right:"+over+"px;height:"+showHieght+"px;width:"+w+"px"};
//      //var obj={over:over,type:1}
//      return obj;
//  }else{
//      var over =  0-Math.round((h - thumSize.h)/2);
//      var obj = {img_height:realSize.h,img_width:realSize.w,url:url,style:"margin-top:"+over+"px"+";margin-bottom:"+over+"px;width:"+showWidth+"px"};
//      // var obj={over:over,type:2}
//      return obj;
//  }
//
//}

function berRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    } else {
    	openNewWindow("/html/mine/goToApp_body.html")
        return false;
    }
}

function isLoginOfUser(isMain) {
	var user = getUserInfo();
	if(isBlack(user)||isBlack(user.phone)){
		localStorage.clear();
		if(isMain){
			openNewWindow('login/login.html');
		}else{
			openNewWindow('../login/login.html');
		}
	}
}



function isPC()  {  
    var userAgentInfo = navigator.userAgent;  
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
    var flag = true;  
    for (var v = 0; v < Agents.length; v++) {  
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
	       	flag = false;
	       	break;
        }
    }  
    return flag;  
}


function openUserSetUp(){
	$(".userSetUp").slideToggle()
}


function bodyScroll(event) {
    try {
        event.preventDefault();
    } catch (e) {
    }
    try {
        event.stopPropagation();
    } catch (e) {

    }
}

function choosePicture(callBack){
	wx.chooseImage({
		count: 1, // 默认9
		sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		success: function (res) {
			var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
			wx.uploadImage({
				localId: localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
				isShowProgressTips: 1, // 默认为1，显示进度提示
				success: function (res) {
					var serverId = res.serverId; // 返回图片的服务器端ID
					if (isNotBlack(serverId)) {
						callBack(serverId);
					}
				}
			});
		}
	});
}

function setUserIcon(){
	var userInfo = getUserInfo();
	if (isNotBlack(userInfo)&&isNotBlack(userInfo.icon)) {
		var obj_icon = getImgByThisSize(userInfo.icon,30,30);
		var _userIcon = document.querySelector(".userIcon").querySelector("img");
		_userIcon.src = obj_icon.url;
		_userIcon.style = obj_icon.style;
	}
}


function TransferString(content)  {
    var string = content;
	try{
        string=string.replace(/\r\n/g,"<BR>")
        string=string.replace(/\n/g,"<BR>");
    }catch(e) {
        alert(e.message);  
    }
    return string;
}

function openAsssociation(){
	var user = getUserInfo();
	if(user.associationId) {
		ajaxGet(getMyAssociationInfoUrl, {}, function(rets, err) {
			if(rets && rets.success) {
				if(rets.data.status == 1 && rets.data.openStatus != 2) { //状态(0 未审核 1通过 2没通过)
					openNewWindow('mine/association_info.html')
				} else {
					openNewWindow('mine/apply_association.html')
				}
			}
		})
	}
}

function openAsscociationByid(path){
	ajaxGet(getUserInfoUrl,{},function(ret,err){
		if(ret&&ret.success){
			ret.data.token = getUserInfo().token;
			setUserInfo(ret.data);
			if(ret.data&&ret.data.associationId) {
				ajaxGet(getMyAssociationInfoUrl, {}, function(rets, err) {
					if(rets && rets.success) {
						if(rets.data.status == 1 && rets.data.openStatus != 2) {
							if (path) {
								openNewWindow('association_info.html')
							}else{
								openNewWindow('mine/association_info.html')
							}
						}else if(rets.data.status == 0) {
							layer.msg("社团申请正在审核中!");
							openUserSetUp();
						}else{
							if (path) {
								openNewWindow('apply_association.html')
							}else{
								openNewWindow('mine/apply_association.html')
							}
						}
					}
				})
			}else{
				if (path) {
					openNewWindow('apply_association.html')
				}else{
					openNewWindow('mine/apply_association.html')
				}
			}
		}
	})
	
}



function openUserCertification_pc(path) {
	var userInfo = getUserInfo();
	if(userInfo && userInfo.famousId > 0) {
		layer.msg("你已经认证过了！");
		openUserSetUp();
		return;
	}
	if(path){
		openNewWindow('../userCertification.html')
	}else{
		openNewWindow('userCertification.html')
	}
}
