const emailBtn = document.querySelector(".emailBtn");
const email = "naelpin13@gmail.com"

emailBtn.addEventListener("click", function (){  
    window.confirm(`GMAIL: ${email}`);
    window.style.color ="red";

})
