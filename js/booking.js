var train_book_btn = document.getElementsByClassName("train_book_btn")
var search_tickets = document.querySelector(".search-tickets-btn")
var train_container =document.getElementsByClassName("train_container")

for(var i=0; i< train_book_btn.length ; i++)
train_book_btn[i].addEventListener("click",function(e){

    console.log("helll")
    window.location.replace('../html/passenger.html',);
    e.preventDefault();
   
})

search_tickets.addEventListener("click", function(e)
{
    console.log("clicked")
    for(var j=0; j< train_container.length ; j++){
    train_container[j].style.display= "block";
    console.log("in loop")
    }
    e.preventDefault();

    
})


