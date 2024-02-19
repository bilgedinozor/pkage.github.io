class PhotoProgram extends Program {
    createWindow(argument) {
        let title = (argument === null) ? 'Photo' : `Photo (${argument})`

        let winfo = {
            name: 'Photo',
            title,
            icon: 'img/taskbar/Paint.png',
            resizable: false,
            margin: false,
            app: true
        }

        // eventually replace with fs driver...
        let doc = ''
        if (argument == 'coach.png') {
            doc = Coach
            winfo.width = 634
            winfo.height = 483
        }

        let body = `
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
