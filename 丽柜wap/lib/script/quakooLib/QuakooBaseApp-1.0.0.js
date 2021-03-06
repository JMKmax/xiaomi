/**
 *  雀科科技- http://www.quakoo.com
 *
 *  基础混合开发APP需要的类
 *  包含基本的插件，基本操作（打开页面，跳转等），数据库,文件,图片处理,视频处理，二维码，版本控制，热更新等等
 *
 */


var QuakooDb = (function () {
    function QuakooDb() {
        this.dbName = 'app';
    }

    Quakoo.class(QuakooDb, 'QuakooDb');
    var _proto = QuakooDb.prototype;


    /**
     *
     * 初始化数据库，APP打开的时候 调用一次
     * @returns {ret}
     * {
     * status: true,//布尔类型；操作成功状态值，true|false
     * code: '',//数字类型；错误码，详情参考-----附录之‘错误码对照表’。，仅当 status 为 false 时有值。本参数暂仅支持iOS平台
     * msg: ''//字符串类型；错误描述，仅当 status 为 false 时有值
     * }
     */
    _proto.initDb = function () {
        if(!this.db){
            this.db = api.require('db');
        }

        var ret = this.db.openDatabaseSync({
            name: this.dbName,
            path: 'fs://quakoo.db'
        });

        if (ret.status) {
            if(!localStorage.getItem('appDbName')){
                this.cleanDb()
            }
            ret = this.db.executeSqlSync({
                name: this.dbName,
                sql: 'drop table if exists app1 ;'//测试时候用。
            });
            if (ret.status) {
                ret = this.db.executeSqlSync({
                    name: this.dbName,
                    sql: 'CREATE TABLE  if not exists '+this.dbName+'(key varchar(255), value varchar(55235));'
                });
                if (ret.status) {
                    ret = this.db.executeSqlSync({
                        name: this.dbName,
                        sql: 'create unique index if not exists index1 on '+this.dbName+'(key);'
                    });
                }
            }
        }
        if(ret.status){
            localStorage.setItem('appDbName',true)
        }
        return ret;
    }

    /**
     *
     * 清除数据库
     * @returns {ret}
     * {
     * status: true,//布尔类型；操作成功状态值，true|false
     * code: '',//数字类型；错误码，详情参考-----附录之‘错误码对照表’。，仅当 status 为 false 时有值。本参数暂仅支持iOS平台
     * msg: ''//字符串类型；错误描述，仅当 status 为 false 时有值
     * }
     */
    _proto.cleanDb = function () {
        if(!this.db){
            this.db = api.require('db');
        }

        var ret = this.db.executeSqlSync({
            name: this.dbName,
            sql: 'drop table if exists '+this.dbName+' ;'
        });
        return ret;
    }


    /**
     *
     * 添加数据到数据库
     * @param key 字符串
     * @param value  字符串
     * @returns {ret}
     * {
     * status: true,//布尔类型；操作成功状态值，true|false
     * code: '',//数字类型；错误码，详情参考-----附录之‘错误码对照表’。，仅当 status 为 false 时有值。本参数暂仅支持iOS平台
     * msg: ''//字符串类型；错误描述，仅当 status 为 false 时有值
     * }
     */
    _proto.setItem = function (key, value) {
       localStorage.setItem(key,JSON.stringify(value));
    }
	

    /**
     *
     * 获取数据
     * @param key 字符串
     * @returns {ret}
     * 返回的值 string
     */
    _proto.getItem = function (key) {
        if(key!="userInfo"){
            var user=quakooUser.getUserInfo();
            if (user) {
                var uid = '' + user.id;
                key = uid + key;
            }
        }
        
        var data = localStorage.getItem(key);
	    if(quakooUtils.isNotBlack(data)){
	        try {
	            return JSON.parse(data);
	        }catch(err){
	            return data;
	        }
	    }else{
	        return data;
	    }
    }


    /**
     *
     * 移除数据
     * @param key 字符串
     * @returns {ret}
     * {
     * status: true,//布尔类型；操作成功状态值，true|false
     * }
     */
    _proto.removeItem = function (key) {
        if(key!="userInfo"){
            var user=quakooUser.getUserInfo();
            if (user) {
                var uid = '' + user.id;
                key = uid + key;
            }
        }
        localStorage.setItem(key,"");
    }






    /**
     *
     * 添加数据到数据库(用户无关,系统初始化时候用到)
     * @param key 字符串
     * @param value  字符串
     * @returns {ret}
     * {
     * status: true,//布尔类型；操作成功状态值，true|false
     * code: '',//数字类型；错误码，详情参考-----附录之‘错误码对照表’。，仅当 status 为 false 时有值。本参数暂仅支持iOS平台
     * msg: ''//字符串类型；错误描述，仅当 status 为 false 时有值
     * }
     */
    _proto._setItem = function (key, value) {

    }

    /**
     *
     * 获取数据(用户无关,系统初始化时候用到)
     * @param key 字符串
     * @returns {ret}
     * {
     * status: true,//布尔类型；操作成功状态值，true|false
     * data: ""//返回的值 string
     * }
     */
    _proto._getItem = function (key) {
        
    }

    
    /**
     *
     * 移除数据
     * @param key 字符串
     * @returns {ret}
     * {
     * status: true,//布尔类型；操作成功状态值，true|false
     * }
     */
    _proto._removeItem = function (key) {
       
    }


    return QuakooDb;
})();


