import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CommentsList from '../features/comments/CommentsList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  const campsite = selectCampsiteById(campsiteId);

  return (
    <Container>
      <Row>
        <CampsiteDetail campsite={campsite} />
        <CommentsList campsiteId={campsiteId} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
