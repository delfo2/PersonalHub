const topics : Map<string, [Function?]> = new Map();

export const EventEmitter = {
    sub (who : Function, topic : string) : void {
        if (!topics.has(topic)) {
            topics.set(topic, []);
        }
        topics.get(topic)?.push(who);
    },
    
    pub (topic : string, info : string) : void {
        if(topics.get(topic)) {
            const listeners : [Function?] | undefined | [] = topics.get(topic);
            if (listeners) {
                listeners.forEach(listener => {
                    if(listener){
                        listener(info)
                    }
                });
            }
        }
    }
}