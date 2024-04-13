import DOMPurify from 'dompurify'
import './ReviewCard.css'

function ReviewCard({ review }) {
    return (
        <li className="review-card" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(review.text) }} />
    )
}

export default ReviewCard
