<template>
  <div class="notice">
   <div class="inner">
        <div class="title">
            <span class="name">{{noticeData.name}}</span>
            <span class="version" data-bind="text: model.version"></span>
        </div>
        <div class="statusline" data-bind="css: {ok: model.status() === 'OK', warning: model.status() === 'WARNING', error: model.status() === 'ERROR'}"></div>

        <div style="width: auto; height: 150px;">
            <div data-bind="attr: { id: getId() }"></div>
        </div>

        <!-- ko foreach: model.dependencies -->
            <dependency params="value: $data"></dependency>
        <!-- /ko -->

   </div>
   <div class="end"></div>
   </div>
</template>

<script>
export default {
  name: 'notice',
  props: ['noticeData'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.notice {
  margin: 1rem;
  flex-grow: 1;
  min-width: 20rem;
//  max-width: calc(100% / 4);
}

$backgroundColor: #E0F7FA;
$red: #F44336;
$green: #4CAF50;
$yellow: #FFEB3B;

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.inner {
    background-color: #1b6a98;
    //box-shadow: 0px 7px 18px 0px rgba(0,0,0,0.60);
    width: inherit;
    height: inherit;
    width: 100%;

    .title {
      display: flex;
      justify-content: space-between;

      background-color: #000000;
      padding: 3px;
      margin-bottom: 0px;

      .name {
        color: #ffffff;
        margin: 0px;
        padding-left: 0.1rem;
        //font-family: 'Lato', sans-serif;
        font-size: 1.2em;
        font-weight: 600;
      }

      .version {
        text-align: right;
        color: #ffffff;
        //font-family: 'Lato', sans-serif;
        font-size: 1.2em;
      }
    }

    .statusline {
      //transition: background-color 0.5s;
      height: 15px;
      box-shadow: inset 0px 7px 18px -8px rgba(0,0,0,0.75);

      &.ok {
        background-color: $green;
      }
      &.warning {
        animation: pulseWarning 3s infinite;
        @keyframes pulseWarning {
          0% {
            background-color: $yellow;
          }
          50% {
            background-color: #9d9124;
          }
          100% {
            background-color: $yellow;
          }
        }
      }
      &.error {
        animation: pulseError 3s infinite;
        @keyframes pulseError {
          0% {
            background-color: $red;
          }
          50% {
            background-color: #ae3026;
          }
          100% {
            background-color: $red;
          }
        }
      }
    }

  }
  .end {
    background-color: #0d3349;
    margin-top: 3px;
    height: 15px;
    width: 100%;
    border-radius:  0px 0px 5px 5px  ;
    box-shadow: 0px 7px 18px 0px rgba(0,0,0,0.60);
  }
</style>
