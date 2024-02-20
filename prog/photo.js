class PhotoProgram extends Program {
    createWindow(argument) {
        let title = (argument === null) ? 'Photo' : `Photo (${argument})`

        let winfo = {
            name: 'Realy ?',
            title,
            icon: 'img/taskbar/Paint.png',
            resizable: false,
            margin: false,
            app: true
        }
        let body = `
        <div class="menu-bar__container">
                <div class="menu-bar__menu">
                    <div class="menu-bar__handle"></div>
                    <span class="menu-bar__item">
                        File
                    </span>
                    <span class="menu-bar__item">
                        Edit
                    </span>
                    <span class="menu-bar__item">
                        Search
                    </span>
                    <span class="menu-bar__item">
                        Help
                    </span>
                </div>
        <div
        class="window"      
        data-wm_order="0"
      >
       <img src="/img/special/coach.png" alt="Realy ?"/>
    </div>
        `

        return [winfo, body]
    }
}

window.pm.registerPrototype('photo', PhotoProgram)
