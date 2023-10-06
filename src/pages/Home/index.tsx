import { useState } from "react";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { Searchbar } from "../../components/Searchbar";
import { getSearchIssues } from "../../utils/getSearchIssues";
import { Link } from 'react-router-dom';

export type SearchPostProps = {
  postNumber: number,
}

export type PostProps = {
  title: string,
  created_at: string,
  body: string
}


export const Home = () => {
  const [postNumber, setPostNumber] = useState<number>(0);
  const [post, setPost] = useState<PostProps>({
    title: "",
    body: "",
    created_at: ""
  }); 

  const getIssue = async (query: string) => {
    const { data } = await getSearchIssues(query);
    const { number, title, created_at, body } = data.items[0];
    
    setPost({
      ...post,
      body,
      created_at,
      title
    })

    if (number) {
      setPostNumber(number);
      console.log(number);
    }
  }

  return (
    <>
      <div className="justify-center flex -translate-y-1/2">
        <Profile />
      </div>
      <div className="flex justify-center">
        <Searchbar getIssue={getIssue} />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 w-[864px] py-6 gap-6">
        {postNumber !== 0 && (
            <Link to={`/post/${postNumber}`}>
              <Post post={post} />
            </Link>
          )}
        </div>
      </div>
    </>
  )
};
