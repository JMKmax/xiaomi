/**
 *  雀科科技- http://www.quakoo.com
 *
 *  项目类
 *
 */


//快速引用部分

//APP开发 快速引用
var config = new Config();
var quakooUtils = new QuakooUtils();
var md5 = new Md5();
var base54 = new Base64();

var quakooImg=new QuakooImg();
var quakooVideo=new QuakooVideo();
var quakooSound=new QuakooSound();
var quakooLocation=new QuakooLocation();

var quakooDb = new QuakooDb();
var quakooFs = new QuakooFs();
var quakooMsg = new QuakooMsg();
var quakooApp = new App();
var quakooUser = new User();
var quakooData = new QuakooData();


var quakooLogin =new QuakooLogin();
var quakooPay =new QuakooPay();



var context = {};


//PC网站开发 快速引用


//H5开发 快速引用


//定义


//覆盖和继承
//继承参考Config，注意super
//覆盖
// QuakooPage.prototype.init=function () {
//     //111111
// }
/**
 *
 * 获取数据的ajax请求,不带token,带加载圈，返回错误信息 ，有错误回调
 * @param url 请求url
 * @param reqData 请求的数据
 * @param callBackOnServerData(ret) 服务器传输回数据，回调方法
 * @param callBackOnError(ret,err) 当加载错误的时候回调方法
 */
QuakooData.prototype.ajaxSubmitDataNotToken = function (url, reqData, callBackOnServerData,callBackOnError) {
    this._ajaxSubmitData(url, reqData, callBackOnServerData,false,true,true,callBackOnError);
};
/**
 *
 * 获取数据的ajax请求,带token,不加载圈，返回错误信息 ，有错误回调
 * @param url 请求url
 * @param reqData 请求的数据
 * @param callBackOnServerData(ret) 服务器传输回数据，回调方法
 * @param callBackOnError(ret,err) 当加载错误的时候回调方法
 */
QuakooData.prototype.ajaxSubmitDataNotProcess=function (url, reqData, callBackOnServerData,callBackOnError) {
    this._ajaxSubmitData(url, reqData, callBackOnServerData,true,true,false,callBackOnError);
};
/**
 *
 * 获取数据的ajax请求,带token,不加载圈，返回错误信息 ，有错误回调 不带toast
 * @param url 请求url
 * @param reqData 请求的数据
 * @param callBackOnServerData(ret) 服务器传输回数据，回调方法
 * @param callBackOnError(ret,err) 当加载错误的时候回调方法
 */
