 const tomatoFunction = () => {
 class RenderTomato {
    constructor() {

    }
  
    init() {
      const body = document.querySelector('body');
      const main = document.querySelector('main');
      const mainSection = document.createElement('section');
      const mainContainer = document.createElement('div');
      const pomodoroFormWindow = document.createElement('div');
      const pomodoroTasks = document.createElement('div');
      const windowPanel = document.createElement('div');
      const windowBody = document.createElement('div');
      this.taskForm = document.createElement('form');
      this.inputPrimary = document.createElement('input');
      this.buttonImportance = document.createElement('button');
      this.taskFormAddButton = document.createElement('button');
      this.windowTimerText = document.createElement('p');
      const windowButtons = document.createElement('div');
      this.buttonPrimary = document.createElement('button');
      this.buttonSecondary = document.createElement('button');
      this.windowPanelTitle = document.createElement('p');
      const windowPanelTaskText = document.createElement('p');
      const pomodoroTasksHeaderTitle = document.createElement('p');
      const pomodoroTasksQuestList = document.createElement('ul');
      this.pomodoroTasksQuestTasks = document.createElement('ul');
      const pomodoroTasksDeadlineTimer = document.createElement('p');
      const pomodoroTaskslistitem1 = document.createElement('li');
      const pomodoroTaskslistitem2 = document.createElement('li');
      const pomodoroTaskslistitem3 = document.createElement('li');
      const pomodoroTaskslistitem4 = document.createElement('li');
      const pomodoroTaskslistitem5 = document.createElement('li');
      const pomodoroTaskslistitem6 = document.createElement('li');
      const pomodoroTaskslistitem7 = document.createElement('li');
  
      this.modalOverlay = document.createElement('div');
      const modalDelete = document.createElement('div');
      const modalDeleteTitle = document.createElement('p');
      this.modalDeleteCloseButton = document.createElement('button');
      this.modalDeleteDeleteButton = document.createElement('button');
      this.modalDeleteCancelButton = document.createElement('button');
  
      this.modalOverlay.className = 'modal-overlay';
      modalDelete.className = 'modal-delete';
      modalDeleteTitle.className = 'modal-delete__title';
      modalDeleteTitle.textContent = 'Удалить задачу?';
      this.modalDeleteCloseButton.className = 'modal-delete__close-button';
      this.modalDeleteDeleteButton.className = 'modal-delete__delete-button button-primary';
      this.modalDeleteDeleteButton.textContent = 'Удалить';
      this.modalDeleteCancelButton.className = 'modal-delete__cancel-button';
      this.modalDeleteCancelButton.textContent = 'Отмена';
  
      pomodoroTaskslistitem1.className = 'pomodoro-tasks__list-item';
      pomodoroTaskslistitem1.textContent = 'Напишите название задачи чтобы её добавить';
      pomodoroTaskslistitem2.className = 'pomodoro-tasks__list-item';
      pomodoroTaskslistitem2.textContent = 'Чтобы задачу активировать, выберите её из списка';
      pomodoroTaskslistitem3.className = 'pomodoro-tasks__list-item';
      pomodoroTaskslistitem3.textContent = 'Запустите таймер';
      pomodoroTaskslistitem4.className = 'pomodoro-tasks__list-item';
      pomodoroTaskslistitem4.textContent = 'Работайте пока таймер не прозвонит';
      pomodoroTaskslistitem5.className = 'pomodoro-tasks__list-item';
      pomodoroTaskslistitem5.textContent = 'Сделайте короткий перерыв (5 минут)';
      pomodoroTaskslistitem6.className = 'pomodoro-tasks__list-item';
      pomodoroTaskslistitem6.textContent = 'Продолжайте работать, пока задача не будет выполнена.';
      pomodoroTaskslistitem7.className = 'pomodoro-tasks__list-item';
      pomodoroTaskslistitem7.textContent = 'Каждые 4 периода таймера делайте длинный перерыв (15-20 минут).';
      pomodoroTasksHeaderTitle.className = 'pomodoro-tasks__header-title';
      pomodoroTasksHeaderTitle.textContent = 'Инструкция: ';
      pomodoroTasksQuestList.className = 'pomodoro-tasks__quest-list';
      this.pomodoroTasksQuestTasks.className = 'pomodoro-tasks__quest-tasks';
      pomodoroTasksDeadlineTimer.className = 'pomodoro-tasks__deadline-timer';
      pomodoroTasksDeadlineTimer.textContent = '1 час 30 мин';
      this.windowPanelTitle.className = 'window__panel-title';
      this.windowPanelTitle.textContent = '';
      windowPanelTaskText.className = 'window__panel-task-text';
      windowPanelTaskText.textContent = 'Томат 2';
      this.buttonPrimary.className = 'button button-primary';
      this.buttonPrimary.textContent = 'Старт';
      this.buttonSecondary.className = 'button button-secondary';
      this.buttonSecondary.textContent = 'Стоп';
      this.windowTimerText.className = 'window__timer-text';
      this.windowTimerText.textContent = '25:00';
      windowButtons.className = 'window__buttons';
      this.inputPrimary.className = 'task-name input-primary';
      this.inputPrimary.name = 'task-name';
      this.inputPrimary.id = 'task-name';
      this.inputPrimary.placeholder = 'название задачи';
      this.buttonImportance.className = 'button button-importance default';
      this.buttonImportance.type = 'button'
      this.taskFormAddButton.className = 'button button-primary task-form__add-button';
      this.taskFormAddButton.textContent = 'Добавить';
      windowPanel.className = 'window__panel';
      windowBody.className = 'window__body';
      this.taskForm.className = 'task-form';
      this.taskForm.action = 'submit';
      pomodoroFormWindow.className = 'pomodoro-form window';
      pomodoroTasks.className = 'pomodoro-tasks';
      mainContainer.className = 'container main__container';
      mainSection.classList = 'main';
  
      windowPanel.append(this.windowPanelTitle, windowPanelTaskText);
      windowButtons.append(this.buttonPrimary, this.buttonSecondary);
      windowBody.append(this.windowTimerText, windowButtons);
      this.taskForm.append(this.inputPrimary, this.buttonImportance, this.taskFormAddButton);
      pomodoroFormWindow.append(windowPanel, windowBody, this.taskForm);
      pomodoroTasksQuestList.append(pomodoroTaskslistitem1,
      pomodoroTaskslistitem2, pomodoroTaskslistitem3, pomodoroTaskslistitem4,
      pomodoroTaskslistitem5, pomodoroTaskslistitem6, pomodoroTaskslistitem7,);
      pomodoroTasks.append(pomodoroTasksHeaderTitle, pomodoroTasksQuestList, this.pomodoroTasksQuestTasks, pomodoroTasksDeadlineTimer,);
      mainContainer.append(pomodoroFormWindow, pomodoroTasks);
      mainSection.append(mainContainer);
      main.append(mainSection);
      
      modalDelete.append(modalDeleteTitle, this.modalDeleteCloseButton,
      this.modalDeleteDeleteButton, this.modalDeleteCancelButton,);
      this.modalOverlay.append(modalDelete);
      body.append(this.modalOverlay);
    }
  
    renderController() {
      return {
        form : this.taskForm,
        input: this.inputPrimary,
        buttonImportance : this.buttonImportance,
        buttonAdd : this.taskFormAddButton,
        buttonStart : this.buttonPrimary,
        buttonStop : this.buttonSecondary,
        timerText : this.windowTimerText,
        close : this.modalDeleteCloseButton,
        deleteBtn : this.modalDeleteDeleteButton,
        cancel : this.modalDeleteCancelButton,
        modalOverlay : this.modalOverlay,
      }
    }

    addTaskEazy(value) {
      const pomodoroTasksListTask = document.createElement('li');
      const countNumber = document.createElement('span');
      const pomodoroTasksTaskTextActive = document.createElement('button');
      const pomodoroTasksTaskButton = document.createElement('button');

      pomodoroTasksListTask.className = 'pomodoro-tasks__list-task default';
      countNumber.className = 'count-number';
      for (let i = 0; i < value.tasks.length; i++) {
        if (value.inputValue === value.tasks[i].task) {

          countNumber.textContent = i + 1;
        }
        
      }
      pomodoroTasksTaskTextActive.className = 'pomodoro-tasks__task-text';
      pomodoroTasksTaskTextActive.textContent = value.inputValue;
      pomodoroTasksTaskTextActive.addEventListener('click', e => {
        const meaning = new Tomato();
        meaning.activeTasks = pomodoroTasksTaskTextActive.textContent;
        meaning.activeTask();
      });
      pomodoroTasksTaskButton.className = 'pomodoro-tasks__task-button';
      pomodoroTasksTaskButton.addEventListener('click', e => {
        this.choise = document.createElement('div');
        this.choise.style.cssText = `
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;
        height: 83px;
        width: 166px;
        padding: 5px 1px 0 1px;
        right: -10px;
        top: 15px;
        z-index: 1;
        background-color: #F4F4F4;
        border: 1px solid #C4C4C4;
        `;
        this.choiseOne = document.createElement('button');
        this.choiseTwo = document.createElement('button');
        this.choiseOne.textContent = 'Редактировать';
        this.choiseTwo.textContent = 'Удалить';
        this.choiseOne.className = 'popup-button burger-popup__edit-button';
        this.choiseTwo.className = 'popup-button burger-popup__delete-button';
        this.choiseOne.addEventListener('click', e => {
          const izm = e.target.closest(`.pomodoro-tasks__list-task`);
          if (a.children[1].getAttribute('contenteditable') === 'false' ||
          izm.children[1].getAttribute('contenteditable') === null) {
            izm.children[1].setAttribute('contenteditable', 'true');
          } else {
            izm.children[1].setAttribute('contenteditable', 'false');
          }
      });
        this.choiseTwo.addEventListener('click', e => {
          this.modalOverlay.style.cssText = `
          display: block;
          `;
        });
        this.choise.append(this.choiseOne, this.choiseTwo);
        if (pomodoroTasksTaskButton.childNodes.length === 0) {
          pomodoroTasksTaskButton.append(this.choise);
        } else {
          pomodoroTasksTaskButton.children[0].remove()
        }
      });
      pomodoroTasksListTask.append(countNumber, pomodoroTasksTaskTextActive, pomodoroTasksTaskButton);
      this.pomodoroTasksQuestTasks.append(pomodoroTasksListTask);
    }

    addTaskNormal(value) {
      const pomodoroTasksListTask = document.createElement('li');
      const countNumber = document.createElement('span');
      const pomodoroTasksTaskTextActive = document.createElement('button');
      const pomodoroTasksTaskButton = document.createElement('button');

      pomodoroTasksListTask.className = 'pomodoro-tasks__list-task so-so';
      countNumber.className = 'count-number';
      for (let i = 0; i < value.tasks.length; i++) {
        if (value.inputValue === value.tasks[i].task) {

          countNumber.textContent = i + 1;
        }
        
      }
      pomodoroTasksTaskTextActive.className = 'pomodoro-tasks__task-text';
      pomodoroTasksTaskTextActive.textContent = value.inputValue;
      pomodoroTasksTaskTextActive.addEventListener('click', e => {
        const meaning = new Tomato();
        meaning.activeTasks = pomodoroTasksTaskTextActive.textContent;
        meaning.activeTask();
      });
      pomodoroTasksTaskButton.className = 'pomodoro-tasks__task-button';
      pomodoroTasksTaskButton.addEventListener('click', e => {
        this.choise = document.createElement('div');
        this.choise.style.cssText = `
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;
        height: 83px;
        width: 166px;
        padding: 5px 1px 0 1px;
        right: -10px;
        top: 15px;
        z-index: 1;
        background-color: #F4F4F4;
        border: 1px solid #C4C4C4;
        `;
        this.choiseOne = document.createElement('button');
        this.choiseTwo = document.createElement('button');
        this.choiseOne.textContent = 'Редактировать';
        this.choiseTwo.textContent = 'Удалить';
        this.choiseOne.className = 'popup-button burger-popup__edit-button';
        this.choiseTwo.className = 'popup-button burger-popup__delete-button';
        this.choiseOne.addEventListener('click', e => {
          const izm = e.target.closest(`.pomodoro-tasks__list-task`);
          if (a.children[1].getAttribute('contenteditable') === 'false' ||
          izm.children[1].getAttribute('contenteditable') === null) {
            izm.children[1].setAttribute('contenteditable', 'true');
          } else {
            izm.children[1].setAttribute('contenteditable', 'false');
          }
        });
        this.choiseTwo.addEventListener('click', e => {
          this.modalOverlay.style.cssText = `
          display: block;
          `;
        });
        this.choise.append(this.choiseOne, this.choiseTwo);
        if (pomodoroTasksTaskButton.childNodes.length === 0) {
          pomodoroTasksTaskButton.append(this.choise);
        } else {
          pomodoroTasksTaskButton.children[0].remove()
        }
      });
      pomodoroTasksListTask.append(countNumber, pomodoroTasksTaskTextActive, pomodoroTasksTaskButton);
      this.pomodoroTasksQuestTasks.append(pomodoroTasksListTask);
    }

    addTaskHard(value) {
      const pomodoroTasksListTask = document.createElement('li');
      const countNumber = document.createElement('span');
      const pomodoroTasksTaskTextActive = document.createElement('button');
      const pomodoroTasksTaskButton = document.createElement('button');

      pomodoroTasksListTask.className = 'pomodoro-tasks__list-task important';
      countNumber.className = 'count-number';
      for (let i = 0; i < value.tasks.length; i++) {
        if (value.inputValue === value.tasks[i].task) {

          countNumber.textContent = i + 1;
        }
        
      }
      pomodoroTasksTaskTextActive.className = 'pomodoro-tasks__task-text pomodoro-tasks__task-text_active';
      pomodoroTasksTaskTextActive.textContent = value.inputValue;
      pomodoroTasksTaskTextActive.addEventListener('click', e => {
        const meaning = new Tomato();
        meaning.activeTasks = pomodoroTasksTaskTextActive.textContent;
        meaning.activeTask();
      });
      pomodoroTasksTaskButton.className = 'pomodoro-tasks__task-button';
      pomodoroTasksTaskButton.addEventListener('click', e => {
        this.choise = document.createElement('div');
        this.choise.style.cssText = `
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;
        height: 83px;
        width: 166px;
        padding: 5px 1px 0 1px;
        right: -10px;
        top: 15px;
        z-index: 1;
        background-color: #F4F4F4;
        border: 1px solid #C4C4C4;
        `;
        this.choiseOne = document.createElement('button');
        this.choiseTwo = document.createElement('button');
        this.choiseOne.textContent = 'Редактировать';
        this.choiseTwo.textContent = 'Удалить';
        this.choiseOne.className = 'popup-button burger-popup__edit-button';
        this.choiseTwo.className = 'popup-button burger-popup__delete-button';
        this.choiseOne.addEventListener('click', e => {
          const izm = e.target.closest(`.pomodoro-tasks__list-task`);
          if (a.children[1].getAttribute('contenteditable') === 'false' ||
          izm.children[1].getAttribute('contenteditable') === null) {
            izm.children[1].setAttribute('contenteditable', 'true');
          } else {
            izm.children[1].setAttribute('contenteditable', 'false');
          }
      });
        this.choiseTwo.addEventListener('click', e => {
          const a = e.target.closest(`.pomodoro-tasks__quest-tasks`);
          const b = e.target.closest(`.pomodoro-tasks__list-task`);
          for (let i = 0; i < a.children.length; i++) {
            if (a.children[i].children[1].textContent === b.children[1].textContent) {
              a.children[i].remove();
            }
          }
          this.modalOverlay.style.cssText = `
          display: block;
          `;
        });
        this.choise.append(this.choiseOne, this.choiseTwo);
        if (pomodoroTasksTaskButton.childNodes.length === 0) {
          pomodoroTasksTaskButton.append(this.choise);
        } else {
          pomodoroTasksTaskButton.children[0].remove()
        }
      });
      pomodoroTasksListTask.append(countNumber, pomodoroTasksTaskTextActive, pomodoroTasksTaskButton);
      this.pomodoroTasksQuestTasks.append(pomodoroTasksListTask);
    }

    activeTaskRender(value) {
      this.windowPanelTitle.textContent = value;
    }
  }

  class ControllerTomato {
    constructor({form, input, buttonImportance, buttonAdd, buttonStart, buttonStop,
      timerText, close, deleteBtn, cancel, modalOverlay}) {
      this.form = form;
      this.input = input;
      this.buttonImportance = buttonImportance;
      this.buttonAdd = buttonAdd;
      this.buttonStart = buttonStart;
      this.buttonStop = buttonStop;
      this.windowTimerText = timerText;
      this.timer = 1440000;
      this.close = close;
      this.deleteBtn = deleteBtn;
      this.cancel = cancel;
      this.modalOverlay = modalOverlay;
      this.starter = false;
    }
  
    addEvent() {
      this.form.addEventListener('submit', e => {
        e.preventDefault();
        this.returnValue();
      })
  
      this.buttonImportance.addEventListener('click', e => {
        this.select = document.createElement('div');
        this.selectOne = document.createElement('div');
        this.selectOne.style.cssText = `
        background-color: #DC0D27;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        `;
        this.selectTwo = document.createElement('div');
        this.selectTwo.style.cssText = `
        background-color: #F3EC34;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        `;
        this.selectThree = document.createElement('div');
        this.selectThree.style.cssText = `
        background-color: #A9BB30;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        `;
  
        this.select.append(this.selectOne, this.selectTwo, this.selectThree);
        this.select.style.cssText = `
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;
        height: 100px;
        width: 40px;
        padding: 5px 1px 0 1px;
        right: -8px;
        top: -110px;
        background-color: #F4F4F4;
        border: 1px solid #C4C4C4;
        `;

        this.selectOne.addEventListener('click', e => {
          const hard = new Tomato();
          hard.importance = 'Hard';
          this.buttonImportance.style.cssText = `
          background-color: #DC0D27;`;
        });
        this.selectTwo.addEventListener('click', e => {
          const normal = new Tomato();
          normal.importance = 'Normal';
          this.buttonImportance.style.cssText = `
          background-color: #F3EC34;`;
        });
        this.selectThree.addEventListener('click', e => {
          const eazy = new Tomato();
          eazy.importance = 'Eazy';
          this.buttonImportance.style.cssText = `
          background-color: #A9BB30;`;
        });

        if (this.buttonImportance.childNodes.length === 0) {
          this.buttonImportance.append(this.select);
        } else {
          this.buttonImportance.children[0].remove()
        }
      })
      
      this.buttonStart.addEventListener('click', () => {
        const time = this.windowTimerText;
        const start = (x) => {
          if (this.started) {return};
          const startTime = new Date();
          const stopTime = startTime.setMinutes(startTime.getMinutes() + x / 60000);
          const countdown = setInterval(function() {
              const now = new Date().getTime();
              const remain = stopTime - now;
              const minutesZero = () => {
                let a = Math.ceil(remain / 60000);
                if (a < 10) {
                  a = `0` + a;
                }
                return a;
              };
          
              const secondsZero = () => {
                let a = Math.ceil(remain / 1000 % 60);
                if (a < 10) {
                  a = `0` + a;
                }
                return a;
              };

              time.textContent = `${minutesZero()}:${secondsZero()}`;
              if (remain < 0) {
                clearInterval(countdown);
               }
          }, 1000)
          this.started = true;
          this.buttonStop.addEventListener('click', e => {
            clearInterval(countdown);
            const min = time.textContent.slice(0, 2) * 60000;
            const sec = time.textContent.slice(-2) * 1000;
            const minSec = min + sec;
            this.timer = minSec;
            this.started = false;
          })}
          start(this.timer)
      })

      this.close.addEventListener('click', e => {
        this.modalOverlay.style.cssText = `
        display: none;
        `;
      });
      this.deleteBtn.addEventListener('click', e => {
          this.modalOverlay.style.cssText = `
          display: none;
          `;
          hard.renderInit();
      });
      this.cancel.addEventListener('click', e => {
        this.modalOverlay.style.cssText = `
        display: none;
        `;
      });
    }
  
    returnValue() {
      const choise = new Tomato();
    if (choise.importance === 'Eazy') {
      choise.inputValue = this.input.value
      choise.tomatoEazy();
    }
    if (choise.importance === 'Normal') {
      choise.inputValue = this.input.value
      choise.tomatoNormal();
    }
    if (choise.importance === 'Hard') {
      choise.inputValue = this.input.value
      choise.tomatoHard();  
    }
    }
  }

  const render = new RenderTomato();
  render.init();

  const control = new ControllerTomato(render.renderController());
  control.addEvent();

  class Tomato {
    constructor(x) {
      if (Tomato._instance) {
        return Tomato._instance;
      }
      this.tasks = [];
      this.importance = 'Eazy';
      this.activeTasks = '';
      Tomato._instance = this;
    }

    tomatoEazy() {
      this.tasks.push({
        task: this.inputValue,
        importance: this.importance,
      });
      render.addTaskEazy(this);
    }

    tomatoNormal() {
      this.tasks.push({
        task: this.inputValue,
        importance: this.importance,
      });
      render.addTaskNormal(this);
    }

    tomatoHard() {
      this.tasks.push({
        task: this.inputValue,
        importance: this.importance,
      });
      render.addTaskHard(this);
    }

    activeTask() {
      render.activeTaskRender(this.activeTasks);
    }
  }

};

tomatoFunction();
