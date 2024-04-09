export class ControllerTomato {
    constructor({form, input, buttonImportance, buttonAdd, buttonStart, buttonStop}) {
      this.form = form;
      this.input = input;
      this.buttonImportance = buttonImportance;
      this.buttonAdd = buttonAdd;
      this.buttonStart = buttonStart;
      this.buttonStop = buttonStop;
      this.importance = 'Eazy';
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
  
        this.selectOne.addEventListener('click', e => {
          this.importance = 'Hard';
        });
        this.selectTwo.addEventListener('click', e => {
          this.importance = 'Normal';
        });
        this.selectThree.addEventListener('click', e => {
          this.importance = 'Eazy';
        });
  
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
        if (this.buttonImportance.childNodes.length === 0) {
          this.buttonImportance.append(this.select);
        } else {
          this.buttonImportance.children[0].remove()
        }
      })
      
      this.buttonStart.addEventListener('click', e => {
        console.log(1);
      })
      
      this.buttonStop.addEventListener('click', e => {
        console.log(1);
      })
    }
  
    returnValue() {
        return {
            importance: this.importance,
            inputValue: this.input.value,
          };
    }
  }