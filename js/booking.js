var search_tickets = document.querySelector(".search-tickets-btn")
var train_container =document.getElementsByClassName("train_container")
var forms = document.querySelector('.needs-validation')
var train_book_btn = document.getElementsByClassName("train_book_btn")


// var validation = Array.prototype.filter.call(forms, function(form){
//     search_tickets.addEventListener('click', function(e){
        
//         if(form.checkValidity() === false){
//             console.log("not valid")
//             e.preventDefault();
//             e.stopPropagation();
//         }
//         else if(form.checkValidity() === true){
//             // loadTickets();
//             // for(var j=0; j< train_container.length ; j++){
//             // train_container[j].style.display= "block";
//             // }
//             console.log('validated')
//             // e.preventDefault();
//         }
//         form.classList.add('was-validated');
//     }, false);
// })






for(var i=0; i< train_book_btn.length ; i++)
train_book_btn[i].addEventListener("click",function(e){

    window.location.replace('passenger.html');
    e.preventDefault();
   
})


// function loadTickets(){
// {
    for(var j=0; j< train_container.length ; j++){
    train_container[j].style.display= "block";
    }
// }
// }

