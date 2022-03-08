import { createWebHistory, createRouter } from "vue-router";
import RegisterPage from "./components/Register.vue";
import LoginPage from "./components/Login.vue";
import CreateStudentPage from "./components/CreateUser.vue";
import MenuPage from "./components/Menu.vue";


const routes = [
  { path: "/", component: RegisterPage },
  { path: "/login", component: LoginPage },
  { path: "/createStudent", component: CreateStudentPage },
  { path: "/menu", component: MenuPage },

];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;