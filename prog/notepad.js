class NotepadProgram extends Program {
    createWindow(argument) {
        let title = (argument === null) ? 'Notepad' : `Notepad (${argument})`

        let winfo = {
            name: 'Notepad',
            title,
            icon: 'img/desktop/Notepad.png',
            resizable: true,
            margin: false,
            app: true
        }

        // eventually replace with fs driver...
        let doc = ''
        if (argument == 'PGP_Key.txt') {
            doc = PGP_PUBLIC_KEY
            winfo.width = 450
            winfo.height = 300
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
            </div>
            <textarea class="notepad__textarea">${doc}</textarea>
        `

        return [winfo, body]
    }
}

window.pm.registerPrototype('notepad', NotepadProgram)
