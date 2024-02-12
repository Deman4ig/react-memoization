import './App.css'
import {useQuery} from "react-query";
// import {useMemo} from "react";
import {List} from "./components/list";
import {TPost} from "./components/post/TPost.tsx";

function App() {
    console.log('re-render')

    async function fetchPosts(): Promise<TPost[]> {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return response.json();
    }

    const postsData = useQuery(['posts'], fetchPosts, {refetchOnWindowFocus: "always"});

    if (postsData.isLoading) console.log('test');

    return (
        <div>
            <ul>
                <List {...postsData.data} />
            </ul>
        </div>
    )
}

export default App
