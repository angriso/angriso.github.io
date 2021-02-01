function completionRequestV8(api,json){

	if (api.indexOf("security/login/sim-token") != -1) {
		var obj = {"requestId":"agw101261438460028238143","body":{"random":"82","timestamp":"20210126143846","requestTimestamp":null,"realName":"**凝","modifyUserFlag":false,"userLevel":"1"},"msgCd":"MCA01046","msgInfo":"检测到当前账户(188****1175)已实名为：**凝(4*****************4)，请确认是否为您本人"} 
		return {url:api,json:obj};
	}
    return {};
}
