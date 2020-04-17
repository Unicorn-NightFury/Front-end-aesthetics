((window, document) => {

    const $ = ele => typeof ele === "string" ? document.querySelector(ele) : "";


    const con = $(".container");
    con.onmouseenter = () => con.classList.add("container-hover");
    con.onmouseleave = () => con.classList.remove("container-hover");

    con.onclick = () => {
        con.classList.remove("container-hover");
        con.classList.add("container-click");
    }
    window.onclick = e => {
        if( e.target.className.split(' ')[0] !== "container" && e.target.className.split(' ')[0] !== "line" ) 
            con.classList.remove("container-click");
    }

})(window, document)