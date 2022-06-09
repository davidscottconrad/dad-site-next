// import Nav from '../components/nav'
// import Image from 'next/image'
// import drConrad from '../public/internetprofilepic.jpg'
// function add(n) {
//     let total = 0;
//     for(let i = 1; i<= n; i++ ){
//         total += i
//         }
//         return total;
// }

// const anagram = (arr1, arr2) => {
//     let obj1 = {}
//     let obj2 = {}
    

//     for(let i = 0; i<arr1.length; i++){
//         if(obj1[arr1[i]]){
//             obj1[arr1[i]] = 1 + obj1[arr1[i]]
//         }else{
//             obj1[arr1[i]] = 1
//             console.log(arr1[i])
//         }
//     }

//     for(let i = 0; i<arr2.length; i++){
//         if(obj2[arr2[i]]){
//             obj2[arr2[i]] = 1 + obj2[arr2[i]]
//         }else{
//             obj2[arr2[i]] = 1
//         }
//     }
//     console.log(obj1, obj2)

//     for(let key in obj1){
//         if(obj1[key] == obj2[key]){
//             console.log(key, obj1[key],obj2[key])
//             continue
//         }else{
//             return 'not anagram'
//         }
//     }
//     return 'match'
// }

// function add2(arr1, arr2) {
//     let obj1 = {};
//     let obj2 = {
//         9: 1 
//     }
//      for (let i = 0; i < arr1.length; i++) {
         
//         obj1[arr1[i]] = i;
//         //console.log(obj1)
//     }
    
//         console.log(1 in obj2)
    
   
//     return null
// }

// const checker = (arr1, arr2, n) => {
//     let obj1 = {}
//     let obj2 = {}
//     for(let i = 0; i < n; i++){
//         if(arr1[i] in obj1){
//             obj1[arr1[i]] = obj1[arr1[i]] + 1
//         } else {
//             obj1[arr1[i]] = 1
//         }
//     }

//     for(let i = 0; i < n; i++){
//         if(arr2[i] in obj2){
//             obj2[arr2[i]] = obj2[arr2[i]] + 1
//         } else {
//             obj2[arr2[i]] = 1
//         }
//     }

//     console.log(obj1)
//     console.log(obj2)

//     for(let key in obj1){
//         let keysq = key * key
//         //if(obj1[key] != 0)
//         if(!(keysq in obj2)){return 'no match, failed'}
//         console.log(obj1[key], obj2[keysq])
//         //console.log(obj1[key],obj2[key])
//         if(obj1[key] === obj2[keysq]){
//            continue
//         }else{return 'no match'}
//     }
//     return 'match'

//     //console.log(obj1)
//     //console.log(obj2)
    
    
    
// }



// const twoSum = (nums, target) => {
//     const map = {};
  
//     for (let i = 0; i < nums.length; i++) {
      
  
//       map[nums[i]] = i;
//       console.log(map)
//     }
    
  
//     return null;
//   };

// const sumZero = (arr) => {
//     let obj = {}
//     for(let i = 0; i<arr.length;i++){

//     }
//     for(let i=0; i<arr.length; i++){
//         let j = arr.length - 1;
//         while(i<j){
//             if(arr[i] + arr[j] == 0){
//                 return [arr[i],arr[j]]
//             }
//             if(arr[i] + arr[j] < 0){
//                 i++
//             }
//             if(arr[i] + arr[j] > 0){
//                 j--
//             }

//         }
//         return [undefined,undefined]
//     }
// }

// const twoPointer = (arr,i,j) => {
    
//         let i = 0
//         let j = 1
//         let count = 0
//         if(arr.length == 0){return 0}
//         for(let b = 0; b < arr.length-1; b++){
//             //console.log('///////////////////////')
//             //console.log('i',i,'j',j)
//             //console.log('arr[i]',arr[i],'arr[j]',arr[j])
//             if(arr[i]<arr[j]){
                
//                 i = j
                
//                 count++
//                 //console.log('inside if')
//             }
            
//                 j++
           
//             //t++
//             //console.log('vount',count)
//             //console.log('i',i,'j',j)
//             //console.log('t',b)
//         }
//         return count+1
//       // add whatever parameters you deem necessary - good luck!
    
// }

// var time1 = performance.now();
// //addUpTo(1000000000);
// var time2 = performance.now();

// let arr1 = [1,2,3,2,5]
// let arr2 = [9,1,4,4,25]
// let arr3 = 'anagram'
// let arr4 = 'nagaram'
// let arr5 = 'zza'
// let arr6 = 'aaz'
// let arr7 = [-5,-2,-1,0,1,2,3]
// let arr8 = [1,2,3,4,4,4,7,7,12,12,13]



// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

// export default function aboutPage () {
//     return(
//         <div>
//            <p></p>
//            <p>{}</p> 
//            {twoPointer(arr8)
//            }
//         </div>
//     )
// }