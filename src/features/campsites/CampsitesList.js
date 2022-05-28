import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
<<<<<<< HEAD
import { selectCommentsByCampsiteId } from '../comments/commentsSlice';
import CampsiteCard from "./CampsiteCard";

const CampsitesList = () => {
    const campsites = useSelector(selectCommentsByCampsiteId);
    console.log('campsites:', campsites);

    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
=======
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
  const campsites = selectAllCampsites();
  return (
    <Row className="ms-auto">
      {campsites.map((campsite) => (
        <Col md="5" className="m-4" key={campsite.id}>
          <CampsiteCard campsite={campsite} />
        </Col>
      ))}
    </Row>
  );
>>>>>>> bb45aaa6623070b1040444729edc635468fc8a39
};

export default CampsitesList;
