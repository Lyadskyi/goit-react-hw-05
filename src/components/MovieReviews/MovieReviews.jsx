import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../requests-api";
import Loader from "../Loader/Loader";

export default function MovieReviews() {
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews !== null && reviews.length === 0 && (
        <p>This movie has no reviews yet. You can be the first!</p>
      )}
      {loading && <Loader />}
      {error && <p>Sorry! Please reload the page...</p>}
    </div>
  );
}
