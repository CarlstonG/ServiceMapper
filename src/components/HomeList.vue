<template>
 <div class="card homestyle">
  <ul class="list-group list-group-flush">
    <li
    @mouseover="mouseOver(index)"
    @mouseleave="mouseLeave(index)"
    :key="index"
    v-for="(add, index) in address"
    class="list-group-item"><span><i class="fas fa-tools"></i></span> {{add.street}}, {{add.city}}, {{add.state}}</li>
    </ul>
</div>
</template>

<script>
import axios from 'axios';
export default {
     name: "HomeList",
     data () {
    return {
      address: []
    }
  },
 mounted: function() {
    console.log('mounted')
   axios.get('https://api.openbrewerydb.org/breweries')
   .then((r) => {
     this.address = r.data;
   })
  },

  //passing mouse hover event
  methods: {
    mouseOver: function(index) {
      this.$emit('mouse-over-add', index);
    },
    mouseLeave: function(index){
      this.$emit('mouse-left-add', index);
    }
  }
}
</script>

<style scoped>
.homestyle{
  overflow-y: scroll;
  height: 95vh;
  }
  .homestyle ul li:hover {
    background: darkgray;
    border: 2px solid orange;
  }
</style>
