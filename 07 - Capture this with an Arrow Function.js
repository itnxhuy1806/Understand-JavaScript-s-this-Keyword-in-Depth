// An arrow function doesn't have its own this. Instead, it uses the this value from its enclosing execution context.
const counter = {
    count: 0,
    incrementPeriodically() {
        setInterval(() => {
            console.log(++this.count);
        }, 1000);
    }
};

counter.incrementPeriodically();