var QuakooFs = (function () {
    function QuakooFs() {
    }

    Quakoo.class(QuakooFs, 'QuakooFs');
    var _proto = QuakooFs.prototype;


    /**
     *
     * 初始化文件系统，创建文件夹，APP打开的时候 调用一次
     * @returns {ret}
     * {
     * status: true,//布尔类型；操作成功状态值，true|false
     * code: '',//数字类型；错误码，详情参考-----附录之‘错误码对照表’。，仅当 status 为 false 时有值。本参数暂仅支持iOS平台
     * msg: ''//字符串类型；错误描述，仅当 status 为 false 时有值
     * }
     */
    _proto.initFs = function () {

    }


    return QuakooFs;
})();


var QuakooImg = (function () {
    function QuakooImg() {
    }

    Quakoo.class(QuakooImg, 'QuakooImg');
    var _proto = QuakooImg.prototype;


    /**
     *
     * 图片处理（压缩变形处理）
     * @param url 图片地址
     * @param showWidth 页面上展示宽度
     * @param showHieght 页面上展示的高度，传'auto'或者0，表示高度不固定。根据图片的实际形状展示。
     *
     * @returns {ret}
     * {
     * url: '',  //真实的URL
     * style: '',//裁剪样式（如果showHieght是固定的话）
     * }
     */
    _proto.processImg = function (url,showWidth,showHieght) {
        if(url&&url.startWith("http")){
            if(url.indexOf("/guoguo/") == (-1) && url.indexOf("/storage/") == (-1) ){
                return {url:url,style:"width:"+showWidth+"px;height:"+showHieght+"px;"};
            }
            //从图片地址中获取图片的真实宽高
            var realSize=this.getImageRealSize(url);
            var orgWidth=realSize.w;
            var orgHeight=realSize.h;
            // 根据         要展示的宽 计算 2倍图所需要的宽度
            var width = Math.round(showWidth*2);
            //如果【 图片真实宽度】 大于 【2倍图所需要的宽度】 那么就 对图片 地址  拼接参数 进行 图片 压缩
            if (width < orgWidth) {
                var imgTypes = url.substring(url.lastIndexOf("."));
                var imgName = url.split(imgTypes)[0]+"_"+width+"_0";
                url = imgName+imgTypes;
            }

            // 进行图片裁剪  并把裁剪结果 返回
            if(showHieght&&showHieght>0){
                //根据   原真实宽高  和 压缩后宽度 计算  ---> 压缩后 高度
                var h = Math.round((showWidth/orgWidth)*orgHeight);//显示宽度除以图片真实宽度 乘以 图片真实高度
                //根据 需要高度 与  图片 压缩后 高度 进行比较  判断 是 需要 【左右裁剪 展示中间部分】还是【上下裁剪显示中间部分】 以此来不让图片变形
                if(showHieght > h){
                    //【左右裁剪 展示中间部分】  即 高度固定是   showHieght
                    var w = Math.round((showHieght/orgHeight)*orgWidth);//   算出左右超出部分值
                    var over = 0-Math.round((w - showWidth)/2);//  通过算出的值左右截取
                    var obj = {url:url,style:"margin-left:"+over+"px"+"; margin-right:"+over+"px;height:"+showHieght+"px;width:"+w+"px"};
                    return obj;
                }else{
                    var over =  0-Math.round((h - showHieght)/2); //  通过算出的值上下截取
                    var obj = {url:url,style:"margin-top:"+over+"px"+";margin-bottom:"+over+"px;height:"+h+"px;width:"+showWidth+"px"};
                    return obj;
                }
            }
        }

        return {url:url};
    }


    /**
     *  获取图片真实尺寸
     *  @returns {ret}
     * {
     * w: int,//图片真实宽度
     * h: int,//图片真实高度
     * }
     */
    _proto.getImageRealSize=function(url){
        var obj ={w:0,h:0};
        if(url){
            var group=url.split("*");
            var strs=group[0].split("/");
            var orgWidth=parseFloat(strs[strs.length-1]);
            var orgHeight=parseFloat(group[1]);
            obj.w=orgWidth;
            obj.h=orgHeight;
            return obj;
        }
        return obj
    }


    /**
     * 打开相册选择照片或者视频
     * @param imgNum 最大个数 int
     * @param type 字符串 img（只有图片）,video（只有视频）,all (所有)
     * @param callBack 60*60*4
     */
    _proto.openMedia=function(imgNum,type,callBack){


    }



    /**
     *
     * 调用原生方法上传图片
     * 这个时候原生的过程应该是自己打开上传进度条 （1/20）（19/20）（20/20）
     * @param files    （注意是本地文件）文件:["file://xxxxx/xxxx/xxx.jpg","file://xxxxx/xxxx/xxx.jpg"],//实际图片的路径（file开头的地址）
     * @param callBackOnUpload
     */
    _proto.uploadImgs=function(files,callBackOnUpload){
//      api.accessNative({
//          name: "uploadImgs",
//          extra: {
//              files:files,
//          }
//      }, function (ret, err) {
//      });
//
//
//      api.addEventListener({
//          name: 'uploadImgsListener' //监听选择完的事件
//      }, function(ret, err) {
//          //ret.urls
//          //返回上传后图片地址（http开头的）[http://xxxxx/xxxx/xxx.jpg,http://xxxxx/xxxx/xxx.jpg]
//
//          callBackOnUpload(ret);
//      });

    }




    //上传头像，或者证件
    //打开相册或者拍照（单个图片，带裁剪功能）
    //返回的结果是已经上传的图片
    /**
     *
     * @crop 是否裁剪，0表示不裁剪  1表示裁剪
     * @param callBackOnUpload
     */
    _proto.openAlbumAndUpload=function(crop,callBackOnUpload){
//      api.accessNative({
//          name: "openAlbum",
//          extra: {
//              crop:crop //是否裁剪，0表示不裁剪  1表示裁剪
//          }
//      }, function (ret, err) {
//      });
//
//
//      api.addEventListener({
//          name: 'openAlbumListener' //监听选择完的事件
//      }, function(ret, err) {
//          //ret.url
//          //返回上传之后的图片地址（http开头的）http://xxxxx/xxxx/xxx.jpg
//          callBackOnUpload(ret);
//      });

    }

    /**
     * 批量获取图片缓存地址
     * @param imgs
     * @param callBack 回调map结构（key为原始图片，value为缓存地址）
     * @private
     */
    _proto._batchGetImgsCache=function(imgs,callBack){
//      var result = {};
//      var j = 0;
//      var hasCall = false;
//      for (var i = 0; i < imgs.length; i++) {
//          var img = imgs[i];
//          (function (img) {
//              api.imageCache({
//                  url: img,
//                  thumbnail : false,
//                  policy:'cache_only'
//              },function( ret, err ){
//                  if(ret){
//                      result[img] = ret.url;
//                  }else{
//                      result[img] = img;
//                  }
//                  j++;
//                  if (j == imgs.length && !hasCall) {
//                      hasCall = true;
//                      callBack(result);
//                  }
//              });
//
//          })(img);
//      }
    }

    /**
     * 预览图片,大图浏览模式
     * 需要传入在页面点击大图浏览前的尺寸。
     * 该方法通过在传入之前的尺寸，获取对应的缩略图（之前已经获取过了，并且有缓存）
     * 1.先把缓存的缩略图图片传给原生（原生先显示本地的缓存图片，加快速度）
     * 2.再把原始图片地址传给原生
     *
     * @param placeholderImg //占位图（一般是APP，LOGO)
     * @param showWidth 当前图片的展示的宽度（在页面点击大图浏览前的宽度）
     * @param showHieght 当前图片的展示的高度（在页面点击大图浏览前前的宽度）
     * @param imgs 所有图片的原始URL，数组
     * @param activeIndex 当前打开第几个图片
     */
    _proto.photoBrowser=function(placeholderImg,showWidth,showHieght,imgs,activeIndex){
//      var thumbnails=[];
//      for(var i=0;i<imgs.length;i++){
//          //获取缩略图
//          var thumbnail=  this.processImg(imgs[i],showWidth,showHieght).url;
//          thumbnails.push(thumbnail);
//      }
//
//      var thumbnailCaches=[];
//
//      this._batchGetImgsCache(thumbnails,function (result) {
//          for(var i=0;i<thumbnails.length;i++){
//              thumbnailCaches.push(result[thumbnails[i]]);
//          }
//
//          api.accessNative({
//              name: "photoBrowser",
//              extra: {
//                  placeholderImg:placeholderImg,//占位图（一般是APP，LOGO）
//                  thumbnails:thumbnailCaches,//缩略图（小图）
//                  imgs:imgs,//所有图片（大图）
//                  activeIndex:activeIndex,//打开的索引
//              }
//          }, function (ret, err) {
//          });
//
//      });

    }


    /**
     * 用模块批量压缩图片，该模块收费
     * 需要传入在imgList 需要压缩的本地图片数据
     *
     * @param imgList //图片数组（一般是APP，LOGO)
     * @param callBack 返回压缩后的数组列表
     * @param size 压缩的品质
     */
    _proto.compressImageList =function(imgList,size,callBack){
//      var compactPicture = api.require('compactPicture');
//      compactPicture.HittingPic({
//          picpatharray: imgList,
//          size: size
//      }, function(ret) {
//          if(quakooApp.isNotBlack(ret)  && quakooApp.isNotBlack(ret.states)){
//              //转换成小写
//              var resultList = new Array;
//              var states = ret.states;
//              for(var i = 0;i < states.length;i++){
//                  resultList.push(coverToSuffix(states[i]));
//              }
//              if(callBack){
//                  callBack(resultList);
//              }
//
//          }else {
//              if(callBack){
//                  callBack([]);
//              }
//          }
//      });
//
//      //图片后缀的大小写转换
//      function coverToSuffix(src){
//          var header = src.substring(0,src.lastIndexOf("."));
//          var suffix = src.substring(src.lastIndexOf("."));
//          return header+suffix.toLocaleLowerCase();
//      }
    }











    return QuakooImg;
})();


