
document.addEventListener("click", function(e){
    if (e.target.nextSibling.nextSibling.className == "loader") {
        e.target.nextSibling.nextSibling.classList.add("display");
        setTimeout(() => {
            e.target.nextSibling.nextSibling.classList.remove("display");
        }, 3000);
    }
});