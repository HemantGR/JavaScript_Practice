const isLoggedIn = true;
const hasPermissions = false;
const isAdmin = true;

if(isLoggedIn === true && hasPermissions === true || isAdmin === true){
    console.log("Access Granted");
}

else{
    console.log("Access Denied");
}