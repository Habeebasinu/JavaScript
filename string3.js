
 const myfunction=(str1)=>{
    console.log(str1.trim(" ").toLowerCase().replaceAll(" ","-").concat('!!!'));
}
 myfunction(" Hello world JS IS FUN ")


 

 const myfunction2=(str2)=>{
    console.log(str2.replace(/[aeiou]/g,"").toUpperCase().concat("!!!"))

 }
 myfunction2("JavaScript is amazing")