import {Home} from "../page/Home"
import About from "page/About"
import Found from "page/404"
export const RenderRouter = [
    {
        id:1,
        component:Home,
        path:"/",
    },
    {
        id:2,
        component:About,
        path:"/about",
    },
    {
        id:3,
        component:Found,
        path:"*",
    },
]


