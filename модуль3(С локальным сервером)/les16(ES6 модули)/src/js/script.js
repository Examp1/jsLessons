'use strict';

// import {one as first, two} from './main';

import * as data from './main';
// импорт дефолтного експорта
import sayHi from './main';

console.log(`${data.one} and ${data.two}`);
sayHi();