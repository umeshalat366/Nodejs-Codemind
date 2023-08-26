class Employee{
 constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.emp_dept=emp_dept;
    this.emp_salary=emp_salary;
    this.emp_company=emp_company;
 }
}
const employees=[
new Employee(22,"Anil","IT",50000,"TCS"),
new Employee(33,"radha ","HR",74000,"Wipro"),
new Employee(55,"rushi","Finance",47000,"TCS"),
new Employee(66,"sonali","Finance",45000,"Infosys"),
new Employee(77,"monika","IT",40000,"Wipro"),
new Employee(88,"viny","IT",75000,"TCS"),
new Employee(99,"mahi","HR",85000,"Infosys")
];
console.log(`-----------------------------------`);
const tcsEmployees = employees.filter(employee => employee.emp_company === "TCS");

tcsEmployees.forEach(employee => {
  console.log(`Employee Name: ${employee.emp_name}, Company Name: ${employee.emp_company}`);
  
});
console.log(`-----------------------------------`);
  const financeEmployees=employees.filter(employee=>employee.emp_dept==="Finance");

  financeEmployees.forEach(employee => {
   console.log(`Department Name: ${employee.emp_dept},Employee Name:${employee.emp_name}`);
  });


  employees.forEach(employee => {
   if (employee.emp_name.startsWith("R")) {
     console.log("Employee Details:");
     console.log(`ID: ${employee.emp_id}`);
     console.log(`Name: ${employee.emp_name}`);
     console.log(`Department: ${employee.emp_dept}`);
     console.log(`Salary: ${employee.emp_salary}`);
     console.log(`Company: ${employee.emp_company}`);

   }
});
console.log(`---------------------------------`);
employees.forEach(employee => {
   if (employee.emp_salary > 75000) {
     console.log(`Name: ${employee.emp_name}, Company: ${employee.emp_company}, Salary: ${employee.emp_salary}`);
   }
});

const filteredEmployees = employees.filter(employee => {
   return employee.emp_salary >= 50000 && employee.emp_dept === "IT";
 });
 
 filteredEmployees.forEach(employee => {
   console.log("Employee ID:", employee.emp_id);
   console.log("Employee Name:", employee.emp_name);
   console.log("Employee Department:", employee.emp_dept);
   console.log("Employee Salary:", employee.emp_salary);
   console.log("Employee Company:", employee.emp_company);
   console.log("--------------------");
 });

 const InfosysEmployees=employees.filter(employee=>employee.emp_company==="Infosys");

 InfosysEmployees.forEach(employee => {
   console.log("Employee ID:", employee.emp_id);
   console.log("Employee Name:", employee.emp_name);
   console.log("Employee Department:", employee.emp_dept);
   console.log("Employee Salary:", employee.emp_salary);
   console.log("Employee Company:", employee.emp_company);
   console.log("--------------------");
 });
