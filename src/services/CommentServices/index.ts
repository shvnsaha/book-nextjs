import { delay } from "@/utils/delay";

export const getCommentsById = async(postid: string,wait=false) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/comments?postId=${postid}`,);
    if(!res.ok){
        throw new Error("Failed to fetch data")
    }
    if(wait){
        delay(2000)
    }
    return res.json();
}