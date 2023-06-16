import Blog from "../Pages/Blog/Blog";
import HomePage from "../Pages/Home/HomePage";

export const routes = [
  { path: "/", Component: HomePage, isPublic: true },
  { path: "/blog", Component: Blog, isPublic: true },
];