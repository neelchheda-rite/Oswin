export default function authHeader(){
    const user = window.sessionStorage.getItem("Name")
    // The "Name" will change to the variable name of the token that you set in the session storage.

    if(user && user.token)
    {
        return { "x-auth-token":user.token};
    }
    else{
        return{};   
    }
}