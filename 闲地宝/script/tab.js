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
}


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
