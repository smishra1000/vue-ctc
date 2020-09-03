import Vue from "vue";
import Router from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import Users from "../pages/Users.vue";
import Projects from "../pages/Projects.vue";
import AllRequests from "../pages/Requests/AllRequests.vue";
import MyRequests from "../pages/Requests/MyRequests.vue";
import Settings from "../pages/Requests/Settings.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        breadcrumb: [{ name: "dashboard" }]
      }
    },
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        breadcrumb: [{ name: "dashboard" }]
      }
    },
   
    {
      path: "/users",
      name: "Users",
      component: Users,
      meta: {
        breadcrumb: [{ name: "users" }]
      }
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
      meta: {
        breadcrumb: [{ name: "projects" }]
      }
    },
    {
      path: "/allrequests",
      name: "AllRequests",
      component: AllRequests,
      meta: {
        breadcrumb: [{ name: "AllRequests" }]
      }
    },
    {
      path: "/myrequests",
      name: "MyRequests",
      component: MyRequests,
      meta: {
        breadcrumb: [{ name: "MyRequests" }]
      }
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings,
      meta: {
        breadcrumb: [{ name: "Settings" }]
      }
    },

  ]
});
