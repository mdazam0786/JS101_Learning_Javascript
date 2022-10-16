// Given stored username and password and input username and password, print if the user can log in or not.

var s_username="Md Naiyer"; s_password=1234;
var i_username="Md Naiyer"; i_password=1234;
if(i_username==s_username)
{
    if(i_password==s_password)
    {
        console.log("Login success");
    }
    else
    {
        console.log("Invalid password");
    }
}
else
{
    console.log("Wrong username");
}