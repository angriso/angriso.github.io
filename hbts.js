function completionRequestV8(api,json){

	if (api.indexOf("security/login/sim-token") != -1) {
		var obj = JSON.parse(json);
		return {url:api,json:obj};
	}
    return {};
}
