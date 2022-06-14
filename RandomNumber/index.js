let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){
    let x = Math.floor(Math.random() * 10) + 1;
    let y = Math.floor(Math.random() * 20) + 1;
    let z = Math.floor(Math.random() * 30) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}