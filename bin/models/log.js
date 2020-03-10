class Log {
    constructor() {
        this.fecha = new Date().toISOString();
        this.appName = undefined;
        this.message = undefined;
        this.otherMessage = undefined;
    }

    withAppName (name) {
        this.appName = name;
        return this;
    }
    withMessage (message) {
        this.message = message;
        return this;
    }
    withOtherMessage (otherMessage) {
        this.otherMessage = otherMessage;
        return this;
    }
}

let prueba = new Log()
                        .withAppName('Jose')
                        .withOtherMessage('Mundo!');


console.log(prueba);