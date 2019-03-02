import { expect, tap } from '@pushrocks/tapbundle';
import * as smartcheck from '../ts/index';

tap.test('first test', async () => {
  console.log(smartcheck.standardExport);
});

tap.start();
