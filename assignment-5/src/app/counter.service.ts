export class CounterService {
    counter: number = 0;

    increaseCounter() {
        this.counter += 1;
        console.log(this.counter);
    }
}