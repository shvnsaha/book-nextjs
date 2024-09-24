import Banner from "@/components/banner/Banner";
import LatestPosts from "@/components/latestPosts/LatestPost";
import { getAllPost } from "@/services/PostSetvices";

const HomePage = async() => {

  const posts = await getAllPost("isr");
  return (
    <>
      <Banner/>
      <LatestPosts posts={posts}/>
    </>
  );
};

export default HomePage;
