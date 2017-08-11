class coreMetrics {
  constructor(element, opts){
    this.name = 'snt_metrics_core_metrics';
    this.container = element;
    this.options = opts;
    console.log('coreMetrics defined -> metrics container:', this.container);
    console.log('Options:', this.options);
  }


  snt_submetrics (options) {
    if (options) {
      console.log('Options:', options);
    } else {
      console.log('no options entered');
    }
  };


  test() {
    console.log('Hello World');
  };


  greaterThanOneHundred(num) {
    if (num > 100) {
      console.log('greater than 100:', num);
    } else if (num == 100) {
      console.log('equals 100:', num);
    }else{
      console.log('less than 100:', num);
    }
  };
};

function timer(name, tick, stopAt, debug_element, createFunction) {
    this.name = name;
    this.time = 0;
    this.stopAt = stopAt;
    this.timerOn = false;
    this.tick = tick;
    this.intervalTimer = function () {},
        this.startTime = function () {
            if (!this.timerOn) {
                this.timerOn = true;
                var cTimer = this;
                this.intervalTimer = setInterval(function () {
                    cTimer.time += cTimer.tick;
                    if (cTimer.stopAt && cTimer.time >= cTimer.stopAt) {
                        cTimer.pauseTime();
                    }
                    if (debug_element && debug) {
                        debug_element.innerHTML = cTimer.time;
                    }
                    if (createFunction) {
                        createFunction(cTimer);
                    }
                }, this.tick);
            }
        },
        this.pauseTime = function () {
            clearInterval(this.intervalTimer);
            this.timerOn = false;
        },
        this.resetTime = function () {
            this.time = 0;
        }
};
