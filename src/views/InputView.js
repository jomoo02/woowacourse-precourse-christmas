import { Console } from '@woowacourse/mission-utils';
import PRINT_PHRASE from '../constants/printPhrase.js';

const InputView = {
  async readInputData(printString = '') {
    const data = await Console.readLineAsync(printString);
    return data;
  },

  async readDate() {
    const { start, inputVisitDate } = PRINT_PHRASE;
    const visitDate = await InputView.readInputData(`${start}\n${inputVisitDate}\n`);
    return visitDate;
  },

  async readOrder() {
    const order = await InputView.readInputData(`${PRINT_PHRASE.inputOrder}\n`);
    return order;
  },
};

export default InputView;
