import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import { addRequestMeta } from "next/dist/server/request-meta";

function add(n) {
    let total = 0;
    for(let i = 1; i<= n; i++ ){
        total += i
        }
        return total;
}

const anagram = (arr1, arr2) => {
    let obj1 = {}
    let obj2 = {}
    

    for(let i = 0; i<arr1.length; i++){
        if(obj1[arr1[i]]){
            obj1[arr1[i]] = 1 + obj1[arr1[i]]
        }else{
            obj1[arr1[i]] = 1
            console.log(arr1[i])
        }
    }

    for(let i = 0; i<arr2.length; i++){
        if(obj2[arr2[i]]){
            obj2[arr2[i]] = 1 + obj2[arr2[i]]
        }else{
            obj2[arr2[i]] = 1
        }
    }
    console.log(obj1, obj2)

    for(let key in obj1){
        if(obj1[key] == obj2[key]){
            console.log(key, obj1[key],obj2[key])
            continue
        }else{
            return 'not anagram'
        }
    }
    return 'match'
}

function add2(arr1, arr2) {
    let obj1 = {};
    let obj2 = {
        9: 1 
    }
     for (let i = 0; i < arr1.length; i++) {
         
        obj1[arr1[i]] = i;
        //console.log(obj1)
    }
    
        console.log(1 in obj2)
    
   
    return null
}

const checker = (arr1, arr2, n) => {
    let obj1 = {}
    let obj2 = {}
    for(let i = 0; i < n; i++){
        if(arr1[i] in obj1){
            obj1[arr1[i]] = obj1[arr1[i]] + 1
        } else {
            obj1[arr1[i]] = 1
        }
    }

    for(let i = 0; i < n; i++){
        if(arr2[i] in obj2){
            obj2[arr2[i]] = obj2[arr2[i]] + 1
        } else {
            obj2[arr2[i]] = 1
        }
    }

    console.log(obj1)
    console.log(obj2)

    for(let key in obj1){
        let keysq = key * key
        //if(obj1[key] != 0)
        if(!(keysq in obj2)){return 'no match, failed'}
        console.log(obj1[key], obj2[keysq])
        //console.log(obj1[key],obj2[key])
        if(obj1[key] === obj2[keysq]){
           continue
        }else{return 'no match'}
    }
    return 'match'

    //console.log(obj1)
    //console.log(obj2)
    
    
    
}



const twoSum = (nums, target) => {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      
  
      map[nums[i]] = i;
      console.log(map)
    }
    
  
    return null;
  };

const sumZero = (arr) => {
    let obj = {}
    for(let i = 0; i<arr.length;i++){

    }
    for(let i=0; i<arr.length; i++){
        let j = arr.length - 1;
        while(i<j){
            if(arr[i] + arr[j] == 0){
                return [arr[i],arr[j]]
            }
            if(arr[i] + arr[j] < 0){
                i++
            }
            if(arr[i] + arr[j] > 0){
                j--
            }

        }
        return [undefined,undefined]
    }
}

const twoPointer = (arr,i,j) => {
    
        // let i = 0
        // let j = 1
        let count = 0
        if(arr.length == 0){return 0}
        for(let b = 0; b < arr.length-1; b++){
            //console.log('///////////////////////')
            //console.log('i',i,'j',j)
            //console.log('arr[i]',arr[i],'arr[j]',arr[j])
            if(arr[i]<arr[j]){
                
                i = j
                
                count++
                //console.log('inside if')
            }
            
                j++
           
            //t++
            //console.log('vount',count)
            //console.log('i',i,'j',j)
            //console.log('t',b)
        }
        return count+1
      // add whatever parameters you deem necessary - good luck!
    
}

const slidingWindow = (arr, num) => {
    

}

const firstRecursion = () => {

}

var time1 = performance.now();
//addUpTo(1000000000);
var time2 = performance.now();


let arr3 = 'anagram'
let arr4 = 'nagaram'
let arr5 = 'zza'
let arr6 = 'aaz'
let arr7 = [-5,-2,-1,0,1,2,3]
let arr8 = [1,2,3,4,5]
let arr9 = [[1,2,5],[2,8,1,5]]
function power(base, exponent, tracker = 1){
    
    if(exponent === 0) return 1 * tracker
    
    tracker = tracker * base
    return power(base,exponent-1, tracker)
}

function flatten(arr){
    let arr1 = arr[0]
    let arr2 = arr[1]
    let arrL = arr1.length+arr2.length
    let x = 0
    let i = 0
    console.log(arrL)
    
    function helper(arr1, arr2, arrL, x,i){
        if(i == 6) return arr1
        //console.log(arrL == arr2.length + arr3.length)
        //console.log(arr1.length, arr2.length, arr3.length)
        x = arr2[i]
        i++
        //console.log(arr1)
        arr1.push(x)
        helper(arr1, arr2, arrL, x, i)
    }
    
    return helper(arr1, arr2, arrL, x, i)
  // add whatever parameters you deem necessary - good luck!
}

function binary (arr, val){
    let i = 0;
    let j = arr.length - 1
    let k = Math.floor(arr.length/2)
    
    while(arr[k] !== val && start <= arr[k]){
        if(arr[k] == val) return k
        
        if(arr[k] < val){
          
            j = k - 1
            
        }else{
            i = k +1
        }
        k = Math.floor((j + i) / 2) 
        if(arr[j] == undefined || arr[i] == undefined) return -1
    }
    
    
    return k

}

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function swap (arr, i , j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

function quickSortHelper(arr, start = 0, end = arr.length - 1){

    
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length-1){ // time complexity Best nlogn worst n^2 worst is almsot sorted array
    if(left < right){
    let pivotIndex = quickSortHelper(arr, left, right) //3
    quickSort(arr,left,pivotIndex-1)
    quickSort(arr,pivotIndex+1,right)
    }
    return arr
}

function fib(n){
    // add whatever parameters you deem necessary - good luck!  
    let arr = [1,1]
    let count = 0
    let fibNum = 0
   
    function helper(n,count,arr, fibNum){
        //console.log(arr[count+1])
        //console.log(fibNum)
        //console.log(arr.length)
        if(arr.length === n) return fibNum
        fibNum = arr[count] + arr[count+1]
        console.log(fibNum)
        arr.push(fibNum)
        console.log(arr) 
        count++
        //console.log(arr[count])
        return helper(n,count,arr,fibNum)
    }
    
   
        
        return helper(arr1, arr2, arr3, x)
      // add whatever parameters you deem necessary - good luck!
    }
    
  
  let string = 'hello'


  class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
  }

  let firstStudent = new Student('colt', 'steele', 30)
  let secondStudent = new Student('david', 'conrad', 27)


console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)
let arr1 = [1,2,3,2,5]
let arr2 = [9,1,4,4,25]
let arr20 = [6,7]
export default function aboutPage () {
    return(
        <div>
           <p></p>
           <p>{}</p> 
           {console.log(quickSort([4,8,2,1,5,7,6,3]))
           
           }
        </div>
    )
}