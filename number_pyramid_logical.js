let n=6
for(let i=n;i>1;i--){
    let a=" "
    for (let k=0;k<n-i;k++) {
        a += "  "
    }
    for(let j=1;j<i;j++){
         a+=j+"   "
       
    }
    console.log(a)
}