import { TPost } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }: { post: TPost }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image src={post.image} alt="Shoes" width={200} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <p>{post.name}</p>
          <div className="badge p-3 bg-fuchsia-500">{post.category}</div>
        </h2>

        <div className="card-actions justify-end">{post.description}</div>
        <Link
          href={`/posts/${post.id}`}
          className="font-semibold text-end text-sm underline text-fuchsia-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
