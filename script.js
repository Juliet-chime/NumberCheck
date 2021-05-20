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




// let user = window.prompt('enter your number')

// function knowYourNumber(){
//     if((user[0]==='0'&& user[1]==='8'&& user[2]==='0'&&
//     user[3]==='3') || (user[0]==='0'&& user[1]==='7'&& user[2]==='0'&&
//     user[3]==='3') || (user[0]==='0'&& user[1]==='9'&& user[2]==='0'&&
//     user[3]==='3') || (user[0]==='0'&& user[1]==='8'&& user[2]==='0'&&
//     user[3]==='6') || (user[0]==='0'&& user[1]==='7'&& user[2]==='0'&&
//     user[3]==='6') || (user[0]==='0'&& user[1]==='8'&& user[2]==='1'&&
//     user[3]==='3') || (user[0]==='0'&& user[1]==='8'&& user[2]==='1'&&
//     user[3]==='0') || (user[0]==='0'&& user[1]==='8'&& user[2]==='1'&&
//     user[3]==='4') || (user[0]==='0'&& user[1]==='8'&& user[2]==='1'&&
//     user[3]==='6')){
//             console.log('This is MTN')
//     }
//     else if((user[0]==='0'&& user[1]==='8'&& user[2]==='0'&&
//     user[3]==='5') || (user[0]==='0'&& user[1]==='7'&& user[2]==='0'&&
//     user[3]==='5') || (user[0]==='0'&& user[1]==='9'&& user[2]==='0'&&
//     user[3]==='5') || (user[0]==='0'&& user[1]==='8'&& user[2]==='0'&&
//     user[3]==='7') || (user[0]==='0'&& user[1]==='8'&& user[2]==='1'&&
//     user[3]==='5') || (user[0]==='0'&& user[1]==='8'&& user[2]==='1'&&
//     user[3]==='1') || (user[0]==='0'&& user[1]==='9'&& user[2]==='0'&&
//     user[3]==='5')){
//             console.log('This is Glo')
//     }
//   else if((user[0]==='0'&& user[1]==='8'&& user[2]==='0'&&
//     user[3]==='9') || (user[0]==='0'&& user[1]==='9'&& user[2]==='0'&&
//     user[3]==='9') || (user[0]==='0'&& user[1]==='8'&& user[2]==='1'&&
//     user[3]==='7')){
//             console.log('This is 9Mobile')
//     }
//   else if((user[0]==='0'&& user[1]==='8'&& user[2]==='0'&&
//     user[3]==='2') || (user[0]==='0'&& user[1]==='9'&& user[2]==='0'&&
//     user[3]==='2') || (user[0]==='0'&& user[1]==='7'&& user[2]==='0'&&
//     user[3]==='1') || (user[0]==='0'&& user[1]==='8'&& user[2]==='0'&&
//     user[3]==='8') || (user[0]==='0'&& user[1]==='7'&& user[2]==='0'&&
//     user[3]==='8') || (user[0]==='0'&& user[1]==='8'&& user[2]==='1'&&
//     user[3]==='2')){
//             console.log('This is Airtel')
//     }
 
//     else{
//          console.log("I dont know your number's network")
//     }

// }
// knowYourNumber();    
