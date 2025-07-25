/**
* MenuBar.tsx
* Date : 2025/07/02
* Author : H.Kitagawa
* Desc : メニューバー コンポーネント
*/

import routes from "../Routes";
import Button from "./Button";

const MenuBar = () => {
    const menuRoutes = routes.slice(0,3);

    return(
        <div className="w-full flex justify-center mt-3">
            <div 
                className="h-fit w-fit p-2 flex bg-white rounded-full z-50"
                style={{boxShadow: "0 10px 30px rgba(var(--main-color-rgb), 0.4)"}}
            >{
                menuRoutes.map(( r ) => {
                    return <Button key={r.label} label={r.label} path={r.path} isMenu={false}/>
                })
            }</div>
        </div>
    )
}

export default MenuBar;