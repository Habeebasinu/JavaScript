let arr=[1,2,3,4,5,6]
let max=arr[0]
for(i=0;i<arr.length;i++){
    if(arr[i]>max){
       max=arr[i]

    }
    
    }
    console.log("largest element:",max)


// ****************************
let min=arr[0]
for(i=0;i<arr.length;i++){
    if(arr[i]<min){
       min=arr[i]

    }
    
    }
    console.log("smallest element:",min)
    // ****************************
let b=[]
console.log("even numbers:")
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
       
        
        console.log(arr[i])
    }
}

// ****************************
let a=[]
console.log("odd numbers:")
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        console.log(arr[i])
        
    }
   
}

// ****************************
let sum=0
for(let i=0;i<arr.length;i++){
      sum +=arr[i]
    }
    console.log("sum of array:",sum)
    // .....................
    let eve=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            eve+=arr[i]
            
        }
       
    }
    console.log("sum of even numbers:",eve)

// ******************************************************
let odd=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            odd+=arr[i]
            
        }
       
    }
    console.log("sum of odd numbers:",odd)
    // ********************************
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            count++
        }
        
    }
    console.log("count of even numbers:",count)
    // ***************************
    let count1=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            count1++
        }
        
    }
    console.log("count of odd numbers:",count1)
     