export const johnnyFive = {
    greet(name) {
        if (name === undefined) {
            return 'Johnny Five is Alive';
        } else {
            return `Hello, Tyler. I am Johnny 5.  I am alive!`;
        };
    }   
};

export const shout = message => `${message.toUpperCase()}!!!`;