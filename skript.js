function myFunction(x) {
   x.classList.toggle("change");
 } 
  
   //show and hide dropdown list item on button click
   function show_hide() {
    var click = document.getElementById("list-items");
    if (click.style.display === "none" ) {
      click.style.display = "block"; 
      
    } else {
       click.style.display = "none"; 
       
    }
 }


 


 const element = document.querySelector('.container2');

 element.addEventListener('click', () => {
     element.classList.toggle('highlighted');
 });


