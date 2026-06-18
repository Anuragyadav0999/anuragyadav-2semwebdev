let employees  = [];
function addEmployee(){
    let name = document.getElementById("name").value;
    let department = document.getElementById("department").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let empid=document.getElementById("empid").value;
    if(name=="" || department=="" || isNaN(salary) || empid==""){
        alert("Please fill all fields correctly.");
        return;
    }
    let employee = {
        name: name,
        department: department,
        salary: salary,
        empid: empid
    };
    employees.push(employee);
    alert("Employee added successfully!");
    document.getElementById("name").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}
function displayEmployees(){ 
    let output="<h3>Employee List:</h3>"; 
    employees.forEach(emp => {
        output += `Name: ${emp.name}| ID: ${emp.empid}| Salary: ${emp.salary}| Department: ${emp.department}<br>`;
    });
    document.getElementById("output").innerHTML=output;

}  
function filterSalary(){
    let filtered = employees.filter(emp => emp.salary > 50000);
    let output="<h3>Employees with Salary > 50000:</h3>";
    filtered.forEach(emp => {
        output += `Name: ${emp.name}|Salary: ${emp.salary}<br>`;
    });
    document.getElementById("output").innerHTML=output;
}
function totalSalary(){
    let total=employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = `<h3>Total Salary Expenditure: ${total}</h3>`;
}
function averageSalary(){
    if(employees.length === 0){
        document.getElementById("output").innerHTML="<h3>No employees to calculate average salary.</h3>";
        return;
    }
    let total=employees.reduce((sum, emp) => sum + emp.salary, 0);
    let average=total/employees.length;
    document.getElementById("output").innerHTML = `<h3>Average Salary: ${average.toFixed(2)}</h3>`;
}
function countByDepartment(){
    let deptName=prompt("Enter department name:");
    let count=employees.filter(emp => emp.department.toLowerCase() === deptName.toLowerCase()).length;
    document.getElementById("output").innerHTML = `<h3>Number of Employees in ${deptName}: ${count}</h3>`;
}