function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years =document.getElementById("years").value;
    if(principal>0 && years>0)
    {
    var intrest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerText="If you deposit "+principal+" rupees";
    document.getElementById("hello1").innerText="at an interest rate of  "+rate +"%";
    document.getElementById("hello2").innerText="You will receive an interest amount of "+intrest+" rupees";
    document.getElementById("hello3").innerText="by the year "+year;
    principal.focus();
    }
  
    
    if(years<1)
    	{
       		alert("Year cloumn should be filled");
       		years.focus();
    	}
    else
        {
    		alert("Amount should be a positive number");
    		principal.focus();
    	}
}
function updateRate()
{
    var rateval =document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}