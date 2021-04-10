let numCheck = document.getElementById('checknum')
let oneClick = document.getElementById('press')
let result = document.getElementById('showresult')

oneClick.addEventListener('click', knowYourNumber)
function knowYourNumber(){
    alert('You are about to check your mobile number network')
    let number = numCheck.value
    if(number.startsWith('0803')||number.startsWith('0806')
    ||number.startsWith('0703')||number.startsWith('0903')
    ||number.startsWith('0706')||number.startsWith('0813')
    ||number.startsWith('0810')||number.startsWith('0814')
    ||number.startsWith('0816')){
        result.innerHTML = `Your Number ${number} is <img src ='images/mtn.jpg' width = '50px' height = '50px'>`
    }
    else if(number.startsWith('0705')||number.startsWith('0905')
    ||number.startsWith('0807')||number.startsWith('0815')
    ||number.startsWith('0811')||number.startsWith('0905')||number.startsWith('0805')){
        result.innerHTML = `Your Number ${number} is <img src ='images/glo.jpg' width = '50px' height = '50px'>`
    }
    else if(number.startsWith('0809')||number.startsWith('0909')
    ||number.startsWith('0817')){
        result.innerHTML = `Your Number ${number} is <img src ='images/9m0bile.jpg' width = '50px' height = '50px'>`
    }
    else if(number.startsWith('0802')||number.startsWith('0902')
    ||number.startsWith('0701')||number.startsWith('0808')
    ||number.startsWith('0708')||number.startsWith('0812')){
        result.innerHTML = `Your Number ${number} is <img src ='images/airtel.jpg' width = '50px' height = '50px'>`
    }
    else{
        result.innerHTML = `Your number ${number} network is not known`
    }
}





// let btn = document.getElementById('press')
// let checknum = document.getElementById('checknum')
// let showresult = document.getElementById('showresult')
// btn.addEventListener('click',showImage)

// function knowYourNumber(){
//     let number = checknum.value
//     for(let i =0; i <= number.length;i++){
// return numCheck[i]
//     }
//     if(numCheck[[0][1][2][3]]==='0803'||numCheck[[0][1][2][3]]==='0703'||numCheck[[0][1][2][3]]==='0903'||
//     numCheck[[0][1][2][3]]==='0806'||numCheck[[0][1][2][3]]==='0706'||numCheck[[0][1][2][3]]==='0813'||
//     numCheck[[0][1][2][3]]==='0810'||numCheck[[0][1][2][3]]==='0814'||numCheck[[0][1][2][3]]==='0816'){
//             showresult.innerHTML = `Your Number ${number} is <img src ='images/mtn.jpg' width = '50px' height = '50px'>`
//     }
//     else if(numCheck[[0][1][2][3]]==='0805'||numCheck[[0][1][2][3]]==='0705'||numCheck[[0][1][2][3]] ==='0905'||
//     numCheck[[0][1][2][3]]==='0807'||numCheck[[0][1][2][3]]==='0815'||numCheck[[0][1][2][3]]==='0811'||
//     numCheck[[0][1][2][3]]==='0905'){
//      showresult.innerHTML = `Your Number ${number} is <img src ='images/glo.jpg' width = '50px' height = '50px'>`
//     }
//     else if(numCheck[[0][1][2][3]]==='0809'||numCheck[[0][1][2][3]]==='0909'||numCheck[[0][1][2][3]]==='0817'){
//         showresult.innerHTML = `Your Number ${number} is <img src ='images/9m0bile.jpg' width = '50px' height = '50px'>`
//     }
//     else if(numCheck[[0][1][2][3]]==='0802'||numCheck[[0][1][2][3]]==='0902'||numCheck[[0][1][2][3]]==='0701'||
//     numCheck[[0][1][2][3]]==='0808'||numCheck[[0][1][2][3]]==='0708'||numCheck[[0][1][2][3]]==='0812'||
//     numCheck[[0][1][2][3]]==='0905'){
//         showresult.innerHTML = `Your Number ${number} is <img src ='images/airtel.jpg' width = '50px' height = '50px'>`
//     }
//     else{
//         showresult.innerHTML = `Your Number ${number} might be StarComm, Ntel, Multi-Links, ZoomMobile ')
//     }

// }
