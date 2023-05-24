 
 //For Login
 Axios.post("url",
			{
              email: email,
              password: password
            }).then((response) => 
			{
              window.sessionStorage.setItem('Name',response.data.data.Name);
            }); 
			

//For Other API Calls after Login with AccessToken
Axios.post("url",
			{
              headers : authHeader()
			  //authHeader is the service that we have created in the Oswin Project. Path = "src/services/auth-header.js"
            }).then((response) => 
			{
              window.sessionStorage.setItem('Name',response.data.data.Name);
            }); 