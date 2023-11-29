import { Console } from '@woowacourse/mission-utils';
import PRINT_PHRASE from '../constants/printPhrase.js';

const InputView = {
  async readInputData(printString) {
    const data = await Console.readLineAsync(`${printString}\n`);
    return data;
  },

  async readDate() {
    const { start, inputVisitDate } = PRINT_PHRASE;
    const visitDate = await InputView.readInputData(`${start}\n${inputVisitDate}`);
    return visitDate;
  },

  async readOrder() {
    const order = await InputView.readInputData(PRINT_PHRASE.inputOrder);
    return order;
  },
};

export default InputView;
