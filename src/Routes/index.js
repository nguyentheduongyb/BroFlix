import Home from "~/Pages/Home";
import MovieDetail from "~/Pages/MovieDetail";
import Movies from "~/Pages/Movies";
import TvShow from "~/Pages/TvShow";

//Public Routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/:path/detail/:id", component: MovieDetail },
    { path: "/movies", component: Movies },
    { path: "/tvshow", component: TvShow },
    { path: "/more", component: Movies },
];

//Public Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
