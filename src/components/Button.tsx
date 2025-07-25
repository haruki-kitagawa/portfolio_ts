/**
* Button.tsx
* Date : 2025/07/02
* Author : H.Kitagawa
* Desc : ボタンコンポーネント
*/

import { useLocation, useNavigate } from "react-router-dom";

// 引数定義
type ButtonProps = {
    label: string,      // 表示文字列 
    path: string,       // 遷移先パス
    isMenu: boolean     // 単独ボタン判断
}

/**
 * ボタンコンポーネント
 * @param label     ボタン文字列
 * @param path      ボタン遷移先
 * @param isMenu    ボタンが単独か否か
 * @returns         指定した文字列、遷移先のボタン
 */
const Button = ({label, path, isMenu}: ButtonProps) => {
    const navigate = useNavigate(); // ルーティング用変数
    const location = useLocation(); // ページ把握用変数

    // 背景色判断用変数
    const primaryBg = (location.pathname == path) || (isMenu);

    return(
        <button
            className={`
                button-style
                hover:translate-y-[-2px]
                ${primaryBg ? 'bg-primary text-white' : 'text-black'}
            `}
            onClick={() => navigate(path)}
        >
            {label}
        </button>
    )
}

export default Button;