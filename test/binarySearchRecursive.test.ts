/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import * as OnesyAlgorithms from '../src';

group('@onesy/algorithms/binarySearchRecursive', () => {

  to('binarySearchRecursive', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [window.OnesyAlgorithms.binarySearchRecursive([1, 2, 3, 4], 4), window.OnesyAlgorithms.binarySearchRecursive([1, 2, 3, 4], 14)];
    });
    const valueNode = [OnesyAlgorithms.binarySearchRecursive([1, 2, 3, 4], 4), OnesyAlgorithms.binarySearchRecursive([1, 2, 3, 4], 14)];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([3, -1]));
  });

});
