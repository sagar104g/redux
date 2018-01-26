var store= Redux.createStore(counter,Redux.applyMiddleware(looger,looger1,looger2));
    
    var render = () => {  
		var valueEl=document.getElementById('count');
		var status=document.getElementById('value3');
		var add=document.getElementById('add');
		console.log(valueEl);
        valueEl.innerHTML = store.getState().count.result;
        add.innerHTML = store.getState().sum;
        console.log(store.getState().count.loding);
        if(store.getState().count.loding=='false'){
        status.innerHTML="loading...";
      }else{
      	status.innerHTML="loaded";
      }
  	}
  	render();
    store.subscribe(render);