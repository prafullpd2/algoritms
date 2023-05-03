class Observable {
  subscribers = [];
  observerCB;

  privateSubscriber = {
    next: (data) => {
      this.notify(data);
    },
    error: (error) => {
      this.notifyError(error);
    },
  };

  constructor(cb) {
    // observerCB = cb;
    console.log('careating, cb', cb)
    Promise.resolve().then(() => {
      console.log('careating, cb',this.privateSubscriber)

      cb(this.privateSubscriber);
    });
  }
  //subscriber : {next, error, complete}

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  notify(data) {
    this.subscribers.forEach((s) => {
      s.next(data);
    });
  }
  notifyError(data) {
    this.subscribers.forEach((s) => {
      s.error(data);
    });
  }
}

let observable = new Observable((subscriber) => {
  console.log('observable Started');
  subscriber.next('d1');
  subscriber.next('d2');

  setTimeout(() => {
    subscriber.next('d3');
  }, 3000);
});

observable.subscribe({
  next: (data) => {
    console.log(1, data);
  },
});

observable.subscribe({
  next: (data) => {
    console.log(2, data);
  },
});


setTimeout(()=>{
  observable.subscribe({
    next: (data) => {
      console.log(3, data);
    },
  });
}, 1000)
