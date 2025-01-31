import { Banner } from "components/Banner"
import { Outlet } from "react-router-dom"

export const Pagedefault =()=> {
    return(
        <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}