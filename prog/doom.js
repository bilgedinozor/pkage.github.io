class DoomProgram extends Program {
    isMobileBrowser() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    createWindow() {
        let body   = ''
        let wminfo = {
            title: 'DOOM.EXE',
            name:  'Doom',
            icon:  'img/desktop/MSDOS.png',
            resizable: true
            width: 480,
            height: 360,
            x: 75,
            y: 75
        }

        if (this.isMobileBrowser()) {
            wminfo = {
                ...wminfo,
                width: 360,
                height: 240,
            }
        }

        const bundle_url = `https://doszone-uploads.s3.dualstack.eu-central-1.amazonaws.com/original/2X/8/80ba33210cab4177158dde6f2ec9704de56c7dfc.jsdos`
        const src = `//dos.zone/en/player/${encodeURIComponent(bundle_url)}`;
        body = `
            <iframe
                style="width: calc(100% - 4px); height: 100%"
                src="${src}">
            </iframe>
        `


        console.log(wminfo)

        return [wminfo, body]
    }

    onAttach() {
        if (!this.isMobileBrowser()) {
            this.getBodyHandle().style.margin = 0
        } else {
            this.getBodyHandle()
                .querySelector('button.doom__close')
                .addEventListener('click', this.closeWindow.bind(this))
        }
    }
}

window.pm.registerPrototype('doom', DoomProgram)
