<template>
  <div class="pinboard">
    <Notice
      v-for="(notice, index) in notices"
      v-bind:noticeData="notice"
      v-bind:index="index" />
  </div>
</template>

<script>

import Notice from './Notice.vue' 

export default {
  name: 'pinboard',
  data () {
    return {
      
    }
  },
  computed: {
    notices: function () {
      return this.$store.state.notices;
    }
  },  
  components: {
    Notice
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pinboard {
    margin-top: 1rem;
    display: flex;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
  }


</style>
