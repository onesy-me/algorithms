/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import * as OnesyAlgorithms from '../src';

group('@onesy/algorithms/longestPrefixSuffix', () => {

  to('longestPrefixSuffix', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [window.OnesyAlgorithms.longestPrefixSuffix('asdasuasday')];
    });
    const valueNode = [OnesyAlgorithms.longestPrefixSuffix('asdasuasday')];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([
      [0, 0, 0, 1, 2, 0, 1, 2, 3, 4, 0]
    ]));
  });

});
