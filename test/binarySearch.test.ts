/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import * as OnesyAlgorithms from '../src';

group('@onesy/algorithms/binarySearch', () => {

  to('binarySearch', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [window.OnesyAlgorithms.binarySearch([1, 2, 3, 4], 4), window.OnesyAlgorithms.binarySearch([1, 2, 3, 4], 14)];
    });
    const valueNode = [OnesyAlgorithms.binarySearch([1, 2, 3, 4], 4), OnesyAlgorithms.binarySearch([1, 2, 3, 4], 14)];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([3, -1]));
  });

});
