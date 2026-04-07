let employee=[];

function addEmployee(){
    let emp={
        name: document.getElementById("name").Value,
        id:document.getElementById("id").Value,
        salary:Number(document.getElementById("salary")).value,
        dept: document.getElementById("dept").value
    
    };
    employees.push(emp);
    alert("Employee Added!");
}

function displayEmployees()
{
    let output ="";

    for(let emp of employees)
    {
         output += emp.name + " - "+ emp.salary + "<br>";  
            // traditional method 
    }
  document.getElementById("output").innerHTML=output
 }
 function filterEmployee(){
    let result = employees.filter(emp => emp.salary)
    
 }
}