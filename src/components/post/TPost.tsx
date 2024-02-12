export type TPost = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export function Post(props: TPost) {
    return <div style={{border: '1px solid salmon'}}><h2>{props.title}</h2><div>{props.body}</div></div>
}
