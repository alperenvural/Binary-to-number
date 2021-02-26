// Binary to Number 
// Launch: node binary
// Example binary: 131844
let binary = 131844
for (var i = 0;i<32;i++) {
    if ((binary & ((1<<i)>>>0)) >>> 0) {
        console.log(i) // 2 , 8 , 9 , 17 
    }
}