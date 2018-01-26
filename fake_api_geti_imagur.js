var fakeapi={
		increasecount: (currentcount,cb) => {
				setTimeout(() => cb(currentcount+1),1000)
		}
	}
	var asyincrease= (state,dispatch) => {
		dispatch({type:"Loading_increment"});
		fakeapi.increasecount(state.count.result,() => dispatch({type:"Increment"}));
	}
	var get_imagur= (state,dispatch) => {
		var url="https://api.imgur.com/3/gallery/random/random/1";
		console.log("get image url");
		$.getJSON(url).done( (data) => console.log(data));
	}