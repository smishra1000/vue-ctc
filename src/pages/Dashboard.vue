<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 sm12>
              <v-layout row wrap pa-3>
                <v-flex xs12 sm6 md3>
                  <v-card class="stats-div">
                    <label class="label">
                      <span class="label__text">
                        <span class="label-text"> Total Users </span>
                      </span>
                    </label>
                    <v-card-text class="center-text">9</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm6 md3 >
                  <v-card class="stats-div">
                    <label class="label">
                      <span class="label__text">
                        <span class="label-text">New Users </span>
                      </span>
                    </label>
                    <v-card-text class="center-text">9</v-card-text>
                  </v-card>
                </v-flex>
                 <v-flex xs12 sm6 md3 >
                  <v-card class="stats-div">
                    <label class="label">
                      <span class="label__text">
                        <span class="label-text">Active Users Now </span>
                      </span>
                    </label>
                    <v-card-text class="center-text"><pie-chart  style="width: 200px; height: 100px;margin-top: 10px;" /></v-card-text>
                  </v-card>
                </v-flex>
                 <v-flex xs12 sm6 md3 >
                  <v-card class="stats-div">
                    <label class="label">
                      <span class="label__text">
                        <span class="label-text">Active User Current Now </span>
                      </span>
                    </label>
                    <v-card-text class="center-text"><pie-chart  style="width: 200px; height: 100px;margin-top: 10px;" /></v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-xl text-xs-center>
         <v-flex d-flex>
              <v-flex xs12 sm6 md6 style="background:#fff">
              <h4>Users By Office</h4>
              <bar-chart style="border: 1px solid" />
              </v-flex>
              <v-flex xs12 sm6 md6>
               <h4>Users By Office</h4>
              <bar-chart style="border: 1px solid" />
              </v-flex>
          </v-flex>
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
