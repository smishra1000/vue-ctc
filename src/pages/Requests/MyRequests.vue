<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 sm12>
            <h1>MyRequest</h1>
          </v-flex>
        </v-layout>
      </v-container>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando.`
    };
  }
};
</script>

<style>
.center-text {
  font-size: 60px;
}
.label-text {
  position: absolute;
  left: 0px;
  padding: 6px;
  font-size: 12px;
}
.stats-div{
  min-height: 146px;
  border: 1px solid #dadada !important;
}
</style>
