export type TPost = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
};

export type TComment = {
  postId: string;
  comment: string;
};
