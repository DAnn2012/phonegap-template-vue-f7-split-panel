/* eslint-disable no-unused-vars */

import Vue from 'vue';
// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/css/framework7.css';

import App from '@/App';

let vm;

// Init F7 Vue Plugin
Framework7.use(Framework7Vue);

describe('App.vue', () => {
  beforeEach(() => {
    vm = new Vue({
      // eslint-disable-line no-new
      el: document.createElement('div')
    });
  });

  describe('Computed', () => {
    /*
    it('should return a computed property for platformClass that matches the platform', () => {
      window.isiOS = true;
      window.isMaterial = false;
      expect(App.computed.platformClass()).to.equal('ios');
      window.isiOS = false;
      window.isMaterial = true;
      expect(App.computed.platformClass()).to.equal('material');
    });
    */
  });
});
