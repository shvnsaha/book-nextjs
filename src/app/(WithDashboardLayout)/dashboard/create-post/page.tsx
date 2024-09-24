import { createPost, getAllPost } from "@/services/PostSetvices";
import { TPost } from "@/types";
import { revalidateTag } from "next/cache";


const CreatePostPage = () => {

   

    
    const handleCreatePost = async(formData:FormData) =>{
        "use server"
        const posts = await getAllPost();

         const data = {
            id: JSON.stringify(posts.length +1),
            name: formData.get("bookName"),
            description: formData.get("description"),
            category: formData.get("category"),
            image: formData.get("image")
         }
        try {
            const res = await createPost(data as TPost)
            console.log(res);
            if(res){
                revalidateTag("posts")
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className=" shadow-xl bg-base-100 w-[80%] my-12">
            <h1 className="text-center text-4xl">
                Add Your <span className="text-fuchsia-900">Book Review</span>
            </h1>
            <form action={handleCreatePost} className="p-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Book Name</span>
                    </label>
                    <input
                        type="text"
                        name="bookName"
                        placeholder="Book Name"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        placeholder="Description"
                        name="description"
                        className="textarea textarea-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input
                        type="text"
                        name="category"
                        placeholder="Fantasy, Fiction, etc."
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="url"
                        name="image"
                        placeholder="Image URL"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-accent btn-outline">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePostPage;