// var counter = 1;
// function printCounter () {
//     console.clear()
//     console.log(counter);
//     counter += 1
// }

// setInterval(printCounter , 1000)



function checkPalindrome(str) {
    // Convert the string to lowercase to make it case-insensitive
    str = str.toLowerCase();
    
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false; // If any pair doesn't match, it's not a palindrome
        }
        start++;
        end--;
    }
    return true; // If all pairs match, it's a palindrome
}

console.log(checkPalindrome("abbdfdsaa")); // Output: false
console.log(checkPalindrome("abba"));      // Output: true
console.log(checkPalindrome("Aba"));      // Output: true (case-insensitive)
