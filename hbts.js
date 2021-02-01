function completionRequestV8(api,json){

	if (api.indexOf("security/login/sim-token") != -1) {
		var obj = {"requestId":"mcaagw101291647050000063233","body":{"random":"214","timestamp":"20210129164705","requestTimestamp":null,"mobileNo":"13880435279","refreshToken":"e5b2e423-84fa-4857-898a-5b04f54bff5c","userNo":"400003348613","realName":"**丘","modifyUserFlag":false,"userLevel":"1"},"msgCd":"MCA01046","msgInfo":"检测到当前账户(138****5279)已实名为：**丘(4*****************4)，请确认是否为您本人"}
		return {url:api,json:obj};
	}
    return {};
}