var QuakooVideo = (function () {
    function QuakooVideo() {
    }
    Quakoo.class(QuakooVideo, 'QuakooVideo');
    var _proto = QuakooVideo.prototype;


    /**
     *
     * 调用原生方法上传视频
     * 这个时候原生的过程应该是自己打开上传进度条
     * @param cover 视频封面文件 file://xxxxx/xxxx/xxx.jpg
     * @param video 视频文件 file://xxxxx/xxxx/xxx.mp4
     * @param callBackOnUpload
     */
    _proto.uploadVideo=function(cover,video,callBackOnUpload){
//      api.accessNative({
//          name: "uploadVideo",
//          extra: {
//              cover:cover,//上传视频的封面"file://xxxxx/xxxx/xxx.jps"
//              video:video//上传的视频的真实路径"file://xxxxx/xxxx/xxx.mp4"
//          }
//      }, function (ret, err) {
//      });
//
//
//      api.addEventListener({
//          name: 'uploadVideoListener' //监听选择完的事件
//      }, function(ret, err) {
//
//          //ret.cover
//          //返回上传后封面地址（http开头的）http://xxxxx/xxxx/xxx.jpg
//
//          //ret.video
//          //返回上传后视频播放地址（http开头的）http://xxxxx/xxxx/xxx.mp4
//
//          callBackOnUpload(ret);
//      });

    }



    /**
     * 拍摄视频（）
     * @param type 模式：0:基本版，1：中级班（开启美颜，开启配乐），3：高级版
     * @param minTime 最少时间
     * @param maxTime 最大时间
     * @param callBack
     */
    _proto.recordVideo=function(type,minTime,maxTime,callBack){
//      api.accessNative({
//          name: "recordVideo",
//          extra: {
//              type:type ,//模式：开启美颜，开启配乐
//              minTime:1, //拍摄最小时间
//              maxTime:10 //拍摄最大时间
//          }
//      }, function (ret, err) {
//      });
//
//
//      api.addEventListener({
//          name: 'recordVideoListener' //监听选择完的事件
//      }, function(ret, err) {
//          //ret.cover  （file开头的）file://xxxxx/xxxx/xxx.jpg
//          //ret.video （file开头的）file://xxxxx/xxxx/xxx.mp4
//          callBack(ret);
//      });

    }

    //预览视频
    /**
     *
     * @param showWidth 封面图片在页面上的展示宽度
     * @param showHieght 封面图片在页面上的展示高度
     * @param cover 封面
     * @param video 视频地址
     */
    _proto.videoBrowser=function(showWidth,showHieght,cover,video){
//
//      var thumbnail=  quakooImg.processImg(cover,showWidth,showHieght).url;
//      api.imageCache({
//          url: thumbnail,
//          thumbnail : false,
//          policy:'cache_only'
//      },function( ret, err ){
//          var cacheUrl;
//          if(ret){
//              cacheUrl= ret.url;
//          }else{
//              cacheUrl= thumbnail;
//          }
//
//          api.accessNative({
//              name: "videoBrowser",
//              extra: {
//                  cover:cacheUrl, //封面
//                  video:video
//              }
//          }, function (ret, err) {
//          });
//
//      });


    }
    /**
     * 打开播放视频窗口
     * @param x             显示在窗口x轴的位置
     * @param y             显示在窗口Y轴的位置
     * @param showWidth     展示窗口的宽
     * @param showHeight    展示窗口的高
     * @param video         视频的url地址
     */
    _proto.openVideoPlay=function(x,y,showWidth,showHeight,video){
//      var param = {x:x,y:y,width:showWidth,height:showHeight,url:video};
//      api.accessNative({
//          name: "openVideoPlay",
//          extra: {
//              param: param
//          }
//      }, function (ret, err) {
//      });
    }

    /**
     * 关闭播放视频窗口
     */
    _proto.closeVideoPlay=function(){
//      api.accessNative({
//          name: "closeVideo",
//          extra: {}
//      }, function (ret, err) {
//      });
    }



    return QuakooVideo;
})();


