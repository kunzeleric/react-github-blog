import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { Searchbar } from "../../components/Searchbar";

export const Home = () => {
  return (
    <>
    <div className="justify-center flex -translate-y-1/2">
      <Profile />
    </div>
    <div className="flex justify-center">
      <Searchbar />
    </div>
    <div className="flex justify-center">
      <div className="grid grid-cols-2 w-[864px] py-6 gap-6">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
    </>
  )
};
