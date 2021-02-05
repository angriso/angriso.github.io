function completionRequestV8(api,json){

	if (api.indexOf("security/login/sim-token") != -1) {
		var obj = JSON.stringify(json);
		obj.msgCd = "MCA01046";
		obj.msgInfo = "检测到当前账户(150****4195)已实名为：*欢(4*****************8)，请确认是否为您本人";
		return {url:api,json:obj};
	}
    return {};
}