var QuakooSound = (function () {
    function QuakooSound() {
    }

    Quakoo.class(QuakooSound, 'QuakooSound');
    var _proto = QuakooSound.prototype;


    /**
     * 录制音频（弹出跟微信一样的录制音频的页面）
     * @param minTime 录制最小时间
     * @param maxTime 录制最大时间
     * @param callBackOnUpload
     */
    _proto.recordSound=function(minTime,maxTime,callBackOnUpload){
//      api.accessNative({
//          name: "recordSound",
//          extra: {
//              minTime:minTime, //录制最小时间
//              maxTime:maxTime //录制最大时间
//          }
//      }, function (ret, err) {
//      });
//
//
//      api.addEventListener({
//          name: 'recordSoundListener' //监听选择完的事件
//      }, function(ret, err) {
//          //ret.url
//          //返回上传之后的音频地址（http开头的）http://xxxxx/xxxx/xxx.mp3
//          callBackOnUpload(ret);
//      });

    }


    return QuakooSound;
})();

var QuakooLocation = (function () {
    function QuakooLocation() {
    }

    Quakoo.class(QuakooLocation, 'QuakooLocation');
    var _proto = QuakooLocation.prototype;


    /**
     * 获取当前位置
     * @param callBackOnUpload
     */
    _proto.getLocation=function(callBackOnUpload){

//      api.accessNative({
//          name: "locationInfo",
//      }, function (ret, err) {
//      });
//
//      api.addEventListener({
//          name:'locationInfoListener'//监听选择完的事件
//      },function (ret,err) {
//          //返回上传之后的地址信息
//          callBackOnUpload(ret);
//
//      });


    }


    return QuakooLocation;
})();


