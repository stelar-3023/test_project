import { Col, Row } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import { selectCommentsByCampsiteId } from './commentsSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CommentsList = ({ campsiteId }) => {
  const isLoading = useSelector((state) => state.comments.isLoading);
  const errMsg = useSelector((state) => state.comments.errMsg);

  // pass the campsiteId to the selectCommentsByCampsiteId selector
  const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  }

  if (errMsg) {
    return (
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    );
  }
  if (comments && comments.length > 0) {
    return (
      <Col md='5' className='m-1'>
        <h4>Comments</h4>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <CommentForm campsiteId={campsiteId} />
      </Col>
    );
  }
  return (
    <Col md='5' className='m-1'>
      There are no comments for this campsite yet.
    </Col>
  );
};

export default CommentsList;
