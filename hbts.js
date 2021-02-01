function completionRequestV8(api,json){

	if (api.indexOf("security/login/sim-token") != -1) {
		return JSON.parse(json);
	}
		
    return api+'ddd';
}