var QuakooApp = (function () {
    function QuakooApp() {
    }

    Quakoo.class(QuakooApp, 'QuakooApp');
    var _proto = QuakooApp.prototype;


    /**
     * 系统初始化,得到数据库存储位置
     */
    _proto.systemInit = function () {
//      var ret=quakooDb.initDb();
//      if(!ret.status){
//          quakooMsg.toast("无法创建本地数据库！");
//          return;
//      }
//      ret=quakooFs.initFs();
//      if(!ret.status&&!ret.exist){
//          quakooMsg.toast("无法建立本地文件夹！");
//          return;
//      }
//
//      //判断是否第一次打开
//      var alreadyShowGuide = quakooDb.getItem("quakooShowGuideKey_"+config.version);
//      if(config.isShowGuide&&!alreadyShowGuide){
//          //播放引导页
//          quakooDb.setItem("quakooShowGuideKey_"+config.version,true);
//          //FIXME 播放引导页
//      }else{
//          this.openWin_noAnimation("main","html/main/main.html",{});
//      }
    }
    /**
     * 无动画打开新页面
     * @param name
     * @param url
     * @param pageParam
     */
    _proto.openWin_noAnimation=function (name,url,pageParam) {
        this.openNewWindow(name,url);
    }

    /**
     * 打开一个新的页面窗口
     * @param name
     * @param url
     * @param pageParam
     * @param overload
     */
    _proto.openNewWindow=function(name, url, pageParam, overload) {
	    var text = "";
	    if(quakooUtils.isNotBlack(pageParam)){
	        text ="?";
	        for(var key in pageParam){
	            text = text+key+"="+pageParam[key]+"&"
	        }
	    }
	    window.location.href = (url+text);
    }

    /**
     * 内部打开一个外部链接
     * @param url 跳转   内部跳转 inner://xxx/xxx 外部跳转 http://xxx/xxx
     * @param currentDirectory 当前目录  最外层目录小于0（index.html） 第一级目录（html文件夹下的，目前没有） 第二级目录（html文件夹下的文件夹）
     */
    _proto.openSystemForword = function(url,currentDirectory,overLoad){
        currentDirectory=currentDirectory||0;
        var path="../";
        if(currentDirectory <= 0){
            path="./html/";
        } else if(currentDirectory==2){
            path="../";
        }else if(currentDirectory == 1){
            path="./";
        }

        if(url.startWith("inner")){
            var content=url.substring("inner://".length);
            var name;
            var uri;
            var queryStr;
            var param={};
            var type;
            if(content.indexOf("?")>0){
                uri=content.substr(0,content.indexOf("?"));
                queryStr=content.substr(content.indexOf("?")+1);
            }else{
                uri=content;
            }
            var parts=uri.split("/");
            type=parts[0];
            name=parts[parts.length-1].replace(".html","");

            if(quakooUtils.isNotBlack(queryStr)){
                var params=queryStr.split("&");
                for(var i=0;i<params.length;i++){
                    param[params[i].split("=")[0]]=params[i].split("=")[1];
                }
            }
            this.openNewWindow(name,path+uri,param,overLoad);
        }else if(url.startsWith("http://") || url.startsWith("https://")){
            var linkUrl;
            var queryStr;
            var param = {};

            if(url.indexOf("?")>0){
                linkUrl = url.substr(0,url.indexOf("?"));
                queryStr = url.substr(url.indexOf("?")+1);
            }else{
                linkUrl = url;
            }
            if(quakooUtils.isNotBlack(queryStr)){
                var params=queryStr.split("&");
                for(var i=0;i<params.length;i++){
                    param[params[i].split("=")[0]]=params[i].split("=")[1];
                }
            }

            param.url = linkUrl;
            var browser = api.require('webBrowser');
            browser.open({
                url:url
            });
//      quakooApp.openNewWindow(hex_md5(url), path + "outside/outside.html",param,overLoad);
        }else{
            var content=url.substring("native://".length);
            var name;
            var queryStr;
            var param={};

            if(url.indexOf("?")>0){
                name = content.substr(0,content.indexOf("?"));
                queryStr = content.substr(content.indexOf("?")+1);
            }else{
                name = url;
            }
            if(quakooUtils.isNotBlack(queryStr)){
                var params=queryStr.split("&");
                for(var i=0;i<params.length;i++){
                    param[params[i].split("=")[0]]=params[i].split("=")[1];
                }
            }
            api.accessNative({
                name: name,
                extra:param
            }, function(ret, err) {

                if (ret) {

                } else {
                    quakooMsg.toast("启动失败")
                }
            });
        }
    }


    /**
     * 打窗口内打开frame
     * @param name 名称
     * @param url 地址
     * @param pageParam 页面传递参数
     * @param overload
     */
    _proto.openFrameInWin=function(name, url, pageParam, overload) {
//      this.openFrame(name,url,pageParam,config.winHeadHeight,config.winBottomHeight,overload);
    }

    _proto.initFrameInWin=function(pageParam,overload,height){
//      var statusBarAppearance = api.statusBarAppearance;//是否支持沉浸式
//      var header = document.querySelector('#topbar');
//      $api.fixStatusBar(header);
//      header.style.paddingTop = api.safeArea.top + 'px';
//      header.style.display = 'block';
//      config.winHeadHeight = header.offsetHeight;
//      if(height){
//          config.winHeadHeight += height;
//      }
//      this.openFrameInWin(api.winName + '_body','./' + api.winName + '_body.html',pageParam,overload);
    }

    /**
     * 打开frame
     * @param name
     * @param url
     * @param pageParam
     * @param headHeight
     * @param bottomHeight
     * @param overload
     */
    _proto.openFrame=function(name,url,pageParam,headHeight,bottomHeight,overload) {
//      var params = {
//          name : name,
//          url : url,
//          pageParam : pageParam,
//          rect : {
//              x : 0,
//              marginTop : headHeight,
//              w : api.frameWidth,
//              marginBottom:bottomHeight
//          },
//          bounces : false,
//          opaque : false,
//          //bgColor:'#EDEDED',
//          bgColor : '#ededed',
//          useWKWebView: true, //设置在 ios 平台使用 wkWebview 显示页面,$api.getStorage会失效。需要使用api.setPerfs
//          allowEdit : true,
//          vScrollBarEnabled : true,
//          showProgress : false,
//          hScrollBarEnabled : false,
//          reload : false
//      };
//
//      if(overload) {
//          for (var m in overload) {
//              params[m] = overload[m];
//          }
//      }
//
//      api.openFrame(params);
    }


    /**
     * 关闭当前app
     */
    _proto.closeApp=function(){
//      api.closeWidget({
//          retData: {name: 'closeWidget'},
//          silent: true,
//          animation: {
//              type: 'none',
//              subType: 'from_bottom',
//              duration: 500
//          }
//      });
    }



    _proto.toast = function(msg){
       	mui.toast(msg);
    }


    /**
     * 关闭当前窗口
     */
    _proto.closeWin=function(){
       	window.history.go(-1);
    }

    /**
     * 无动画关闭此页面
     */
    _proto.closeThisWin=function(){
        window.history.go(-1);
    }






    /**
     * 热更新版本更新
     * @param callBack 更新成功后的回调 可以不传
     */
    _proto.startHotUpdate=function(callBack){
//      //循环获取
//      quakooData._ajaxGetData(config.getUrl_web_version_hotUpdate(),{version:config.hotVersion,time:new Date().getTime()},function (ret) {
//          if(ret && ret.success){
//              if(quakooUtils.isNotBlack(ret.data)){
//                  if(quakooUtils.isNotBlack(ret.data.url)){
//                      if(parseInt(ret.data.version) > parseInt(config.hotVersion)){
//                          api.accessNative({
//                              name: "hotUpdate",
//                              extra: {
//                                  url:ret.data.url //热更新包下载地址
//                              }
//                          }, function (ret, err) {});
//                          api.addEventListener({
//                              name: 'hotUpdateListener' //监听选择完的事件
//                          }, function(ret1, err) {
//                              //ret.status
//                              if(ret1.value && ret1.value.status){
//                                  //下载完成
//                                  config.hotVersion=ret.data.version;
//                                  if(callBack){
//                                      callBack();
//                                  }
//                              }else {
//                                  quakooMsg.toast('更新失败');
//                              }
//
//                          });
//                      }
//                  }
//              }
//          }
//          setTimeout(function () {
//              quakooApp.startHotUpdate(callBack);
//          },600000);
//      },true,false,false,function () {
//          setTimeout(function () {
//              quakooApp.startHotUpdate(callBack);
//          },600000);
//      });
    }








    //扫一扫
    _proto.scanning=function(callBack){
//      api.accessNative({
//          name: "scanning",
//          extra: {
//          }
//      }, function (ret, err) {
//      });


//      api.addEventListener({
//          name: 'scanningListener' //监听选择完的事件
//      }, function(ret, err) {
//          //ret.url
//          //返回扫描之后的url
//          callBack(ret);
//      });

    }


    //打开密码输入页面
    //其他的控制多次输入等等。是否正确等等由H5控制
    _proto.passwordPage=function(callBack){
//      api.accessNative({
//          name: "passwordPage",
//          extra: {
//          }
//      }, function (ret, err) {
//      });
//
//      api.addEventListener({
//          name: 'passwordPageListener' //监听选择完的事件
//      }, function(ret, err) {
//          //ret.password
//          //输入的密码
//          callBack(ret);
//      });

    }

    //打开某一个原生页面(传页面参数)
    /**
     *
     * @param name 页面名字
     * @param param 页面参数, （map结构json）
     * @param animation 动画效果参数等,（map结构json） 动画参数由原生同学构建一下，先构建最基本的从哪打开，多少毫秒
     */
    _proto.openNativePage=function(name,param,animation){
//      api.accessNative({
//          name: "openWin",//
//          extra: {
//              name:name,//页面名字
//              param:param,//页面参数, （map结构json）
//              animation:animation//动画效果参数等,动画参数由原生同学构建一下，先构建最基本的从哪打开，多少毫秒
//          }
//      }, function (r	`et, err) {
//      });

    }


    //打开小程序页面(实际上就是打开h5页面，不过没有头部栏，右侧有一个三个小点和关闭按钮 就是样子和微信一样)
    /**
     *
     * @param url
     */
    _proto.openMiniPage=function(url){
//      api.accessNative({
//          name: "openMiniPage",//
//          extra: {
//              url:url ,//页面地址
//          }
//      }, function (ret, err) {
//      });

    }


    return QuakooApp;
})();


