
if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    console.log('🎉 Dark mode is supported');

    
    class DarkMode 
    {
        //sys_mode;
        //dark_state;
        //current_mode;
        //btn;
        
        //----------------------------------------------------------------//
        constructor(){
            this.dark_state = false;
            this.current_mode = 'light';
            this.sys_mode = window.matchMedia("(prefers-color-scheme: dark)");
            this.btn = document.querySelector(".mode-switch");
        }
        //----------------------------------------------------------------//
        setModeIcon(mode) {
            if (mode === "light") {
                this.btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
            } else {
                this.btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
            }
        }
        //----------------------------------------------------------------//
        loadMode(mode) {
            const root = document.querySelector(':root');
            root.setAttribute('color-scheme', `${mode}`);
        }
        //----------------------------------------------------------------//
        // Sets localStorage mode
        setDarkModeLocalStorage(mode) {
            localStorage.setItem("dark-mode", mode);
        }
        //----------------------------------------------------------------//
        getDarkModeLocalStorage() {
            return localStorage.getItem("dark-mode")
        }
        //----------------------------------------------------------------//
        // Toggles the "dark-mode" class
        toggleDocMode(state) {
            document.documentElement.classList.toggle("dark-mode", state);
        }
        //----------------------------------------------------------------//
        run(){
            // User preference
            if ( this.getDarkModeLocalStorage() == 'dark' ) {
                this.dark_state = true;
                this.current_mode = 'dark';
            }
            else if ( this.getDarkModeLocalStorage() == 'light' ) {
                this.dark_state = false;
                this.current_mode = 'light';
            }
            // System theme
            else if( this.sys_mode.matches ) {
                this.dark_state   = this.sys_mode.matches ? true : false;
                this.current_mode = this.sys_mode.matches ? 'dark' : 'light';
            }            
            
            
            // Initial setting
            this.toggleDocMode(this.dark_state);
            this.setModeIcon(this.current_mode);
            this.loadMode(this.current_mode);
            //setDarkModeLocalStorage(dark_state);

            //console.log('dark_state', this.dark_state, 'current', this.current_mode, 'storage', this.getDarkModeLocalStorage());

            // Listen for changes in the OS settings.
            // Note: the arrow function shorthand works only in modern browsers, 
            // for older browsers define the function using the function keyword.
            //this.sys_mode.addListener((evt) => toggleDarkMode(evt.matches));

            // Toggles the "dark-mode" class on click and sets localStorage state
            this.btn.addEventListener("click", () => {
                this.dark_state = !this.dark_state;
                this.current_mode = this.dark_state ? 'dark' : 'light';

                this.toggleDocMode(this.dark_state);
                this.setDarkModeLocalStorage(this.current_mode);
                this.loadMode(this.current_mode);
                this.setModeIcon(this.current_mode);
                                
                //console.log('dark_state', this.dark_state, 'current', this.current_mode, 'storage', this.getDarkModeLocalStorage());

            });

        }
        //----------------------------------------------------------------//
    }

    const darkMode = new DarkMode();
    darkMode.run();


}
