var pass;
var x = true;
function validate()
{
    if(x)
    {
        console.log(password);
        if(document.getElementById("password").value.length >= 8)
        {
            document.getElementById("pass").innerHTML = "Confirm your password";
            document.getElementById("validated").innerHTML = "validate";
            x = false;
            password = document.getElementById("password").value;
        }
        else 
        {
            alert("Invalid password");
        }
    }
    else 
    {
        if(password == document.getElementById("password").value)
        {
            document.getElementById("pass").innerHTML = "Your password is validated";
        }
        else 
        {
            alert("Your password does not match");
        }
    }
    document.getElementById("password").value = "";
}