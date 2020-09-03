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
                  <td class="text-xs">
                    {{ props.item.firstName }} {{ props.item.lastName }}
                  </td>
                  <td class="text-xs">{{ props.item.email }}</td>
                  <td class="text-xs">{{ props.item.office }}</td>
                  <td class="text-xs">{{ props.item.department }}</td>
                  <td class="text-xs">{{ props.item.status }}</td>
                  <td class="text-xs">{{ props.item.updatedAt }}</td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-container>
      <v-container>
        <v-dialog v-model="showModal">
          <v-stepper v-model="e1" v-if="!isStepHidden">
          <h1 class="user-update-header">{{firstname}} {{lastname}}</h1>
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1"
                >Details</v-stepper-step
              >
              <v-icon
                @click.native="stepContinue('form1')"
                style="font-size: 42px;margin-top: 18px;"
                >keyboard_arrow_right</v-icon
              >

              <v-stepper-step :complete="e1 > 2" step="2"
                >Select Roles and Groups</v-stepper-step
              >
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <form data-vv-scope="form1">
                  <v-flex d-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="firstname"
                        label="First Name"
                        data-vv-name="Contact_FirstName"
                        data-vv-scope="form1"
                        data-vv-as="First Name"
                      >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="lastname"
                        label="Last Name"
                        data-vv-name="Contact_LastName"
                        data-vv-scope="form1"
                        data-vv-as="Last Name"
                      >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="email"
                        label="Email"
                        data-vv-name="Contact_Email"
                        data-vv-scope="form1"
                        data-vv-as="Contact Email"
                      >
                      </v-text-field>
                    </v-flex>
                  </v-flex>
                  <v-flex d-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="office"
                        label="Office"
                        data-vv-name="Contact_FirstName"
                        data-vv-scope="form1"
                        data-vv-as="First Name"
                      >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="department"
                        label="Department"
                        data-vv-name="Contact_LastName"
                        data-vv-scope="form1"
                        data-vv-as="Last Name"
                      >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="description"
                        label="Description"
                        data-vv-name="Contact_Email"
                        data-vv-scope="form1"
                        data-vv-as="Contact Email"
                      >
                      </v-text-field>
                    </v-flex>
                  </v-flex>
                  <v-flex d-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="status"
                        label="Status"
                        data-vv-name="Contact_Phone"
                        data-vv-scope="form1"
                        data-vv-as="Contact Phone"
                      >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-btn color="default"> Change Password </v-btn>
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
              <v-stepper-content step="2">
                <form data-vv-scope="form1">
                  <v-flex d-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="firstname"
                        label="First Name"
                        data-vv-name="Contact_FirstName"
                        data-vv-scope="form1"
                        data-vv-as="First Name"
                      >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="lastname"
                        label="Last Name"
                        data-vv-name="Contact_LastName"
                        data-vv-scope="form1"
                        data-vv-as="Last Name"
                      >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="email"
                        label="Email"
                        data-vv-name="Contact_Email"
                        data-vv-scope="form1"
                        data-vv-as="Contact Email"
                      >
                      </v-text-field>
                    </v-flex>
                  </v-flex>
                  <v-flex d-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="office"
                        label="Office"
                        data-vv-name="Contact_FirstName"
                        data-vv-scope="form1"
                        data-vv-as="First Name"
                      >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="department"
                        label="Department"
                        data-vv-name="Contact_LastName"
                        data-vv-scope="form1"
                        data-vv-as="Last Name"
                      >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="description"
                        label="Description"
                        data-vv-name="Contact_Email"
                        data-vv-scope="form1"
                        data-vv-as="Contact Email"
                      >
                      </v-text-field>
                    </v-flex>
                  </v-flex>
                  <v-flex d-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="status"
                        label="Status"
                        data-vv-name="Contact_Phone"
                        data-vv-scope="form1"
                        data-vv-as="Contact Phone"
                      >
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-btn color="default"> Change Password </v-btn>
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
      firstname: "",
      lastname: "",
      email: "",
      status: "",
      office: "",
      department: "",
      description: "",

      isStepHidden: false,
      isLoading: true,
      menu2: false,
      showModal: false,
      pagination: {
        sortBy: "name"
      },
      search: "",
      selected: [],
      headers: [
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Office", value: "office" },
        { text: "Department", value: "department" },
        { text: "Status", value: "status" },
        { text: "UpdatedAt", value: "updatedat" }
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
    showAlert(a, e, index) {
      event.preventDefault();
      var vm = this;
      vm.selectedIndex = index;
      vm.showModal = true;
      vm.firstname = a.firstName;
      vm.lastname = a.lastName;
      vm.email = a.email;
      vm.status = a.status;
      vm.office = a.office;
      vm.department = a.department;
      vm.description = a.description;
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    updateUser() {
      var vm = this;
      let obj = {
        firstName: vm.firstname,
        lastName: vm.lastname,
        email: vm.email,
        status: vm.status,
        office: vm.office,
        department: vm.department,
        description: vm.description
      };
      Object.assign(vm.items[vm.selectedIndex], obj);
      vm.showModal = false;
    },
    stepContinue(scope) {
      if (this.e1 === 2) {
       this.showModal = false;

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
      this.firstname = "sameer";
      this.lastname = "mishra";
      this.email = "sameer@gmail.com";
      this.status = "Active";
      this.office = "moti";
      this.department = "johndoe@aol.com";
      this.description = "hhh";
    }
  },
  created() {
    const vm = this;

    vm.axios.get('https://my-json-server.typicode.com/srinu0681/jsontestdataprovider/users').then(response => {
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
.user-update-header{
padding: 14px;
color: #454558;
}
.v-stepper__step__step{
background:#424242 !important;
border:#424242 !important;
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
