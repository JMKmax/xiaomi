
function pay(payType,params,url,callback){
//	alert()
	if(payType == 1){
		aliPay(params,url,callback);
	} else if (payType == 2) {
		weixinPay(params,url,callback);
	}
}


function weixinPay(params,url,callback){
	showLoadingGif();
	ajaxGet(url,params,function(ret,err){
		closeLoadingGif();
//		alert(JSON.stringify(ret) + 'ret');
//		alert(JSON.stringify(err) + 'err');
		if(ret){
			var wxPay = api.require('wxPay');
			var apiKey = ret.appid;
			var wxOrderId = ret.prepayid;//1
			var mchId = ret.partnerid;//1
			var nonce_str = ret.noncestr;//1
			var sign = ret.sign;//1
			var timeStamp = ret.timestamp;
			var wxPackage = ret.package;
			
			wxPay.payOrder({
                apiKey:apiKey,
				orderId: wxOrderId,
				mchId: mchId,
				nonceStr: nonce_str,
				timeStamp: timeStamp,
				package : wxPackage,
				sign: sign
			}, function(ret, err){
				showLoadingGif();
				if(ret.status == true){
					//支付成功
//					api.toast({
//				    	msg : '支付成功！'
//			        });
					callback(ret);
				}else{
//					api.toast({
//				    	msg : '支付失败！请稍候再试！'
//			        });
					callback(ret);
				}
			});
		}else{
			showLoadingGif();
			api.toast({
	        	msg : ret.errorMessage
            });
		}
	});
}


function aliPay(params,url,callback){
	showLoadingGif();
	ajaxGet(url,params,function(ret,err){
		closeLoadingGif();
		if(ret){
			var aliPayPlus = api.require('aliPayPlus');
            var orderInfo = ret.data.payParam;
			aliPayPlus.payOrder({
				orderInfo : orderInfo
			},function(ret,err) {
				if(ret.code == 9000){
					callback(ret);
				}else{
					callback(ret);
				}
			});
		} else {
            // api.toast({
	         // 	msg : ret.errorMessage
            // });
		}
	});
}