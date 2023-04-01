const topics = new Map();
export const EventEmitter = {
    sub(who, topic) {
        var _a;
        if (!topics.has(topic) &&
            topics.get(topic)) {
            topics.set(topic, []);
        }
        (_a = topics.get(topic)) === null || _a === void 0 ? void 0 : _a.push(who);
    },
    pub(topic, info) {
        if (topics.get(topic)) {
            const listeners = topics.get(topic);
            if (listeners) {
                listeners.forEach(listener => {
                    if (listener) {
                        listener(info);
                    }
                });
            }
        }
    }
};
