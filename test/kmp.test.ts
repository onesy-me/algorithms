/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import * as OnesyAlgorithms from '../src';

group('@onesy/algorithms/kmp', () => {

  to('kmp', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [window.OnesyAlgorithms.kmp('Lorem ipsum lorem', 'lorem'), window.OnesyAlgorithms.kmp('Lorem ipsum lorem', 'loremipsu')];
    });
    const valueNode = [OnesyAlgorithms.kmp('Lorem ipsum lorem', 'lorem'), OnesyAlgorithms.kmp('Lorem ipsum lorem', 'loremipsu')];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([true, false]));
  });

});