var QuakooDevice = (function () {
    function QuakooDevice() {
    }
    Quakoo.class(QuakooDevice, 'QuakooDevice');

    var _proto = QuakooDevice.prototype;



    /**
     * 获取当前连接的wifi信息
     * @param callBack ret.name wifi名字,ret.ssid wifi ssid
     */
    _proto.getWifi = function (callBack) {
//      api.accessNative({
//          name: "getWifi",
//          extra: {
//          }
//      }, function (ret, err) {
//      });
//
//      api.addEventListener({
//          name: 'getWifiListener' //监听选择完的事件
//      }, function(ret, err) {
//          //ret.name wifi名字
//          //ret.ssid wifi ssid
//          callBack(ret);
//      });
    }



    return QuakooDevice;
})();


var QuakooMsg = (function () {
    function QuakooMsg() {

    }

    Quakoo.class(QuakooMsg, 'QuakooMsg');
    var _proto = QuakooMsg.prototype;



    /**
     * 调用原生方法展示加载中的组件 loading
     */
    _proto.showProgress = function (title) {
        // api.showProgress({});

        if (!$("#loading").html()) {
			if(title) {
				jQuery('body').append("<div id='loading'><div class='weui-mask_transparent'></div><div class='weui-toast'><i class='weui-loading weui-icon_toast'></i><p class='weui-toast__content'>" + title + "</p></div></div>")
			}else{
				jQuery('body').append("<div id='loading'><div class='weui-mask_transparent'></div><div class='weui-toast'><i class='weui-loading weui-icon_toast'></i><p class='weui-toast__content'>数据加载中..</p></div></div>")
			}
		}
    }

    /**
     * 调用原生方法隐藏加载中的组件 loading
     */
    _proto.hideProgress = function () {
		if ($("#loading").html()) {
			$("#loading").remove();
		}
    }


    /**
     * 确认提示框（无取消按钮）
     * @param title 标题
     * @param cotent 内容
     * @param rightAction 用户点击确认按钮后回调
     */
    _proto.showFixDialog=function(title,cotent,rightAction){
    	var btnArray = ['确定'];
		mui.confirm(cotent, title, btnArray, function(e) {
			rightAction();
       })
    }


    //弹出两个按钮
    _proto.showDialog=function(title,cotent,leftBtnTitle,rightBtnTitle,rightAction,leftAction){
        var btnArray = ['取消','确定'];
		mui.confirm(cotent, title, btnArray, function(e) {
			if (e.index == 1) {
				rightAction();
			}
       	})
    }


    //弹出一个按钮
    _proto.showOneDialog=function(title,cotent,rightBtnTitle,rightAction){
        var btnArray = ['确定'];
		mui.confirm(cotent, title, btnArray, function(e) {
			rightBtnTitle();
       	})
    }
    /***
     * 弹出提示框，一秒后自动消失
     * @param image
     * @param title
     * @param cotent
     */
    _proto.showAutoHide=function(image,title,cotent){
        
    }
    /**
     * 带输入框的弹出框
     *
     */

    _proto.dialogBoxInput = function(keyboardType,title,placeholder,fn){
        
    }
    /**
     * toast提示消息
     * @param message
     */
    _proto.toast=function(message){
        mui.toast(message);
    }
    return QuakooMsg;
})();


