/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import * as OnesyAlgorithms from '../src';

group('@onesy/algorithms/factorialRecursive', () => {

  to('factorialRecursive', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [0, 1, 2, 3, 14].map(item => window.OnesyAlgorithms.factorialRecursive(item));
    });
    const valueNode = [0, 1, 2, 3, 14].map(item => OnesyAlgorithms.factorialRecursive(item));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([0, 1, 2, 6, 87178291200]));
  });

});