QuakooData.prototype.ajaxSubmitDataNotProcessNotToast=function (url, reqData, callBackOnServerData,callBackOnError) {
    this._ajaxSubmitData(url, reqData, callBackOnServerData,true,false,false,callBackOnError);
};
// 工具
// 格式化时间 需引入monent.js
QuakooUtils.prototype.commentFormatTime=function (timestamp) {
    var commentTime = moment(timestamp),
        curTime = moment(curTime);
    var years =  curTime.diff(commentTime, 'years'),
        days= curTime.diff(commentTime, 'days'),
        hours = curTime.diff(commentTime, 'hours'),
        minutes = curTime.diff(commentTime, 'minutes'),
        seconds = curTime.diff(commentTime, 'seconds');
    if(years || days){
        return  moment(timestamp).format('YYYY-MM-DD HH:mm')
    }
    if(hours === 0 && minutes === 0 && seconds < 1000*60){
        return '刚刚'
    }else{
        return  moment(timestamp).fromNow()
    }
};
// 视频时长
QuakooUtils.prototype.videoDuration=function (value) {
        var theTime = parseInt(value);// 秒
        var theTime1 = 0;// 分
        var theTime2 = 0;// 小时
        if(theTime == 60 ) {return '01:00'}
        if(theTime > 60) {
            theTime1 = parseInt(theTime/60);
            theTime = parseInt(theTime%60);
            if(theTime1 > 60) {
                theTime2 = parseInt(theTime1/60);
                theTime1 = parseInt(theTime1%60);
            }
        }

        var theTimeStr = theTime  < 10 ? '0'+theTime  : theTime;
        var theTime1Str = theTime1 < 10 ? '0'+theTime1 : theTime1;
        var theTime2Str = theTime2 < 10 ? '0'+theTime2 : theTime2;
        var results = '';
        if(theTime2>0){
            results = theTime2Str+':'+ theTime1Str+':'+theTimeStr
        }else {
            if(theTime1 == 60){
                results =  '01'+':00'+':'+theTimeStr
            }else {
                results =  theTime1Str+':'+theTimeStr
            }
        }

        return results
};
// 路径加密
QuakooUtils.prototype.getImgKey = function(){
    var thisKeyTime = quakooDb.getItem("filekey");
    if(this.isNotBlack(thisKeyTime)){
        var time = new Date().getTime();
        if(time - thisKeyTime.time < 8*60*60*1000 && time - thisKeyTime.time > 0){
            return thisKeyTime.filekey;
        }
    }
    var filekey = '?filekey=';
    var a = Date.parse(new Date()).toString();
    var cod = a.replace(/1/g,'f').replace(/2/g,'A').replace(/3/g,'C').replace(/4/g, 'g').replace(/5/g,'W').replace(/6/g,'q').replace(/7/g, 't').replace(/8/g,'m').replace(/9/g, 'J').replace(/0/g,'p');
    var b , c;
    var d = '';
    var doc = '';
    b = cod.substring(0,5).split('');
    c = cod.substr(cod.length-5,5).split('');
    for(var i =0;i<5;i++){
        d +=c[c.length-1-i]+b[i];
        doc = d +a.substring(5,cod.length-5);
        if(i == 4){
            filekey += $.base64.encode(doc);
        }
    }
    quakooDb.setItem("filekey",{filekey:filekey,time:new Date().getTime()});
    return filekey;
};

// 仅输入整数
QuakooUtils.prototype.onlyInteger=function(el,length){
    // input  [type=number]
    var defaultLength = length || 6;
    el.value = el.value.replace(/\./,'');
    if(el.value.length>5)el.value=el.value.slice(0,defaultLength);
};

// 密码输入
QuakooUtils.prototype.passwordInput=function(el,length){
    var defaultLength = length || 16;
    $api.attr(el,'maxlength',defaultLength)
    return el.value.replace(/[\W]/g,'')
};

// 处理粉丝数 关注数 观看数
QuakooUtils.prototype.formatNumberToStr = function(num){
    var str = '';
    if(num/10000 > 1){
        var theUnit = parseInt(num/10000,10);
        var decimals = num%10000+'';
        var decimals_str = decimals.slice(0,1);
        if(+decimals_str >0 ){
            str = theUnit+'.'+decimals_str+'w';
        }else {
            str = theUnit+'w';
        }

        return str;
    }
    return num
};


//初始化通知
QuakooApp.prototype.bindPush =function bindPush(){
    var user = quakooUser.getUserInfo();
    if (isBlack(user)) {
        return;
    }
    var userId;
    if(user&&user.phone){
        userId = user.id;
    }else{
        userId = -1;
    }

    var ajpush = api.require('ajpush');
    if(api.systemType == "ios"){
        ajpush.bindAliasAndTags({alias: userId}, function (ret) {
            if (ret.statusCode == 0) {

            }
        });
    }else{
        ajpush.isPushStopped(function(ret) {
            if(ret && ret.isStopped){
                ajpush.resumePush(function(rets) {
                    if(rets && rets.status){
                        ajpush.init(function (data) {
                            if (data && data.status) {
                                ajpush.bindAliasAndTags({alias: userId}, function (ret) {
                                    if (ret.statusCode == 0) {

                                    }
                                });
                            }
                        });
                    }
                });
            }else{
                ajpush.init(function (data) {
                    if (data && data.status) {
                        ajpush.bindAliasAndTags({alias: userId}, function (ret) {
                            if (ret.statusCode == 0) {

                            }
                        });
                    }
                });
            }
        });
    }
}