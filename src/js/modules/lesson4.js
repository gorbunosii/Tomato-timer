class Tomato {
    constructor({allTime = 25, pause = 5, bigPause = 15, tasks = []}) {
        this.allTime = allTime;
        this.pause = pause;
        this.bigPause = bigPause;
        this.tasks = tasks;
        this.activeTask = null;
    }

    addTask(value) {
        value.id = Math.floor(Math.random() * 100)
        return this.tasks.push(value);
    }

    addActiveTask(value) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === value) {
                this.activeTask = this.tasks[i]
            }
        }
    }

    startTimer() {
        if (this.activeTask === null) {
            return console.log('Активных задач нет!');
        }
        const start = () => {
            const count = this.allTime;
            const startTime = new Date();
            const stopTime = startTime.setMinutes(startTime.getMinutes() + count);
            const countdown = setInterval(function() {
                const now = new Date().getTime();
                const remain = stopTime - now; 
                console.log(remain)
                if (remain < 0) {
                  clearInterval(countdown);
                  const pause = () => {
                    const pauseTime = this.bigPause % 3 === 0 ? this.bigPause : this.pause;
                    const count = pauseTime;
                    const startTime = new Date();
                    const stopTime = startTime.setMinutes(startTime.getMinutes() + count);
                    const countdown = setInterval(function() {
                        const now = new Date().getTime();
                        const remain = stopTime - now; 
                        console.log(remain)
                        if (remain < 0) {
                          clearInterval(countdown);
                         }
                    }, 1000)}
                 }
            }, 1000)}
        start();
    }

    increaseTimer(value) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === value) {
                console.log(`У этой задачи: ` + JSON.stringify(this.tasks[i].Задача) + `, увеличено время`);
            }
        }
    }
}

const job = new Tomato({
    allTime: 705,
    pause: 50,
    bigPause: 105,
    tasks: [],
});

const a = {
    'Задача': 'Сделать домашнюю работу',
}
const b = {
    'Задача': 'Попить кофе',
}
const c = {
    'Задача': 'Погулять',
}

job.addTask(a);
job.addTask(b);
job.addTask(c);
