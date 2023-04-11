function search(array,value){
    if(array.length===0){
        return false;
    }
    else if(array[0]===value){
        return true;
    }
    else{
        return search(array.slice(1),value)
    }
    
}

const array1=[1,4,6,8,9,3,5];

const value=+prompt("please enter a value to find in array ");

console.log(search(array1,value));




