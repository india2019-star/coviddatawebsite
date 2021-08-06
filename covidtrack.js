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

