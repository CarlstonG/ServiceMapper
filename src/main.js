import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import Vue from 'vue'
import App from './App'

import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
