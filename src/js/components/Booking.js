import {select, templates} from '../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking {
  constructor(element){
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();

  }

  render(element) {
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;

    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = document.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = document.querySelector(select.booking.hoursAmount);

    thisBooking.dom.datePicker = document.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPicker = document.querySelector(select.widgets.hourPicker.wrapper);

  }

  initWidgets() {
    const thisBooking = this;

    thisBooking.datePicker = new DatePicker (thisBooking.dom.datePicker);
    thisBooking.dom.datePicker.addEventListener ('click', function(){});

    thisBooking.hourPicker = new HourPicker (thisBooking.dom.hourPicker);
    thisBooking.dom.hourPicker.addEventListener ('click', function(){});

    thisBooking.peopleAmountWidget = new AmountWidget (thisBooking.dom.peopleAmount);
    thisBooking.dom.peopleAmount.addEventListener ('click', function(){});

    thisBooking.hoursAmountWidget = new AmountWidget (thisBooking.dom.hoursAmount);
    thisBooking.dom.hoursAmount.addEventListener ('click', function(){});
  }
}


export default Booking;
