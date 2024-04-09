export class RenderTomato {
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
      const windowTimerText = document.createElement('p');
      const windowButtons = document.createElement('div');
      this.buttonPrimary = document.createElement('button');
      this.buttonSecondary = document.createElement('button');
      const windowPanelTitle = document.createElement('p');
      const windowPanelTaskText = document.createElement('p');
      const pomodoroTasksHeaderTitle = document.createElement('p');
      const pomodoroTasksQuestList = document.createElement('ul');
      const pomodoroTasksQuestTasks = document.createElement('ul');
      const pomodoroTasksDeadlineTimer = document.createElement('p');
      const pomodoroTaskslistitem1 = document.createElement('li');
      const pomodoroTaskslistitem2 = document.createElement('li');
      const pomodoroTaskslistitem3 = document.createElement('li');
      const pomodoroTaskslistitem4 = document.createElement('li');
      const pomodoroTaskslistitem5 = document.createElement('li');
      const pomodoroTaskslistitem6 = document.createElement('li');
      const pomodoroTaskslistitem7 = document.createElement('li');
  
      const modalOverlay = document.createElement('div');
      const modalDelete = document.createElement('div');
      const modalDeleteTitle = document.createElement('p');
      const modalDeleteCloseButton = document.createElement('button');
      const modalDeleteDeleteButton = document.createElement('button');
      const modalDeleteCancelButton = document.createElement('button');
  
      modalOverlay.className = 'modal-overlay';
      modalDelete.className = 'modal-delete';
      modalDeleteTitle.className = 'modal-delete__title';
      modalDeleteTitle.textContent = 'Удалить задачу?';
      modalDeleteCloseButton.className = 'modal-delete__close-button';
      modalDeleteDeleteButton.className = 'modal-delete__delete-button button-primary';
      modalDeleteDeleteButton.textContent = 'Удалить';
      modalDeleteCancelButton.className = 'modal-delete__cancel-button';
      modalDeleteCancelButton.textContent = 'Отмена';
  
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
      pomodoroTasksQuestTasks.className = 'pomodoro-tasks__quest-tasks';
      pomodoroTasksDeadlineTimer.className = 'pomodoro-tasks__deadline-timer';
      pomodoroTasksDeadlineTimer.textContent = '1 час 30 мин';
      windowPanelTitle.className = 'window__panel-title';
      windowPanelTitle.textContent = 'Сверстать сайт';
      windowPanelTaskText.className = 'window__panel-task-text';
      windowPanelTaskText.textContent = 'Томат 2';
      this.buttonPrimary.className = 'button button-primary';
      this.buttonPrimary.textContent = 'Старт';
      this.buttonSecondary.className = 'button button-secondary';
      this.buttonSecondary.textContent = 'Стоп';
      windowTimerText.className = 'window__timer-text';
      windowTimerText.textContent = '25:00';
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
  
      windowPanel.append(windowPanelTitle, windowPanelTaskText);
      windowButtons.append(this.buttonPrimary, this.buttonSecondary);
      windowBody.append(windowTimerText, windowButtons);
      this.taskForm.append(this.inputPrimary, this.buttonImportance, this.taskFormAddButton);
      pomodoroFormWindow.append(windowPanel, windowBody, this.taskForm);
      pomodoroTasksQuestList.append(pomodoroTaskslistitem1,
      pomodoroTaskslistitem2, pomodoroTaskslistitem3, pomodoroTaskslistitem4,
      pomodoroTaskslistitem5, pomodoroTaskslistitem6, pomodoroTaskslistitem7,);
      pomodoroTasks.append(pomodoroTasksHeaderTitle, pomodoroTasksQuestList, pomodoroTasksQuestTasks, pomodoroTasksDeadlineTimer,);
      mainContainer.append(pomodoroFormWindow, pomodoroTasks);
      mainSection.append(mainContainer);
      main.append(mainSection);
      
      modalDelete.append(modalDeleteTitle, modalDeleteCloseButton,
      modalDeleteDeleteButton, modalDeleteCancelButton,);
      modalOverlay.append(modalDelete);
      body.append(modalOverlay);
    }
  
    renderController() {
      return {
        form : this.taskForm,
        input: this.inputPrimary,
        buttonImportance : this.buttonImportance,
        buttonAdd : this.taskFormAddButton,
        buttonStart : this.buttonPrimary,
        buttonStop : this.buttonSecondary,
      }
    }

    addTaskEazy(value) {
      console.log(value)
    }

    addTaskNormal(value) {
      console.log(value)
    }

    addTaskHard(value) {
      console.log(value)
    }
  }
