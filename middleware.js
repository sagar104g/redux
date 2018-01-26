		var looger= (store) => 
        (next) =>
    	(action) =>
    			next(action);
    		
		var looger1= (store) =>
    	(next) =>
        (action) =>
    			next(action);

    var looger2= (store) =>
    	(next)=>
    	(action) => {
    			if(typeof action==='function'){
    				action(store.getState(),store.dispatch);
    			}else{
    				next(action);
    			}
    			};