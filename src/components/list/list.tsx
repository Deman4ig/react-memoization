import {Post, TPost} from "../post/TPost.tsx";

export function List(props: TPost[]) {
    return <>{props.map(post => <Post {...post} />)}</>
}
