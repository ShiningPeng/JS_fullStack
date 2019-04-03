const people = [
  {age:46,naem:'roger'},
  {age:99,name:'vinny'},
  {age:26,naem:'don'},
  {age:74,name:'brendan'}
];
var ordePeople = function(people){
  return people.sort((a,b)=>{
    return  b.age -a.age
  });
}
console.log(ordePeople(people));