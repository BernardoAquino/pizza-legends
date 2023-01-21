class OverworldEvent {
    constructor({ map, event }) {
        this.ma = map;
        this.event = event;
    }

    init() {
        return new Promise(resolve => {
            this[this.event.type](resolve)
        });
    }

    stand(resolve) {

    }

    walk(resolve) {

    }
}