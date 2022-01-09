import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      review {reviewId} from product {productId} 
    </div>
  );
};

export default Review;
