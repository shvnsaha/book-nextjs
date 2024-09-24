import { TComment } from "@/types";
import Image from "next/image";

const Comments = ({ comments }: { comments: TComment[] }) => {
  return (
    <div className="mt-4">
      <p className="font-bold">Comments:</p>
      {comments.map((comment) => (
        <div key={comment.comment} className="flex items-center mt-4">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <Image
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="user icon"
                width={100}
                height={100}
              />
            </div>
          </div>
          <p className="ml-4">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
