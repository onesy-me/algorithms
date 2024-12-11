/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import * as OnesyAlgorithms from '../src';

group('@onesy/algorithms/factorial', () => {

  to('factorial', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [0, 1, 2, 3, 14].map(item => window.OnesyAlgorithms.factorial(item));
    });
    const valueNode = [0, 1, 2, 3, 14].map(item => OnesyAlgorithms.factorial(item));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([0, 1, 2, 6, 87178291200]));
  });

});
