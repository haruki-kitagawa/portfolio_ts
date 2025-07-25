/**
* Worktsx
* Date : 2025/06/26
* Author : H.Kitagawa
* Desc : 作品コンポーネント
*/

// 作品情報の項目定義
type WorkItemElement = {
    id : number;            // 作品ID
    title: string;          // 作品名
    period:                  // 制作期間
        { start: string; end: string; };
    image: string;          // 画像パス
    desc: string[];         // 作品説明
    stack: string[];        // 使用技術
    relatedLink:            // 作品関連リンク
        { label: string; url: string }[];
}

// 作品情報全体
type WorkItemProps = { 
    item: WorkItemElement
}

const WorkItem = ( { item } : WorkItemProps) => {
    return(
        // 作品カード
        <div className="w-[98%] h-fit card flex-col mb-2 bg-white text-black py-5 px-8 shadow-2xs min-w-fit">
            <div className="h-full m-auto min-w-">
                <img 
                    src={item.image} 
                    className="card max-w-[full] min-w-[240px]" 
                    alt={item.title} 
                    loading={item.id > 1? "lazy":"eager"} >
                </img>
            </div>

            {/* 作品情報 */}
            <div className="ml-5">
                <p className="text-2xl font-bold my-2 w-fit">作品名：{item.title}</p>

                {/* 作品概要 */}
                <div className="workDescs mb-4">
                    <p className="font-bold">作品概要</p>
                    { item.desc.map((d, index) => {
                        return(
                            <p key={`${item.id}-desc${index}`} className="w-[98%] h-fit">{d}</p>
                        )
                    })}
                </div>

                {/* 技術スタック */}
                <div className="workStacks mb-4">
                    <p className="font-bold">技術スタック</p>
                    <div className="flex gap-1.5 mt-2">
                        { item.stack.map((s, index) => {
                            return(
                                <div
                                    key={`${item.id}-stack${index+1}`}
                                    className="w-fit p-2 rounded-full border-2 border-[var(--main-color)]"
                                >{s}</div>
                            )
                        })}
                    </div>
                </div>

                {/* 関連リンク */}
                <div className="workLinks mb-4">
                    <p className="font-bold">作品関連リンク</p>
                    { item.relatedLink.map((l, index) => {
                        return(
                            <div key={`${item.title}Link${index+1}`} className="flex">
                                <p key={`${item.title}Link${index+1}-Label`}>{l.label}</p>
                                <p key={`${item.title}Link${index+1}-URL`} className="link text-[var(--main-color)]">{l.url}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WorkItem;