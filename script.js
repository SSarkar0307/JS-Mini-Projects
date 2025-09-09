let applyTheme = function(theme){
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}

function getSystem(){
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setInitialTheme(){
    const savedLocal= localStorage.getItem("theme");
    applyTheme( savedLocal || getSystem());
}

setInitialTheme();

// Listen to System changes when no theme set by user

window.matchMedia("(preferss-color-scheme: dark)").addEventListener("change", function(){
    if(!localStorage.getItem("theme")){
        applyTheme(getSystem());
    }
})

let button= document.querySelector("button");

button.addEventListener("click", function(){
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light" ;
    const newTheme = currentTheme === "dark" ? "light" : "dark" ;

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);

})