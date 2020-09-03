<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-container grid-list-xl text-xs-center>
        <v-flex d-flex md12 sm12 xs12>
          <v-card>
            <v-card-title>
              <v-flex d-flex md12 sm12 xs12>
                <v-text-field
                  append-icon="search"
                  label="Search"
                  single-line
                  hide-details
                  v-model="search"
                ></v-text-field>
                <div style="margin-top: 20px;text-align:end">
                  <v-icon class="file-icon">file_copy</v-icon>
                  <v-icon class="file-icon">file_copy</v-icon>
                  <v-icon class="file-icon"> create_new_folder</v-icon>
                  <v-icon class="file-icon">clear</v-icon>
                </div>
              </v-flex>
            </v-card-title>
            <v-data-table
              v-model="selected"
              v-bind:headers="headers"
              v-bind:items="items"
              select-all
              :search="search"
              v-bind:pagination.sync="pagination"
              item-key="name"
              class="elevation-1"
            >
              <template slot="headers" scope="props">
                <tr>
                  <th>
                    <v-checkbox
                      primary
                      hide-details
                      @click.native="toggleAll"
                      :input-value="props.all"
                      :indeterminate="props.indeterminate"
                    ></v-checkbox>
                  </th>
                  <th style="visibility:hidden">Action</th>
                  <th
                    v-for="header in props.headers"
                    :key="header.text"
                    :class="[
                      'column sortable',
                      pagination.descending ? 'desc' : 'asc',
                      header.value === pagination.sortBy ? 'active' : ''
                    ]"
                    @click="changeSort(header.value)"
                  >
                    <v-icon>arrow_upward</v-icon>
                    {{ header.text }}
                  </th>
                </tr>
              </template>
              <template slot="items" scope="props">
                <tr
                  :active="props.selected"
                  style="cursor:pointer"
                >
                  <td style="width:15px">
                    <v-checkbox
                      primary
                      hide-details
                      :input-value="props.selected"
                    ></v-checkbox>
                  </td>
                  <td  style="width:15px" @click="showAlert(props.item, $event, props.index)"><v-icon style="font-size:35px;">edit</v-icon></td>
                  <td class="text-xs">{{ props.item.projectNumber }}</td>
                  <td class="text-xs">{{ props.item.projectName }}</td>
                  <td class="text-xs">{{ props.item.accessLevel }}</td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-container>
      <v-container>
        <v-dialog v-model="showModal">
          <v-stepper v-model="e1" v-if="!isStepHidden">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1"
                >Project Deatils</v-stepper-step
              >
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <form data-vv-scope="form1">
                  <v-flex d-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="projectname" label="Project Name">
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="projectnumber"
                        label="Project Number"
                      >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="accesslevel" label="Access Level">
                      </v-text-field>
                    </v-flex>
                  </v-flex>
                  <v-flex xs3 offset-xs9 align-end>
                  <v-btn color="default" @click="updateUser()"> Save </v-btn>
                    <v-btn color="default" @click.stop="showModal = false"
                      >Close
                    </v-btn>
                  </v-flex>
                </form>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-dialog>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e1: 0,
      projectname: "",
      projectnumber: "",
      accesslevel: "",

      isStepHidden: false,
      isLoading: true,
      menu2: false,
      showModal: false,
      pagination: {
        sortBy: "projectName"
      },
      search: "",
      selected: [],
      headers: [
        { text: "Project Number", value: "projectNumber" },
        { text: "Project Name", value: "projectName" },
        { text: "Access Level", value: "accessLevel" }
      ],
      items: [
      ]
    };
  },
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.items.slice();
    },
    showAlert(a, e,index) {
      event.preventDefault();

      var vm = this;
      vm.showModal = true;
      vm.selectedIndex = index;
      vm.projectnumber = a.projectNumber;
      vm.projectname = a.projectName;
      vm.accesslevel = a.accessLevel;
    },
     updateUser() {
      var vm = this;
      let obj = {
      projectNumber : vm.projectnumber,
      projectName : vm.projectname,
      accessLevel : vm.accesslevel,
      };
      Object.assign(vm.items[vm.selectedIndex], obj);
      vm.showModal = false;
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    stepContinue(scope) {
      if (this.e1 === 3) {
        // Show loading
        this.isLoading = false;
        this.isStepHidden = true;

        // SEND COMPANY DETAILS
      } else {
        if (this.e1 == 0) {
          this.e1 = this.e1 + 2;
        } else {
          this.e1++;
        }
      }
    },
    goBack() {
      this.e1--;
    },

    goNextStep() {
      console.log(this.e1);
      if (this.e1 === 3) {
        // Show loading
        this.isLoading = false;
        this.isStepHidden = true;
      } else {
        this.e1++;
      }
    },
    mounted: function() {
      this.projectname = "cms";
      this.projectnumber = "mis12345hra";
      this.accesslevel = "manager";
    }
  },
  created() {
    const vm = this;

    vm.axios.get('https://my-json-server.typicode.com/srinu0681/jsontestdataprovider/projects/').then(response => {
      var result = response && response.data;

      vm.items = result;
    });
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
.file-icon {
  font-size: 31px;
}
.v-btn__content{
  font-weight: 600;
}
.v-btn--active > .v-btn__content {
    background: #616161;
    padding: 13px;
    border-radius: 7px;
}
</style>
