import {ref} from "vue";

export const userTheme = ref(localStorage.getItem('user-mode') || getPreference());
document.documentElement.className = userTheme.value;
function getPreference(){
    const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    if (hasDarkPreference) {
        return "dark-mode";
    } else {
        return "light-mode";
    }
}

const setTheme = (theme) => {
    localStorage.setItem("user-mode", theme);
    userTheme.value = theme
    document.documentElement.className = theme;
}

export const toggleTheme = () => {
    const activeTheme = localStorage.getItem("user-mode");
    if (activeTheme === "light-mode") {
        setTheme("dark-mode");
    } else {
        setTheme("light-mode");
    }
    console.log('ada')
}
