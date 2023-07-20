// import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import postView from "@/pages/postView";
import PostPageWithStore from "@/pages/PostPageWithStore";

const routes = [
    {
        path: '/',
        component: About
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/posts/:id',
        component: postView
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
]

const router = createRouter ({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;