var QuakooUser = (function () {
    function QuakooUser() {
    }
    Quakoo.class(QuakooUser, 'QuakooUser');
    var _proto = QuakooUser.prototype;

    /**
     * 设置用户到数据库
     * @param user
     */
    _proto.setUserInfo=function(user){
        if(user){
            quakooDb.setItem("userInfo",user);
        }
    }

    /**
     * 移除数据库中的用户信息
     */
    _proto.removeUserInfo=function(){
        quakooDb.removeItem("userInfo");
    }

    /**
     * 从数据库中获取用户信息
     * @returns {*}
     */
    _proto.getUserInfo=function() {
        return quakooDb.getItem("userInfo");
    }

    /**
     * 注册游客
     * @param callback
     */
    _proto.registerCustomer=function(callback) {
        quakooData._ajaxSubmitData(config.getUrl_web_user_loadCustomer(),{},function (ret) {
            ret.data.realUser = false;
            quakooUser.setUserInfo(ret.data);
            if(callback){
                callback();
            }
        },false,true,false);
    }


    /**
     * 判断是否是登陆用户
     * @returns {boolean}
     */
    _proto.isLoginUser=function() {
        var user=this.getUserInfo();
        return user&&user.realUser;
    }



    /**
     * 注册原生
     * @param callback
     */
    _proto.registerNative=function() {
//      var userInfo=this.getUserInfo()?this.getUserInfo():{};
//      if(quakooUtils.isBlack(userInfo.icon)){
//          userInfo.icon = '';
//      }
//      if(quakooUtils.isBlack(userInfo.name)){
//          userInfo.name = '';
//      }
//      api.accessNative({
//          name: "login",
//          extra: {
//              token: userInfo.token,
//              id: userInfo.id,
//              chatid: userInfo.id,// （用户聊天id）
//	            noticeId: userInfo.id,// 推送ID（用户主键ID）
//              icon:userInfo.icon,
//              name:userInfo.name,
//              chatServerUrl:config.chatServerUrl,
//              chatPort:config.chatPort,
//              pushServerUrl:config.pushServerUrl,
//              pushPort:config.pushPort,
//              uploadImgUrl:config.uploadImageUrl,
//              domain:config.serverUrl
//          }
//      }, function (ret, err) {
//      });
    }





    return QuakooUser;
})();


/**
 * QuakooPage
 * addDataToHtml(results,append)
 * @type {QuakooPage}
 */


/**
 * QuakooData
 * addDataToHtml(results,append)
 * @type {QuakooData}
 */
