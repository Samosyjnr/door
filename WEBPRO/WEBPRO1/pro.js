document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.cn').onclick=function(){
        document.querySelector('.content').innerHTML='WELCOME TO XAMWEBPRO PLEASE FILL THE FORM BY YOUR RIGHT SIDE <br> TO GET STARTED AND ENJOY YOUR 100% WELCOME BONUS....<br>DONT HAVE AN ACCOUNT? SIGIN UP UP BELOW THE THE FORM'
        document.querySelector('.cotent').style.color='white'
        document.querySelector('.content').style.padding='4rem'
        document.querySelector('.content').style.background-color-'green'
    }
document.querySelector('form').onsubmit=function(){
    const email= document.querySelector('#Emal').value
    const password= document.querySelector('#Pass').value
    console.log(email)
   
   


    if(email.value === '' || password.value === ''){
        document.querySelector('#h2').innerHTML='opps...please check your credentials'
        
       
       
    }else{
        document.querySelector('#h2').innerHTML=`WELCOME ${email}with ${pass}`
        
    }
   
    return false
  

}

    
})