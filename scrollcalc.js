const progressBar = document.querySelector(".progress-bar");
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 

windows.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop; 
  const scrolled = (scrollTop / height) * 100; 


});