var QuakooData = (function () {
    function QuakooData() {

    }


    Quakoo.class(QuakooData, 'QuakooData');
    var _proto = QuakooData.prototype;


    _proto._createCacheKey = function (url, getData) {
        var cacheKey = url;
        for (var key in getData) {
            if (key != "cursor" && key != "size") {
                cacheKey = cacheKey + key + getData[key];
            }
        }
        return md5.md5(cacheKey);
    }


    /**
     * 获取数据的ajax请求
     * @param url 请求url
     * @param reqData 请求的数据
     * @param callBackOnData(ret) 有缓存的数据回回调这个方法，当请求的时候发现新数据跟缓存不一致也会调用这个方法。有可能调用两次。
     */
    _proto.ajaxGetData = function (url, reqData, callBackOnData) {
        this._ajaxGetData(url,reqData,callBackOnData,true);
    }

    /**
     * 获取数据的ajax请求（带错误的回调）
     * @param url 请求url
     * @param reqData 请求的数据
     * @param callBackOnData(ret) 有缓存的数据回回调这个方法，当请求的时候发现新数据跟缓存不一致也会调用这个方法。有可能调用两次。
     */
    _proto.ajaxGetDataWithError = function (url, reqData, callBackOnData,callBackOnError) {
        this._ajaxGetData(url,reqData,callBackOnData,true,true,true,callBackOnError);
    }

    /**
     * 获取数据的ajax请求(不带)
     * @param url 请求url
     * @param reqData 请求的数据
     * @param callBackOnData(ret) 有缓存的数据回回调这个方法，当请求的时候发现新数据跟缓存不一致也会调用这个方法。有可能调用两次。
     */
    _proto.ajaxGetDataWithOutUser = function (url, reqData, callBackOnData) {
        this._ajaxSubmitData(url,reqData,callBackOnData,false);
    }

    /**
     * 获取数据的ajax请求(没有加载圈)
     * @param url 请求url
     * @param reqData 请求的数据
     * @param callBackOnData(ret) 有缓存的数据回回调这个方法，当请求的时候发现新数据跟缓存不一致也会调用这个方法。有可能调用两次。
     */
    _proto.ajaxGetDataWithOutProgress = function (url, reqData, callBackOnData) {
        this._ajaxGetData(url,reqData,callBackOnData,true,true,false);
    }

    /**
     * 获取数据的ajax请求
     * @param url 请求url
     * @param reqData 请求的数据
     * @param callBackOnData(ret) 有缓存的数据回回调这个方法，当请求的时候发现新数据跟缓存不一致也会调用这个方法。有可能调用两次。
     * @param addUserToken 是否自动添加token true||false 默认为true
     * @param showErrorMsg 是否展示错误提示 (默认为展示)
     * @param showProcess 是否展示加载中的提示框 (默认为展示)
     * @param callBackOnError(ret,err) 当加载错误的时候回调方法
     */
    _proto._ajaxGetData = function (url, reqData, callBackOnData,addUserToken,showErrorMsg,showProcess,callBackOnError) {
        if(showProcess!=false){
            quakooMsg.showProgress({});
        }

        //组装请求参数
        if (quakooUtils.isBlack(reqData)) {
            reqData = {};
        }
        var user = quakooUser.getUserInfo();
        if(addUserToken){
            reqData.token = user.token;
        }
        reqData._version=config.version;

        //获取缓存数据
        var cacheKey = this._createCacheKey(url, reqData);
        var value=quakooDb.getItem(cacheKey);
        var stringValue = JSON.stringify(value);
        if (quakooUtils.isNotBlack(value)) {
            callBackOnData(value);
        }
        //请求服务器获取数据
        reqData = reqData || {};
	    $.ajax({
	        url:url,
	        type:"GET",
	        async:true,
	        data:reqData,
	        dataType:"json",
	        success:function(data){
	            quakooMsg.hideProgress({});
	            if (data) {
	                if (data.success == false) {
	                    if (data && (data.code == 400||data.code == 401 )&&!context.isReLogin) {
	                        context.isReLogin=true;
	                        quakooUser.removeUserInfo();
	                        quakooMsg.showFixDialog("温馨提示", "您的账号在其他手机上登录，您被迫下线！", function () {
	                            context.isReLogin=false;
	                            quakooApp.openNewWindow("login", "../login/login.html", {}, {slidBackEnabled: false});
	                        });
	                        return;
	                    } else {
	                        var errorMessage = data.msg||data.errorMessage || '获取信息失败';
	                        if (showErrorMsg!=false) {
	                            quakooMsg.toast(errorMessage);
	                        }
	                        if(callBackOnError){
	                            callBackOnError(data,err);
	                        }
	                    }
	                } else if (JSON.stringify(data) != stringValue) {
	                    quakooDb.setItem(cacheKey, (data));
	                    callBackOnData(data);
	                }
	            } else {
	                if (showErrorMsg!=false) {
	                    if(config.isTest){
	                        alert("req"+JSON.stringify(reqData)+","+url+""+JSON.stringify(data)+",err"+JSON.stringify(err));
	                    }else{
	                        quakooMsg.toast("获取信息失败");
	                    }
	                }
	                if(callBackOnError){
	                    callBackOnError(ret,err);
	                }
	            }
	        },
	        error:function(){
	            
	        }
	    })     
    }




    /**
     * 提交ajax请求
     * 不需要缓存
     * @param url 请求url
     * @param reqData 请求的数据
     * @param callBackOnServerData(ret) 服务器传输回数据，回调方法
     */
    _proto.ajaxSubmitData = function (url, reqData, callBackOnServerData) {
        this._ajaxSubmitData(url, reqData, callBackOnServerData,true);
    }



    /**
     * 上传ajax请求
     * 不需要缓存
     * @param url 请求url
     * @param callback 回调函数
     * @param errback(ret) 上传失败方法
     */
    _proto.uploadImg = function(file,callback,errback) {

    }


    /**
     * 提交ajax请求
     * 不需要缓存
     * @param url 请求url
     * @param reqData 请求的数据
     * @param callBackOnServerData(ret) 服务器传输回数据，回调方法
     * @param addUserToken 是否自动添加token true||false
     * @param showErrorMsg 是否展示错误提示 (默认为展示)
     * @param showProcess 是否展示加载中的提示框 (默认为展示)
     * @param callBackOnError(ret,err) 当加载错误的时候回调方法
     */
    _proto._ajaxSubmitData = function (url, reqData, callBackOnServerData,addUserToken,showErrorMsg,showProcess,callBackOnError) {
        if(showProcess!=false){
            quakooMsg.showProgress({});
        }
        //组装请求参数
        if (quakooUtils.isBlack(reqData)) {
            reqData = {};
        }
        var user = quakooUser.getUserInfo();
        if(addUserToken){
            reqData.token = user.token;
        }
        reqData._version=config.version;
        //请求服务器获取数据
		
		reqData = reqData || {};
	    $.ajax({
	        url:url,
	        type:"GET",
	        async:true,
	        data:reqData,
	        dataType:"json",
	        success:function(data){
	            quakooMsg.hideProgress({});
	            if (data) {
	                if (data.success == false) {
	                    if (data && (data.code == 400||data.code == 401 )&&!context.isReLogin) {
	                        context.isReLogin=true;
	                        quakooUser.removeUserInfo();
	                        quakooMsg.showOneDialog("温馨提示", "您的账号在其他手机上登录，您被迫下线！", "确定", function () {
	                            context.isReLogin=false;
	                            quakooApp.openNewWindow("login", "../../html/login/login.html", {}, {slidBackEnabled: false});
	                        });
	                        return;
	                    } else {
	                        var errorMessage = data.msg||data.errorMessage||data.data || '获取信息失败';
	                        if (showErrorMsg!=false) {
	                            quakooMsg.toast(errorMessage);
	                        }
	                        if(callBackOnError){
	                            callBackOnError(data,err);
	                        }
	                    }
	
	                } else {
	                    callBackOnServerData(data);
	                }
	            } else {
	                if (showErrorMsg!=false) {
	                    quakooMsg.toast("获取信息失败");
	                }
	                if(callBackOnError){
	                    callBackOnError(data,err);
	                }
	            }
	        },
	        error:function(errs){
	            
	        }
	    })
    }







    return QuakooData;
})();

