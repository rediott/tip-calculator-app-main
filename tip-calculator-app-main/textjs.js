console.log("aaaaab\nbaaaaa\ncasaaaa")
let str = "aska\nbaaaaa\ncasaaaa\nsasa"
let myArray = str.split("\n")
console.log(myArray)
console.log(myArray[0].split("").reverse().join(""))
console.log(" ")
let temp = ""
let removed = ""
let result = ""

for(let i = 0 ; i<myArray.length; i++){ 

    for(let j = 0 ; j <myArray[i].length; j++){
        temp = myArray[i]
        removed = myArray[i].charAt(j)
        console.log("removed char: "+ removed)

        temp = temp.slice(0, j) + temp.slice(j+1)

        console.log("Temp: "+temp)
        console.log("Temp reversed: " + temp.split("").reverse().join(""))
        if(temp == temp.split("").reverse().join("")){
            console.log("Need to be removed: " + removed)
            result += removed +"\n"
            break
            
        }
       
    }
    console.log("-----------------")
    
}
console.log(result)