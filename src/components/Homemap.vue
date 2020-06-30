<template>
 <div class="row map" id="app">
   <h2 class="text-center"><span><i class="fa fa-globe"></i></span>{{msg}}</h2>
  <h3>Location {{currentCenter}}, Zoom level is {{currentZoom}}</h3>
    <l-map
    @update:zoom="zoomUpdate"
    @update:center="centerUpdate"
    :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
      :key="index"
       v-for="(add, index) in address"
       :lat-lng="latLng(add.latitude, add.longitude)">
        <!--adding own icons-->
        <l-icon
        :icon-size="add.iconSize"
        :icon-url="icon"
        >

        </l-icon>
       </l-marker>
    </l-map>
 </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';
import Tools from '../assets/Gear-icon.png';


export default {
  name: 'Homemap',
  props: {
      address: Array
  },
  data: function() {

          return {
             zoom:7,
      center: L.latLng(35.219246, -111.622295),
      currentCenter:  L.latLng(35.219246, -111.622295),
      currentZoom: 6,
      url:'https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=ee7f9447e26d42a8935df964c9f86d62',
      attribution:'Carlston G. contributors',
      marker: L.latLng(29.749907, -95.358421),
      icon: Tools,
      iconSize: [35, 35],
      msg: 'Track Service Areas',
          }

  },

   components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  methods: {
    latLng: function(lat, lng) {
      return L.latLng(lat, lng);
    },
    centerUpdate: function(center) {
      this.currentCenter = center
    },
    zoomUpdate: function(zoom) {
      this.currentZoom = zoom
    }
  }
}
</script>

<style scoped >
    .map {
      height: 95vh;
    }
    .map h2{
      text-align: center;
      justify-content: center;
      justify-self: center;
      padding-left: 10rem;
    }
</style>
