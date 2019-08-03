//======================系统初始化（开始）=============================
function systemInit(callBack) {
    var resultList = api.hasPermission({
        list:['storage','location']
    });
    var list = [];
    for(var i=0;i<resultList.length; i++){
        if(!resultList[i].granted){
            list.push(resultList[i].name);
        }
    }
    if(list.length>0) {
        api.requestPermission({
            list: list,
            code: 1
        }, function (ret, err) {
            var systemType = api.systemType;  // 比如： ios
            if(systemType != "ios"){
                if(!ret.list[0].granted){
                    closeApp();
                    return;
                }
            }

            initDb(function (ret, err) {
                if (ret.status) {
                    initFs(function (ret) {
                        if (ret.status || ret.exist) {
                            //判断是否第一次打开
                            // initShowGuide(function(){
                                initSystemInfo(function () {
                                    if (callBack) {
                                        callBack();
                                    }
                                });
                            // });
                        }else {
                            api.alert({
                                msg: "无法建立本地文件夹"
                            });
                        }
                    });
                } else {
                    api.alert({
                        msg: "数据库加载错误:" + JSON.stringify(err)
                    });
                }
            });
        })
    }else{
        initDb(function (ret, err) {
            if (ret.status) {
                initFs(function (ret) {
                    if (ret.status || ret.exist) {
                        //判断是否第一次打开
                        // initShowGuide(function(){
                            initSystemInfo(function () {
                                if (callBack) {
                                    callBack();
                                }
                            });
                        // });
                    }else {
                        api.alert({
                            msg: "无法建立本地文件夹"
                        });
                    }
                });
            } else {
                api.alert({
                    msg: "数据库加载错误:" + JSON.stringify(err)
                });
            }
        });
    }
}


var callbackMethod;

function initShowGuide(callback) {
    //判断是否第一次打开
    var showGuide = $api.getStorage("isShowGuide");
    if (!showGuide) {
        callbackMethod = callback;
        openFrame('guide', 'html/guide/guide.html', {}, 0, 0,{bgColor : '#7f7f7f'});
    } else {
        callback();
    }
}

function runCallback() {
    if (callbackMethod) {
        callbackMethod();
    }
}

function initUser(callback) {
    var user = getUserInfo();
    if (isCleanUser == true) {
        user = null;
        setUserInfo(user);
    }
    if (isBlack(user)) {
        openNewWindow("login", "./html/login/chooseIdentify.html", {}, {
            slidBackEnabled: false
        });
        return;
    } else {
        callback();
    }
}

function initSystemInfo(callBack) {
    api.showProgress({
        style: 'default',
        animationType: 'fade',
        title: '系统初始化中...',
        modal: true
    });

    _initSystemInfo(function () {
        api.hideProgress();
        callBack();
    });
}

var map;

function _initSystemInfo(callback) {
    var obj = {
        imei: api.deviceId,
        plat: api.systemType,
        platVersion: api.systemVersion
    };
    api.hideProgress();
    var strDM = api.systemType; //系统
    map = api.require('bMap');
    if (strDM == 'ios') {
        map.initMapSDK(function (ret,err) {
            if (ret.status) {
                getLocation_mine(callback)
            }
        });
    } else if (strDM == 'android') {
        getLocation_mine(callback);
    }
}


function updateUserArea(areaObj){
    ajaxGet(updateUserUrl,areaObj,function(ret,err){

    },"index")
}


