import Vue from 'vue';
import affix from '../../node_modules/iview/src/components/affix';

import 'iview/dist/styles/iview.css';

const install = function () {
  Vue.component(affix.name, affix);
};

Vue.use(install);

