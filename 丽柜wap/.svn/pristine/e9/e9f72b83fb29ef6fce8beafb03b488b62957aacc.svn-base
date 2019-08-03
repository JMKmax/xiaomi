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
        return  moment(timestamp).format('YYYY-MM-DD hh:mm')
    }
    if(hours === 0 && minutes === 0 && seconds < 1000*60){
        return '刚刚'
    }else{
        return  moment(timestamp).fromNow()
    }
};
// 视频时长
QuakooUtils.prototype.videoDuration=function (duration) {
    var totalM =  parseInt(duration/60,10);
    var surS = duration%60;
    var totalH = parseInt(duration/totalM,10);
    var surM =  duration%totalM;
    if(surM === 0){
        surS = surS >10? surS  :'0'+surS;
        if(totalH === 0){
           return '00:'+ surS
        }else {
            totalH = totalH >10? totalH  :'0'+totalH;
            return totalH+":"+ '00:'+ surS
        }

    }else {
        surM = surM >10? surM  :'0'+surM;
        surS = surS >10? surS  :'0'+surS;
        if(totalH === 0){
            return surM+ ':'+ surS
        }else {
            totalH = totalH >10? totalH  :'0'+totalH;
            return totalH+":"+ surM+':'+ surS
        }
    }
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

QuakooUtils.prototype.onlyInteger=function(el,length){
    if(el.value.length>length){el.value = el.value.substr(0,length)}
    el.value = el.value.replace(/[^0-9]$/,'')
};