// console.log('Hello')

// functions can take other functions as input


// function sum (index1 , index2 ) {
//     return index1 + index2;
// }
// function  multiply (index1 , index2 ) {
//     return index1 * index2;
// }
// function subtract (index1 , index2 ) {
//     return index1 - index2;
// }
// function divide (index1 , index2 ) {
//     return index1 / index2;
// }

// function doArithmetic(firstEl , secondEl , ArithmenticFn) {
//     return ArithmenticFn(firstEl , secondEl)
// }

// var answer = doArithmetic(3,1,sum)
// console.log(answer);


// function doArithmetic2(firstEl , secondEl , whatTodo) {
//     if(whatTodo === 'sum' ){
//         var answer = sum(firstEl , secondEl)
//         return answer;
//     }
//     if(whatTodo === 'multiply') {
//         var answer = multiply(firstEl , secondEl)
//         return answer;
//     }
// }


// var result = doArithmetic2(2,3 , 'multiply')
// console.log(result);



// function createPattern(numofRows) {
//     for(let i = 0; i<numofRows; i++) {
//         var star = ''
//         for(var j = 0; j<i+1; j++) {
//             star += '*'
//         }
//         console.log(star);
//         ;
//     }
// }
// createPattern(3)




// function OpStarryPattern(n){
//     for(var i = 0; i<n; i++) {
//         var star = ""
//         var num = star;
//         num += i
//         for(var j = 0; j<i+1; j++) {
//             star += '*'
//         }
//         console.log(num ,'->',star );
        
//     }

// }


// const ans = OpStarryPattern(10)
// console.log(ans);

// 

// function pyramidStar(n) { 

// }








// Block Star Question 
/**
 *        **********
 *        *        *
 *        *        *
 *        *        *
 *        *        *
 *        *        *
 *        *        *
 *        **********
 *         
 */


// function verticalStar(num) {
//     var str = ""
//     str = str + "*"
//     for (var i = 0; i < num-2; i++) {
//         str = str + " "
//     }
//     str = str + "*"
//     console.log(str)
// }



// function horizontalStar(num) {
//     var str = ""
//     for (var i = 0; i < num; i++) {
//         str = str + "*"
//     }
//     console.log(str)
// }


// function finalBlock (num) {
//     horizontalStar(num)

//     for (let i = 0; i < num-2; i++) {
//         verticalStar(num)
//     }
    
//     horizontalStar(num)
// }

// finalBlock(10)



// Pyramid Star Question
/**
 *                     *
 *                    ***
 *                   *****
 *                  *******
 */

// function pyramid(n) {
    // for(let i = 0; i<n; i++){
    //     let str = ' '.repeat(n-i)
    //     let str2 = '*'.repeat(2*i+1)

    //     console.log(str+str2+str)
    // }


    // 2nd approach
//     let pyramid = '';

//     for(i = 1; i<=n; i++) {
//         let row = ''

//         for (let j = 1; j <= n-i; j++) {
//             row += ' '
//         }
//         for (let k = 1; k <= 2*i-1; k++) {
//             row += '*'
//         }

//         pyramid += row + ( i< n ? '\n' : '')
//     }

//     console.log(pyramid)

// }
// pyramid(5)




// loupe -> website (it gave more standing about callstack , queue , web api)



function medicineGet() {
    return new Promise(function(resolve) {
        setTimeout(resolve , 2*1000)
    })
}

medicineGet().then(function () {
    console.log("medicine recieved");
}).catch(function(err) {
    console.log("Medicine Not Recieved" , err);
})