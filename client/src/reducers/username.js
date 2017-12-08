const username = (state = "", action) =>{
    switch(action.type){
    case 'SAVE_USERNAME' : 
	return action.username;
    default : return state;
    }
}

export default username;
    
