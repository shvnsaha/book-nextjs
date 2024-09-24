import PostDetails from "@/components/ui/PostDetails";
import { getSinglePost } from "@/services/PostSetvices";

type TProps = {
    params:{
        postId: string
    }
}

const PostDetailsPage = async({params}:TProps) => {

   const post = await getSinglePost(params.postId)
    return (
      <>
         <PostDetails post={post}></PostDetails>
      </>
    );
};

export default PostDetailsPage;