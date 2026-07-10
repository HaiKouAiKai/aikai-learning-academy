window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    setTimeout(()=>{
        document.getElementById("logo").classList.add("show");
    },400);

    setTimeout(()=>{
        document.getElementById("title").classList.add("show");
    },1000);

    setTimeout(()=>{
        document.getElementById("tagline").classList.add("show");
    },1600);

    setTimeout(()=>{
        document.getElementById("notice").classList.add("show");
    },2300);

});
