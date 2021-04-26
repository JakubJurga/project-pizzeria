import {settings, select} from '../settings.js';

class AmountWidget {
  constructor(element) {
    const thisWidget = this;

    thisWidget.getElements(element);
    thisWidget.value = settings.amountWidget.defaultValue;
    thisWidget.setValue(thisWidget.input.value);

    thisWidget.initActions();
    /*console.log('AmountWidget:', thisWidget);
    console.log('constructor arguments:', element); */
  }


  getElements(element){
    const thisWidget = this;

    thisWidget.element = element;
    thisWidget.input = thisWidget.element.querySelector(select.widgets.amount.input);
    thisWidget.linkDecrease = thisWidget.element.querySelector(select.widgets.amount.linkDecrease);
    thisWidget.linkIncrease = thisWidget.element.querySelector(select.widgets.amount.linkIncrease);
  }

  setValue(value){
    const thisWidget = this;
    const newValue = parseInt(value);
    //value ? parseInt(value) : 1;

    /* TODO: Add validation */
    if(thisWidget.value !== newValue && !isNaN(newValue) && newValue >= settings.amountWidget.defaultMin && newValue <= settings.amountWidget.defaultMax) {
      thisWidget.value = newValue;
      thisWidget.announce();  // Nie wiem, czy umiescilem to we wlasciwym miejscu
    }
    thisWidget.input.value = thisWidget.value;
  }

  initActions () {

    const thisWidget = this;

    thisWidget.input.addEventListener('change', function () {
      event.preventDefault();
      console.log(thisWidget.value, 'change');
      thisWidget.setValue (thisWidget.input.value);

    });

    thisWidget.linkDecrease.addEventListener('click',  function (event) {
      event.preventDefault();
      console.log(thisWidget.value, 'click');
      thisWidget.setValue (thisWidget.value -1);

    });


    thisWidget.linkIncrease.addEventListener('click',  function (event) {
      event.preventDefault();
      thisWidget.setValue (thisWidget.value +1);
    });


  }

  announce () {
    const thisWidget = this;
    const event = new CustomEvent ('updated', {
      bubbles: true
    });

    thisWidget.element.dispatchEvent(event);
  }
}

export default AmountWidget;