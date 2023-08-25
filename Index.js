fetch("./jobs.json")
    .then(response => response.json())
    .then(json =>
    {
        console.log(json.post);
        var output ='';
        for(var i in json.post)
        {
            output += `
                <tr>
                    <td>${json.post[i].Job}</td>
                    <td>${json.post[i].Comapany}</td>
                    <td>${json.post[i].Experience}</td>
                    <td>${json.post[i].Date}</td>
                    <td>${json.post[i].Location}</td>
                    <td>${json.post[i].Salary}</td>
                    <td> <a class="btn btn-info" href="#"> View </a></td>
                    <td><a class="btn btn-info" href="#">Apply now </a> </td>
                </tr>
         `
            document.getElementById("data").innerHTML = output;
        }
    })