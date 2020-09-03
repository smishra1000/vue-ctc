<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app>
    <!--<v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Dashboard' }">
    
      </router-link>
      <router-link :to="{ name: 'Dashboard' }" class="text">
      </router-link>
    </v-toolbar> -->
    <v-list class="side-nav-list">
    <span><v-icon class="drawer-icon" @click="toggleNavigationBar">keyboard_arrow_left</v-icon></span>
      <v-list-tile @click="changeRoute('Dashboard', 1)" :class="[{'activelink': selectedIndex === 1}, '' ]">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]">{{'Dashboard' }}</v-list-tile-title>
      </v-list-tile>
      <!-- <v-list-tile @click="changeRoute('Users', 2)" :class="[{'activelink': selectedIndex === 2}, '' ]">
        <v-list-tile-action>
          <v-icon>supervisor_account</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]" >{{'Users' }}</v-list-tile-title>
      </v-list-tile>
       <v-list-tile @click="changeRoute('Projects', 3)" :class="[{'activelink': selectedIndex === 3}, '' ]">
        <v-list-tile-action>
          <v-icon>assignment_late</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]" >{{'Projects' }}</v-list-tile-title>
      </v-list-tile>
       <v-list-tile @click="changeRoute('Groups', 4)">
        <v-list-tile-action>
          <v-icon>groups</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]" >{{'Groups' }}</v-list-tile-title>
      </v-list-tile>

       <v-list-tile @click="changeRoute('Settings', 5)" :class="[{'activelink': selectedIndex === 5}, '' ]">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]" >{{'Settings' }}</v-list-tile-title>
      </v-list-tile>
      -->

      <v-list-tile @click="changeRoute('AllRequests', 6)" :class="[{'activelink': selectedIndex === 6}, '' ]">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 6}, 'item-title' ]" >{{'All Requests' }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('MyRequests', 7)" :class="[{'activelink': selectedIndex === 7}, '' ]">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex ===7 }, 'item-title' ]" >{{'My Requests' }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Settings', 8)" :class="[{'activelink': selectedIndex === 8}, '' ]">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 8}, 'item-title' ]" >{{'Settings' }}</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="changeRoute('ManageUsers', 9)" :class="[{'activelink': selectedIndex === 9}, '' ]">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 9}, 'item-title' ]" >{{'Manage Users' }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

  data() {
    return {
      selectedIndex: 1
    }
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    },
    toggleNavigationBar() {
      const vm = this;

      vm.$emit('toggleNavigationBar');
    },
  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
  .activelink{
  background:#616161;
  }
  .side-nav-list{
    margin-top: 100px;
  }
  .item-title{
  //font-family:'Robot'
  }
  .drawer-icon{
    font-size: 41px;
    color: #fff !important;
    position: absolute;
    right: 0px;
    top: 75px;
  }
</style>
