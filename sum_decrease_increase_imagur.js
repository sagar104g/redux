var random_image= () => {
		store.dispatch(get_imagur);
	}
	
	var decrease_count= () => {
		console.log("start");
		var action={type: 'Decrement'};
		console.log("start");
		console.log(action);
		store.dispatch(action);
		console.log("start");
	}
	var increase_count = () => {
		var action={type: 'Increment'};
		store.dispatch(asyincrease);
	}
	var add_data = () => {
		var val1=document.getElementById("value1").value;
		var val2=document.getElementById("value2").value;
		var action={type:"add",a:val1,b:val2};
		store.dispatch(action);
	}