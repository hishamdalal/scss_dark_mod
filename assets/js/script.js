//window.addEventListener("onDomContentLoaded", () => {});



if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    console.log('🎉 Dark mode is supported');

    
    let darkModeState = false;
    
    // MediaQueryList object
    const useDark = window.matchMedia("(prefers-color-scheme: dark)");
    
    let current_theme = useDark.matches ? 'dark' : 'light'

    const toggleButton = document.querySelector(".theme-mode-toggle");

    function setThemeIcon(theme) {
        if (theme === "light") {
            toggleButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        } else {
            toggleButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        }
    }

    let loadTheme = (theme) => {
        const root = document.querySelector(':root');
        root.setAttribute('color-scheme', `${theme}`);
    }

    // Toggles the "dark-mode" class
    function toggleDarkMode(state) {
        document.documentElement.classList.toggle("dark-mode", state);
        darkModeState = state;
    }

    // Sets localStorage state
    function setDarkModeLocalStorage(state) {
        localStorage.setItem("dark-mode", state);
    }

    setThemeIcon(current_theme);

    // Initial setting
    toggleDarkMode(localStorage.getItem("dark-mode") == "true");

    // Listen for changes in the OS settings.
    // Note: the arrow function shorthand works only in modern browsers, 
    // for older browsers define the function using the function keyword.
    useDark.addListener((evt) => toggleDarkMode(evt.matches));

    // Toggles the "dark-mode" class on click and sets localStorage state
    toggleButton.addEventListener("click", () => {
        darkModeState = !darkModeState;
        theme = darkModeState ? 'dark' : 'light';

        toggleDarkMode(darkModeState);
        setDarkModeLocalStorage(darkModeState);
        loadTheme(theme);
        setThemeIcon(theme);
    });


}
