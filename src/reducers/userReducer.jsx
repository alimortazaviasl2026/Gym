
const userReducer = (user , action) => {

   
   
  switch(action.type){
   case  "USER_EMAIL": 
        return {...user , email : action.payLoad  }
    case "USER_PASSWORD" : 
        return {...user , password : action.payLoad}  
        
      default : return user  
  }
}

export default userReducer