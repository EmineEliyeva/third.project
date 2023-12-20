let lists = [...document.getElementsByClassName("list")];
lists.map(list=>{
    list.addEventListener("click", ()=>{
        document.getElementsByClassName("active")[0].classList.remove("active")
        list.classList.add("active")
    })
})