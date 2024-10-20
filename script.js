    //selecting button popupoverlay popupbox
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton =document.getElementById("add-popup-button")



addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

})
//select cancel button
var  cancelbutton=document.getElementById("Cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"



})
//select cointainer add-book, Book-title-id ,Book-Author-id, Book-description-input
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleid = document.getElementById("Book-title-id")
var BookAuthorid = document.getElementById("Book-Author-id")
var Bookdescriptioninput = document.getElementById("Book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=
    `<h2>${booktitleid.value}</h2>
            <h5>${BookAuthorid.value}/h5>
            <P>${Bookdescriptioninput.value}</P>
            <button>delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})
function deletebook(event)
{
    event.target.parentElement.remove()
}