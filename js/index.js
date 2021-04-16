let typed = new Typed(".typing_locations", {
    strings: ["Chennai?", "Mumbai?", "Dehradun?", "New Delhi?","Gujrat?","Kashmir?","Uttarakhand?","Goa?","Varanasi?"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

// ************************************** signup/signin modal *****************************


var sign_up_modal = document.getElementsByClassName("signup")[0]
var sign_in_modal = document.getElementsByClassName("signin")[0]
var signup_close_link = document.querySelector(".sign-up-close-link")
var signin_close_link = document.querySelector(".sign-in-close-link")





// sign up/sign in switch buttons
var signin_switch = document.querySelector(".sign-in-switch")
var signup_switch = document.querySelector(".sign-up-switch")


// sign up link button
document.getElementById("sign-up-Btn").addEventListener("click",function(){
    sign_up_modal.classList.add('bg-active')

})

// sign in  link button
document.getElementById("sign-in-Btn").addEventListener("click",function(){
    sign_in_modal.classList.add('bg-active')

})

// sign up close button
signup_close_link.addEventListener("click",function(event){ 
    sign_up_modal.classList.remove('bg-active')
});

// sign in close button
signin_close_link.addEventListener("click",function(event){
  
    sign_in_modal.classList.remove('bg-active')
});

// sign in switch
signin_switch.addEventListener("click", function(){
    sign_up_modal.classList.remove('bg-active')
    sign_in_modal.classList.add('bg-active')

})

// sign up switch
signup_switch.addEventListener("click", function(){
    sign_in_modal.classList.remove('bg-active')
    sign_up_modal.classList.add('bg-active')

})


//////////////////////////////////// signup,sign in linking with booking page2 
var sign_up_booking = document.querySelector(".signup_btn_booking")
var sign_in_booking = document.querySelector(".signin_btn_booking")

sign_up_booking.addEventListener("click",function(e){
    console.log("helll")
    window.location.replace('../html/booking.html');
    e.preventDefault();
   
})
sign_in_booking.addEventListener("click",function(e){
    console.log("helll")
    window.location.replace('../html/booking.html');
    e.preventDefault();
   
})



