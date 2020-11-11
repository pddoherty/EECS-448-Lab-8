var num = 1;

function next()
{
    document.getElementById(num).style.visibility = "hidden";
    if((num+1) > 5)
    {
        num = 1;
    }
    else 
    {
        num++;
    }
    document.getElementById(num).style.visibility = "visible";
}

function back()
{
    document.getElementById(num).style.visibility = "hidden";
    if((num-1) < 1)
    {
        num = 5;
    }
    else 
    {
        num--;
    }
    document.getElementById(num).style.visibility = "visible";
}