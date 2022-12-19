const parent ={
    firstName:"Ankita",
    lastName:"Mishra",
    fullName(){
        return(this.firstName+" "+this.lastName)
    }
}
const child={
    __proto__:parent
}
console.log(child.fullName());


// arr1=[1,2,3,4]

arr=[1,2,3,4,5,6];
arr1=[7,8,5,1,2,85];
arr2=[84,8,9,5,7,6];
const arraySum ={
    addAll:function(arr){
        let sum=0;
        for(let i=0;i<arr,length;i++){
            sum=sum+arr[i];
        }
        console.log(sum);
    }
} 

Array.__proto__=arraySum;
Array.addAll(arr);
Array.addAll(arr1);
Array.addAll(arr2);



function Person() {
    this.name = 'CName'
    this.age=31
}

Person.prototype.name = 'pName';
Person.prototype.age = 23
Person.prototype.designation ='pDesignation'

const person1 = new Person();

console.log(person1.name); 
console.log(person1.age); 
console.log(person1.designation); 


function allKeys(obj) {
    if (!isObject(obj)) 
    return [];
    var keys = [];
    for (var key in obj)
     keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Student1")));


