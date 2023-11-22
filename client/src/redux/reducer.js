const initialState = {
    allGames: []
}

const rootReducer = (state = initialState, {type, payload}) =>{
    switch(type){
           
        
        case 'FILTER':
            let copy2 = [...state.allGames];
            
            let filterGender = copy2.filter((character) => {
                return character.gender === payload
            });
            return {
                ...state,
                myFavourates: filterGender
            }

       
       

        default: 
            return {...state}; // returns a copy of the received state
    }
}

export default rootReducer;