function sum_it(currentState,action){
      	var Default_State=0;
      	console.log("sum="+currentState);
      	if(currentState===undefined){
			 return Default_State;
		}
      	if(action.type=="add"){
      		return parseInt(action.a)+parseInt(action.b);
      	}
      	return currentState;
      }
      var count_it= (currentState,action)=>{
      	var Default_State={result:0,loding:'false'};
   		if(currentState===undefined){
			 return Default_State;
		}
      	if(action.type=="Decrement"){
      		currentState.result=currentState.result-1;
      		currentState.loding='true';
      		return currentState;
      	}
      	if(action.type=="Increment"){
      		currentState.result=currentState.result+1;
      		currentState.loding='true';
      		return currentState;
      	}
      	if(action.type=="Loading_increment"){
      		currentState.loding='false';
      		return currentState
      	}
      	return currentState;
      }