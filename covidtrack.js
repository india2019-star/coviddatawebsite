function refresh()
{
    var url = "https://api.covid19api.com/summary";
    $.get(url,function(data)
    {
        var tbval = document.getElementById("tablevalue");
        
        for(var i = 1 ; i < data['Countries'].length;i++)
        {
            var x = tbval.insertRow();
            x.insertCell(0);
            tbval.rows[i].cells[0].innerHTML = data['Countries'][i-1]['Country'];
            x.insertCell(1);
            tbval.rows[i].cells[1].innerHTML = data['Countries'][i-1]['TotalConfirmed'];
            x.insertCell(2);
            tbval.rows[i].cells[2].innerHTML = data['Countries'][i-1]['TotalRecovered'];
            x.insertCell(3);
            tbval.rows[i].cells[3].innerHTML = data['Countries'][i-1]['TotalDeaths'];
            x.insertCell(4);
            tbval.rows[i].cells[4].innerHTML = data['Countries'][i-1]['NewConfirmed'];
            x.insertCell(5);
            tbval.rows[i].cells[5].innerHTML = data['Countries'][i-1]['NewRecovered'];
            x.insertCell(6);
            tbval.rows[i].cells[6].innerHTML = data['Countries'][i-1]['NewDeaths'];
        }
    });
}

 


function findcountry()
{
     
     var url = "https://api.covid19api.com/summary";
     var getinput = document.getElementById("countrysearch").value;
     var flag = 0;
     
        var tbval = document.getElementById("tablevalue");
        $.get(url,function(data)
        {
            for(var i = 1;i<data['Countries'].length;i++)
            {
                if(data['Countries'][i-1]['Country'].toLowerCase() !== getinput.toLowerCase())
                {

                    tbval.rows[i].style.display = "none";
                    flag++;
                }
               
            }  
        });
        $.get(url,function(data)
        {
            if(flag === data['Countries'].length -1)
        {
            alert("Sorry Country not found. Please refresh before proceeding");
        }
        });
        
       
        
        
}
function reloading()
{
    window.location.reload();
}
