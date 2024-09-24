import { getCommentsById } from "@/services/CommentServices";
import { TPost } from "@/types";
import Image from "next/image";
import Comments from "./Comments";

const PostDetails = async ({ post }: { post: TPost }) => {

  const comments = await getCommentsById(post.id)
  console.log(comments);

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <Image src={post.image} alt="book image" width={300} height={300} />
      </figure>
      <div className="p-12">
        <div className="flex justify-between mb-4">
          <h2 className="card-title">{post.name}</h2>
          <div className="badge p-4 bg-fuchsia-500">{post.category}</div>
        </div>
        <p>{post.description}</p>
        <Comments comments={comments}/>
      </div>
    </div>
  );
};

export default PostDetails;
