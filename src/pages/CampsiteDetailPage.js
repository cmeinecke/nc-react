import { useSelector } from 'react-redux'
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
<<<<<<< HEAD
    const { campsiteId } = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));
    console.log('campsite:', campsite);
=======
  const { campsiteId } = useParams();
  const campsite = selectCampsiteById(campsiteId);
>>>>>>> bb45aaa6623070b1040444729edc635468fc8a39

  return (
    <Container>
      <SubHeader current={campsite.name} detail />
      <Row>
        <CampsiteDetail campsite={campsite} />
        <CommentsList campsiteId={campsiteId} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
