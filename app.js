const codeLog = [];
document.addEventListener("keydown", (x) => {
    let codeID = document.getElementById("codeDisplay");
    let keyID = document.getElementById("keyDisplay");
    let whichID = document.getElementById("whichDisplay");
    document.getElementById("pg1").style.display = "none";
    document.getElementById("pg2").style.display = "flex";
    if(x){
        codeID.innerText = x.code;
        keyID.innerText = x.key;
        whichID.innerText = x.which;}
    else{
        codeID.innerText = 'Please Press a key';
        keyID.innerText = '';
        whichID.innerText = ''}
    })
document.addEventListener('keyup',(y)=>{
    let prevCodeID = document.getElementById("prevCodeDisplay");
    let prevKeyID = document.getElementById("prevKeyDisplay");
    let prevWhichID = document.getElementById("prevWhichDisplay");
    let codeID = document.getElementById("codeDisplay");
    let keyID = document.getElementById("keyDisplay");
    let whichID = document.getElementById("whichDisplay");
    codeID.innerText = 'Please Press a key';
    keyID.innerText = 'Key';
    whichID.innerText = 'Key code';
    prevCodeID.innerText = y.code;
    prevKeyID.innerText = y.key;
    prevWhichID.innerText = y.which;
    document.getElementById("codeLogID").innerHTML += y.code + "<br>";
    document.getElementById("keyLogID").innerHTML += y.key + "<br>";
    document.getElementById("whichLogID").innerHTML += y.which + "<br>";
})
