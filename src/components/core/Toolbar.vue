<template>
  <v-toolbar dark app :color="$root.themeColor">
    <v-toolbar-title>
      <v-toolbar-side-icon @click="toggleNavigationBar"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        v-for="item in nav"
        :key="item.icon"
        :to="item.name"
        :title="item.title"
        flat
        >{{ item.text }}</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        {
          icon: "home",
          text: "Home",
          title: "Back to Home page",
          active: true,
          name: "home"
        },
        {
          icon: "info",
          text: "Dashboard",
          title: "About this demo",
          active: false,
          name: "dashboard"
        },
        {
          icon: "assignment_turned_in",
          text: "CMS",
          title: "Some stuff that needs doing",
          active: false,
          name: "cms"
        },
        {
          icon: "Projects",
          text: "User and Groups",
          title: "user group",
          active: false,
          name: "users"
        },
        {
          icon: "Projects",
          text: "Projects",
          title: "user group",
          active: false,
          name: "projects"
        },
        {
          icon: "Projects",
          text: "Requests",
          title: "Our Contact info",
          active: false,
          name: "requests"
        },
        {
          icon: "Projects",
          text: "Help",
          title: "Our Contact info",
          active: false,
          name: "help"
        }
      ]
    };
  },

  computed: {},
  methods: {
    toggleNavigationBar() {
      const vm = this;

      vm.$emit("toggleNavigationBar");
    }
  }
};
</script>
<style>
.toolbar-menu-item {
  padding-left: 5px;
}

.selected-language-flag {
  max-width: 45px;
}

.language-flag {
  max-width: 40px;
}

.languages-list-item {
  cursor: pointer;
  margin-top: -2px;
  margin-left: 1px;
}

.languages-list-item-title {
  font-size: 16px;
}

.languages-list-item-title:hover {
  color: #41b883;
  font-weight: bold;
}
.language-menu {
  border-radius: 25px;
  width: 235px;
  margin-right: 10px;
}
</style>
