const empolyees=[
    {id:1,name:"Alice",age:28,department:"HR",salary:50000},
    {id:2,name:"Bob",age:35,department:"IT",salary:75000},
    {id:3,name:"Charlie",age:40,department:"Finance",salary:90000},
    {id:4,name:"David",age:23,department:"IT",salary:60000},
    {id:5,name:"Eve",age:31,department:"Finance",salary:85000},
    {id:6,name:"Frank",age:26,department:"HR",salary:48000},
]
const emp1=[
    {name:"Alice",salary:50000},
    {name:"Bob",salary:75000},
    {name:"Charlie",salary:90000},
    {name:"David",salary:60000},
    {name:"Eve",salary:85000},
    {name:"Frank",salary:48000},
]
const a=empolyees.filter((item)=>item.age>=30)
const b=emp1.reduce((c,d)=>c+d.salary,0)
const c=emp1.reduce((a,b)=>a.salary>b.salary?a:b)
const d=empolyees.sort((a,b)=>a.age-b.age)
const e=empolyees.filter((item)=>item.department=="IT")

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);




