let kast = 100000000
let sider = 6
let terninger = 6
let sum = 0
let sæt = []

for (let i = 0; i < kast; i++) {
    sum = 0
    for (let i = 0; i < terninger; i++) {
        let øjne = Math.floor(Math.random() * sider) + 1
        sum = sum + øjne
    }
    sæt.push(sum)
}

console.log(sæt)
const arr = sæt
const counts = {};
arr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
});
console.log(counts)
