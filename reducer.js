function counter(currentState,action){
		console.log("end");
		var Default_State= {count:{result:0,loding:false },sum:0};
		console.log("end");
		console.log(Default_State);
		var Next_State= Object.assign({},currentState);
		//console.log(currentState);
		console.log(Next_State);
		Next_State={
			count:count_it(Next_State.count,action),
			sum:sum_it(Next_State.sum,action)
		}
		console.log("end");
		
		console.log(Next_State);
		return Next_State;
	}