<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-container grid-list-xl>
        <v-flex d-flex>
          <v-flex xs12 sm8 md8 style="border-radius: 40px;">
            <v-text-field label="Search" solo class="my-input"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4 md4>
            <v-btn color="default" @click="openCreateRequest()"> Create </v-btn>
          </v-flex>
        </v-flex>
        <v-flex d-flex>
          <v-flex xs12 sm9 md9>
            <v-btn-toggle
              v-model="toggleGroup"
              multiple
              group
              style="text-transform: capitalize;"
            >
              <v-btn value="new" class="status-button"> New 5 </v-btn>
              <v-btn value="pending" class="status-button"> Pending 3</v-btn>
              <v-btn value="approved" class="status-button"> Approved 5</v-btn>
              <v-btn value="inprogress" class="status-button">
                Inprogress 4</v-btn
              >
              <v-btn value="complete" class="status-button"> Complete 2</v-btn>
              <v-btn value="rejected" class="status-button"> Rejected 3</v-btn>
            </v-btn-toggle>
          </v-flex>
          <v-flex xs12 sm3 md3>
            <v-select
              v-bind:sortFilters="sortFilters"
              v-model="select"
              label="Sort By"
              single-line
              :hide-details="hideDetails"
              hint="Hint of Select"
              item-text="state"
              item-value="state"
              return-object
              autocomplete
            ></v-select>
          </v-flex>
        </v-flex>
        <v-flex d-flex>
          <v-flex xs12 sm12 md12>
            <v-expansion-panel
              v-for="(item, index) in requests"
              :key="item.title"
            >
              <v-expansion-panel-content>
                <div slot="header">
                  <v-icon class="icon-size">thumb_up</v-icon> {{ item.likes }}
                  <span style="font-size: 21px;"> {{ item.title }}</span>
                </div>
                <v-divider></v-divider>
                <v-container fluid grid-list-lg>
                  <v-layout wrap>
                    <div
                      v-for="(comment, index) in item.comments"
                      :key="item.content"
                      style="padding:20px"
                    >
                      <div>
                        <v-icon class="icon-size">visibility</v-icon
                        >{{ item.views }} {{ comment.content }}
                      </div>
                      <v-textarea
                        v-if="index == item.comments.length - 1"
                        value=""
                        solo
                        rows="3"
                        auto-grow
                      ></v-textarea>
                      <v-btn
                        style="float:right"
                        v-if="index == item.comments.length - 1"
                        >POST</v-btn
                      >
                      <v-divider
                        v-if="index + 1 < item.comments.length"
                      ></v-divider>
                    </div>
                  </v-layout>
                </v-container>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
        </v-flex>
      </v-container>
      <v-container>
        <v-dialog v-model="showModal" width="800" color="#fff">
          <v-card>
            <v-card-title class="headline white lighten-2">
              New Request
              <v-spacer></v-spacer>
              <v-icon @click="showModal = false">close</v-icon>
            </v-card-title>
            <v-card-text>
            <template>
  <v-file-input accept="image/*" label="File input"></v-file-input>
</template>
              <v-file-input
                counter
                show-size
                chips
                multiple
                clearable
                label="Attachments"
              ></v-file-input>
              <v-text-field label="Subject" v-model="subject"></v-text-field>
              <v-flex d-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    label="Priority"
                    :items="priorities"
                    v-model="Priority"
                  ></v-select>
                </v-flex>
                 <v-flex xs12 sm6 md6>

                 </v-flex>
              </v-flex>
              <v-select
                label="Library"
                :items="libraries"
                v-model="library"
              ></v-select>
              <v-flex d-flex>
              <v-flex xs12 sm4 md4>
               <v-text-field label="File name" v-model="filename"></v-text-field>
              </v-flex>
              <v-flex xs12 sm8 md8 d-flex>
                <span class="unit-measure-label">Units Of measure:</span>  <v-checkbox :input-value="checkbox1" :label="`Imperial`" color="#424242"></v-checkbox>
                 <v-checkbox :input-value="checkbox1" :label="`Metric`" color="#424242"></v-checkbox>
              </v-flex>
              </v-flex>
             
              <v-textarea label="Comment" v-model="comment"></v-textarea>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="default" text @click="showModal = false">
                Submit
              </v-btn>
              <v-btn color="default" text @click="showModal = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import json from "../../assets/request.json";
export default {
  data() {
    return {
      select: { state: "Florida", abbr: "FL" },
      hideDetails: true,
      files: [],
      selected: "",
      showModal: false,
      requests: json,
      comments: [
        {
          action: "local_activity",
          title: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`
        },
        {
          action: "local_activity",
          title: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`
        }
      ],
      sortFilters: [
        { state: "Sort By" },
        { state: "Georgia" },
        { state: "Nebraska" },
        { state: "California" },
        { state: "New York" }
      ],
      toggleGroup: "new",
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando.`
    };
  },
  methods: {
    openCreateRequest() {
      event.preventDefault();
      var vm = this;
      vm.showModal = true;
    }
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
.stats-div {
  min-height: 146px;
  border: 1px solid #dadada !important;
}
.my-input {
  border-radius: 32px !important;
}
.v-btn--active {
  background: #fff !important;
}
.icon-size {
  font-size: 18px;
  font-weight: 600;
  color: #000;
}
.status-button {
  text-transform: capitalize;
}
.unit-measure-label{
line-height: 55px;
  margin-left: 30px;
}
</style>
