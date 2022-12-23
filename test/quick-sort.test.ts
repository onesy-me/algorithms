/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import * as AmauiAlgorithms from '../src';

group('@amaui/algorithms/quick-sort', () => {

  to('quickSort', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return window.AmauiAlgorithms.quickSort([1, -14, 4, 114, -414, 14]);
    });
    const valueNode = AmauiAlgorithms.quickSort([1, -14, 4, 114, -414, 14]);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([-414, -14, 1, 4, 14, 114]));
  });

});
