function openNav() {
  if(document.getElementById("hamburger").style.marginLeft == "240px")
  {
    closeNav();

  }
  else 
  {
    document.getElementById("testbar").ariaExpanded = true;
    document.getElementById("mySidebar").style.width = "240px";
    document.getElementById("hamburger").style.marginLeft = "240px";
  }
}

function closeNav() {

	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("hamburger").style.marginLeft= "0";
  document.getElementById("testbar").ariaExpanded = false;
}


