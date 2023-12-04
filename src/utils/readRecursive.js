import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';

async function readRecursive(readFunc, TargetObj) {
  try {
    const data = await readFunc();
    const obj = new TargetObj(data);
    return obj;
  } catch (error) {
    Console.print(error.message);
    return readRecursive(InputView.readInputData, TargetObj);
  }
}

export default readRecursive;
