"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

function OthersProfile( {params}) {

    const [posts, setPosts] = useState([]);
    const [name, setName] = useState("")
    const router = useRouter();
    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${params.id}/posts`);
          const data = await response.json();

          setName(data[0].creator.username);
          setPosts(data);
        }
        if(params.id) fetchPosts();
      }, []);
    return (
        <Profile
            name={`${name}'s`}
            desc="Welcome to your an authors profile page"
            data={posts}
            handleEdit={()=>{}}
            handleDelete={()=>{}}
        />
  )
}

export default OthersProfile