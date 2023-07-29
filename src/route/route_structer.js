import { Routes,Route } from "react-router-dom";
import { Main } from "../component/main";
import { Item } from "../component/item";

export const RouteStructure =() => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="item" element={<Item/>}/>
        </Routes>
    )
}