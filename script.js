// 封装一下该功能模块
((window, document) => {

    // 封装一个类似JQuery的选择器
    const getSelector = ele => {
        return typeof ele === "string" ? document.querySelector(ele): "";
    }

    // 封装一个类似JQuery的添加类方法
    const addClass = (ele, cls) => {
        ele.classList.add(cls)
    }

    // 封装一个类似JQuery的删除类方法
    const removeClass = (ele, cls) => {
        ele.classList.remove(cls);
        
    }

    // 获取 input和label 的DOM对象
    let input = getSelector("input"),
        label = getSelector("label");

    input.onfocus = addClass.bind(this, label, "animation_one");
    input.onblur = function() {
        if(input.value === "") removeClass(label, "animation_one")
    }

})(window, document)