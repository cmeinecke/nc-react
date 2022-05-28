import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
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
};

export default CampsitesList;
