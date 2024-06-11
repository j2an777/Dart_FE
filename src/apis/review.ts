import { PostReview } from "@/types/post";
import instance from "./instance";

export const postReview = async (reviewData: PostReview) => {
    const response = await instance.post(`/api/reviews`, reviewData);
    if (response.status === 200) {
      console.log('성공');
    } else {
      console.log('실패');
    }
};