let kast = 100
let sider = 6
let terninger = 6
let sum = 0
let sæt = []

const args = process.argv.slice(2)
console.log(args)

if (1 == args.length) {
    kast = args[0]
}

if (2 == args.length) {
    kast = args[0]
    sider = args[1]
}

if (3 == args.length) {
    kast = args[0]
    sider = args[1]
    terninger = args[2]
}

if (kast == "r") {
    kast = Math.floor(Math.random() * 10000) + 1
}

if (sider == "r") {
    sider = Math.floor(Math.random() * 10000) + 1
}
if (terninger == "r") {
    terninger = Math.floor(Math.random() * 10000) + 1
}


for (let i = 0; i < kast; i++) {
    sum = 0
    for (let i = 0; i < terninger; i++) {
        let øjne = Math.floor(Math.random() * sider) + 1
        sum = sum + øjne
    }
    sæt.push(sum)
}
const arr = sæt
const counts = {};
arr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
});

if (args[0] == "help") {
    console.log("uden argurmenter kastes der 100 gange med 6 terninger pr gang og terningerne har 6 sider")
    console.log("derudover kan du selv definere parametrene ved hjælp af argurmenter, læs guiden nedenfor")
    console.log("format: [kast] [terninger] [sider]")
    console.log("kast: antal kast der foretages")
    console.log("terninger: antal terninger pr kast")
    console.log("sider: antal sider på terningerne")
    console.log("fx: 1241632 420 69")
    console.log("her kastes der 1241632 gange, med 420 terninger pr kast og terningerne har 69 sider")
    console.log("istedet for et tal kan du også skrive r for at generere et tilfældigt tal imellem 1 og 10000")
} else {
    console.log(counts)
    console.log("Kast")
    console.log(kast)
    console.log("terninger pr kast")
    console.log(terninger)
    console.log("antal sider på terningerne")
    console.log(sider)
    console.log("End Of Program")
}