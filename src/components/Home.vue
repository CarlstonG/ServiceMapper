<template>
<div class="container home">
  <div class="row">
    <div class="col-12">
      <h1 class="text-center text-info">{{msg}}</h1>

    </div>
  </div>
  <div class="row">
    <div class="col-4">
        <h2 class="text-center"><span><i class="fa fa-cog"></i></span> {{na}} {{mssg}}</h2>
        <HomeList
        @mouse-over-add="mouseOveradd"
        @mouse-left-add="mouseLeftadd"

        />
    </div>
    <div class="col-8">

        <Homemap :address="address"/>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import HomeList from './HomeList';
import Homemap from './Homemap';

//https://api.openbrewerydb.org/breweries
export default {

  name: 'Home',
  components:
  {
    HomeList,
    Homemap
  },
  data () {
    return {
      msg: 'Welcome to GigWire Service Mapper',
      na: 'Address',
      mssg: 'List -- For Service',
      address: [],
      normalIcon: [35, 35],
      largeIcon: [75, 75]
    }
  },
   mounted: function() {
    console.log('mounted')
   axios.get('https://api.openbrewerydb.org/breweries')
   .then((r) => {
     this.address = r.data.filter(r => r.state == 'Arizona')
     .map(r => {
       r.iconSize = this.normalIcon;
       return r;
     });
   })
  },
  methods: {
    mouseOveradd: function(index) {
      //console.log(index + 'mouse over');
      this.address[index].iconSize = this.largeIcon;
    },
    mouseLeftadd: function(index) {
     // console.log(index + 'mouse');
      this.address[index].iconSize = this.normalIcon;
    }
  }
}
</script>

<style scoped>
.text-info {
  padding-bottom: 1rem!important;
}
</style>
