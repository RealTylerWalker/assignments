
// function Car(make, model, year, honkSound){
//   this.make = make
//   this.model = model
//   this.year = year
//   this.honkSound = honkSound
//   this.honk = function(){
//     console.log(this.honkSound)
//   }
// }


// var jeep = new Car("Jeep", "Cherokee", 1995, "farrrrrt")
// var mazda = new Car("Mazda", "3", 2012, "tooot" )

// jeep.honk()
// mazda.honk()

let employees = [];
function Employee(name, salary, jobTitle){
  this.name = name;
  this.salary = salary;
  this.jobTitle = jobTitle
  this.status = "Full Time"
  this.printEmployeeForm = function(){
    console.log('Name: ', this.name)
    console.log('Salary: ', this.salary)
    console.log('Title: ', this.jobTitle)
    console.log('Status: ', this.status)
  }
}
var fred = new Employee("Fred O'Hoolahan", 70000, "Project Manager")

var patches = new Employee("Patches O'Hoolahan", 1000000, "Dodgeball Pro")

var turd = new Employee("Turd Ferguson", 25000, "Burt Reynolds Impersonator")
turd.status = "Contract";

fred.printEmployeeForm()
patches.printEmployeeForm()
turd.printEmployeeForm()

employees.push(fred, patches, turd);
console.log(employees);