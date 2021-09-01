import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/sql",
        name: "SQL",
        component: () =>
            import("../views/SQL.vue"),
    },
    {
        path: "/C#",
        name: "C#",
        component: () =>
            import("../views/CSharp.vue"),
    },
    {
        path: "/VB",
        name: "VB",
        component: () =>
            import("../views/VB.vue"),
    },
    {
        path: "/LINQ",
        name: "LINQ",
        component: () =>
            import("../views/LINQ.vue"),
    },
    {
        path: "/RegEx",
        name: "RegEx",
        component: () =>
            import("../views/RegEx.vue"),
    },
    {
        path: "/Vue",
        name: "Vue",
        component: () =>
            import("../views/Vue.vue"),
    },
    {
        path: "/glossary",
        name: "Glossary",
        component: () =>
            import("../views/Glossary.vue"),
    },
    {
        path: "/.net",
        name: ".NET",
        component: () =>
            import("../views/.NET.vue"),
    },
    {
        path: "/continuingEducation",
        name: "ContinuingEducation",
        component: () =>
            import("../views/ContinuingEducation.vue"),
    },
    {
        path: "/organization",
        name: "Organization",
        component: () =>
            import("../views/Organization.vue"),
    },
    {
        path: "/training",
        name: "Training",
        component: () =>
            import("../views/Training.vue"),
    },
    {
        path: "/csharp",
        name: "CSharp",
        component: () =>
            import("../views/CSharp.vue"),
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