function getLocation_mine(callback) {
    map.getLocation({
        accuracy: '3km',
        autoStop: true
    }, function (ret, err) {
        var provinceName = "";
        var cityName = "";
        if (ret && ret.status) {
            var locationObj = {
                lon: ret.lon,
                lat: ret.lat,
            };
            var lon = ret.lon;
            var lat = ret.lat;
            setTimeout(function () {
                map.getNameFromCoords({
                    lon: lon,
                    lat: lat
                }, function (ret, err) {
                    if (ret && ret.status) {
                        var localObj = {
                            country:ret.country,
                            name: ret.city,
                            id: 0,
                            lat: lat,
                            lon: lon,
                            provinceName: ret.province,
                            address: ret.sematicDescription,
                            areaeName: ret.district
                        };
                        $api.setStorage('localObj', localObj);
                    } else {
                        // api.confirm({
                        //     title: '定位失败，请检查位置权限是否打开',
                        //     msg: '是否重试？',
                        //     buttons: ['确定', '取消']
                        // }, function (ret, err) {
                        //     if (ret.buttonIndex == 1) {
                        //         var resultList = api.hasPermission({
                        //             list:['location']
                        //         });
                        //         var list = [];
                        //         for(var i=0;i<resultList.length; i++){
                        //             if(!resultList[i].granted){
                        //                 list.push(resultList[i].name);
                        //             }
                        //         }
                        //         if(list.length>0) {
                        //             api.requestPermission({
                        //                 list: list,
                        //                 code: 1
                        //             }, function (ret, err) {
                        //                 if(!ret.list[0].granted){
                        //                     closeApp();
                        //                     return;
                        //                 }
                        //                 _initSystemInfo(callback);
                        //             })
                        //         }else{
                        //             _initSystemInfo(callback);
                        //         }
                        //     } else {
                        //         closeApp();
                        //     }
                        // });
                    }
                    callback();
                })
            }, 200);
        } else {

            api.confirm({
                title: '定位失败，请检查位置权限是否打开',
                msg: '是否重试？',
                buttons: ['确定', '取消']
            }, function (ret, err) {
                if (ret.buttonIndex == 1) {
                    var resultList = api.hasPermission({
                        list:['location']
                    });
                    var list = [];
                    for(var i=0;i<resultList.length; i++){
                        if(!resultList[i].granted){
                            list.push(resultList[i].name);
                        }
                    }
                    if(list.length>0) {
                        api.requestPermission({
                            list: list,
                            code: 1
                        }, function (ret, err) {
                            if(!ret.list[0].granted){
                                closeApp();
                                return;
                            }
                            _initSystemInfo(callback);
                        })
                    }else{
                        _initSystemInfo(callback);
                    }
                } else {
                    closeApp();
                }
            });
        }
    })
}
//======================系统初始化（结束）=============================





//======================下方tab栏目切换（开始）=============================

var prevPid; //上一个tab
var curPid; //当前tab
var frameArr = []; //打开的列表
//各个栏目


//点击切换tab标签
function openTab(type) {
    if (!type) {
        return;
    }

    // var userInfo = getUserInfo();
    // if(type != "home" && !userInfo.phone){
    // 		openNewWindow("login","user/login.html");
    // 		return;
    // }

    //切换样式
    var header = $api.dom('#header .active'); //对应头部的样式
    $api.removeCls(header, 'active');
    var thisHeader = $api.dom('#header .' + type);
    $api.addCls(thisHeader, 'active');
    var actTab = $api.dom('#nav .active'); //对应底部的样式
    $api.removeCls(actTab, 'active');
    var thisTab = $api.dom('#nav .' + type);
    // thisTab = thisTab.parentNode;
    $api.addCls(thisTab, 'active');

    prevPid = curPid;
    curPid = type;
    $api.setStorage("curPid",type);
    if (prevPid != curPid) {
        if (isOpened(type)) {
            //打开已经打开过的页面
            if (tabs[type].isGroup) {
                api.setFrameGroupAttr({
                    name: type,
                    hidden: false
                });
            } else {
                api.setFrameAttr({
                    name: type,
                    hidden: false
                });
            }
        } else {
            //打开新页面
            if (tabs[type].isGroup) {
                api.openFrameGroup(tabs[type].group, function (ret, err) {
                    tabs[type].groupCallBack(ret);
                });
            } else {
                api.openFrame(tabs[type].frame);
            }
            frameArr.push(type);
            $api.setStorage("frameArr",frameArr);

        }

        if (prevPid) {
            //关闭前一个页面
            if (tabs[prevPid].isGroup) {
                api.setFrameGroupAttr({
                    name: prevPid,
                    hidden: true
                });
            } else {
                api.setFrameAttr({
                    name: prevPid,
                    hidden: true
                });
            }

        }
    }

};


//是否打开过
function isOpened(frmName) {
    var i = 0,
        len = frameArr.length;
    for (i; i < len; i++) {
        if (frameArr[i] == frmName) {
            return true;
        }
    }
    return false;
}


//======================下方tab栏目切换（结束）=============================
