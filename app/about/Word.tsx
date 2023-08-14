// 在服务器组件中使用fetch和async、await
export interface WordType {
    ret: number,
    text: string,
    source: string,
    author: string
}

async function getWord(): Promise<WordType> {
    const res: Response = await fetch('https://api.wrdan.com/hitokoto', {cache: 'no-store'})
    return await res.json();
}
export async function Word() {
    const word = await getWord();
    return <div>
        {word.text} <br/>
        {word.source} <br/>
        {word.author}
    </div>
}