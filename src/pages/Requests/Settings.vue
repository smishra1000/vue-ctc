<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
        <v-container fluid>
         <v-switch :label="`Enable Request System`" v-model="ex6" class="request-heading-label" color="green"></v-switch>
        </v-container fluid>
          <v-container fluid>
         
          <v-checkbox :input-value="checkbox1" :label="`Enable Voting`" color="#424242"></v-checkbox>
           <v-checkbox :input-value="checkbox1" :label="`Enable Comment Visibility`" color="#424242"></v-checkbox>
          </v-container fluid>
           <v-container fluid>
            <h4 style="text-align:left">Email Notification Settings</h4>
           <v-checkbox :input-value="checkbox1" :label="`On New Request`" color="#424242"></v-checkbox>
            <v-checkbox :input-value="checkbox1" :label="`On New Request Status Updates`" color="#424242"></v-checkbox>
            <v-checkbox :input-value="checkbox1" :label="`On New Request Comments`" color="#424242"></v-checkbox>
           </v-container fluid>
        </v-layout>
      </v-container>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      ex6: true,
      checkbox1: true,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando.`
    };
  }
};
</script>

<style scoped>
.center-text {
  font-size: 60px;
}
.label-text {
  position: absolute;
  left: 0px;
  padding: 6px;
  font-size: 12px;
}
.label-text-request{
  top: 93px;
    position: absolute;
    left: 109px;
    font-size: 27px;
}
.request-heading-label > v.label{
    font-size: 24px !important;
    font-weight: 600 !important;
    .accent--text{
      color:red !important
    }
}
.stats-div{
  min-height: 146px;
  border: 1px solid #dadada !important;
}
</style>
