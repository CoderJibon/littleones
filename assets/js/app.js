
function openNav() {
    document.getElementById("Sidenav").style.width = "550px";
  }
  
  function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
  }
  

document.querySelector('.sub-child').addEventListener('click',function(e){
    document.querySelector('.sub-menu').classList.toggle("show");
    
    e.preventDefault();
});




  
  
  