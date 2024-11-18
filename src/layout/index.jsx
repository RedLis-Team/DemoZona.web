import {Aside} from "../component/aside/Aside.jsx";
import {Demo} from "../component/demo/Demo.jsx";

export function Layout() {

    return (
        <section style={{ display: "flex"}}>
            <Aside/>
            <Demo/>
        </section>
    )
}