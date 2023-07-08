export const pubSub = {
    events: {},

    subscribe: function(event, cb) {
        // what does this.events[event] look like?
        this.events[event] = this.events[event]|| [];
        this.events[event].push(cb);
    },

    unsubscribe: function(event, cb) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(f => f != cb)
        }
    },

    publish: function(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(f => {
                f(data);
            })
        }
    },
}

