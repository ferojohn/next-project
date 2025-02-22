"use client"
import { useState, useEffect } from "react";

interface PostApis{
    title: string,
    body: string,
    id: number
}

const PostApi = () => {
    const [posts, setPosts] = useState<PostApis[]>([]);

    const FetchPost = async () => {
        try {
            const data = await fetch("https://dummyjson.com/posts");
            const result = await data.json();
            setPosts(result.posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        FetchPost();
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} className="border p-2 my-2">
                        <h3 className="font-bold">{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            ) : (
                <p>Loading posts...</p>
            )}
        </div>
    )
}

export default PostApi