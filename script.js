((window, document) => {

    const $ = ele =>  typeof ele === "string" ? document.querySelector(ele): ""

    const container = $(".container");

    container.onmouseenter = () => {
        container.classList.add("container-hover")
    }
    container.onmouseleave = () => {
        container.classList.remove("container-hover")
    }
    container.onclick = () => {
        container.classList.remove("container-hover")
        container.classList.add("container-click")
    }
    window.onclick = (e) => {
        if(e.target !== container) {
        container.classList.remove("container-click")
            
        }
    }


})(window, document)