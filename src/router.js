import { createWebHistory, createRouter } from "vue-router";
import RegisterPage from "./components/Register.vue";
import LoginPage from "./components/Login.vue";
import CreateStudentPage from "./components/CreateUser.vue";
import MenuPage from "./components/Menu.vue";
import ReportsPage from "./components/Reports.vue";
import UsersPage from "./components/Users.vue";
import StudentsPage from "./components/Students.vue";
import AuditPage from "./components/Audit.vue";


const routes = [
  { path: "/", component: RegisterPage },
  { path: "/login", component: LoginPage },
  { path: "/createStudent", component: CreateStudentPage },
  { path: "/menu", component: MenuPage },
  { path: "/reports", component: ReportsPage },
  { path: "/users", component: UsersPage },
  { path: "/students", component: StudentsPage },
  { path: "/audit", component: AuditPage },

];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;