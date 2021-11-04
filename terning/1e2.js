// default definitions, used for running the program without any argurments
const args = process.argv.slice(2)
let kast = number(args[0]) || 100
let terninger = number(args[1]) || 6
let sider = number(args[2]) || 6
let sum = 0
let sæt = []

// the next 3 if's define the value "r", which is the argurment used if you wish for a random number
if (kast == "r") {
    kast = Math.floor(Math.random() * 10000) + 1
}

if (sider == "r") {
    sider = Math.floor(Math.random() * 10000) + 1
}
if (terninger == "r") {
    terninger = Math.floor(Math.random() * 10000) + 1
}

// loop for how many throws
for (let i = 0; i < kast; i++) {
    sum = 0

    // loop for how many dice used per throw
    for (let i = 0; i < terninger; i++) {
        let øjne = Math.floor(Math.random() * sider) + 1
        sum = sum + øjne
    }
    sæt.push(sum)
}
// fuckign counting this i have no fucking clue but god it is beautiful. stolen from the interwebs
const arr = sæt
const counts = {};
arr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
});

// the help argurment provides tells the user how to properly use the argurments and informs them of any other things they can type.
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
    // The product, it lists the data first, then how many throws, how many dice per throw and how many sides the dice each have
    console.log(counts)
    console.log("Kast")
    console.log(kast)
    console.log("terninger pr kast")
    console.log(terninger)
    console.log("antal sider på terningerne")
    console.log(sider)
    console.log("End Of Program")
}