import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
<<<<<<< HEAD
    const partners = useSelector(selectAllPartners);

    return (
        <Col className='mt-4'>
            <Row>
                {partners.map((partner) => {
                    return (
                        <div className='d-flex mb-5' key={partner.id}>
                            <Partner partner={partner}/>
                        </div>
                    );          
                })}
            </Row>
        </Col>
    );
=======
  const partners = selectAllPartners();
  return (
    <Col className="mt-4">
      <Row>
        {partners.map((partner) => (
          <div className="d-flex mb-5" key={partner.id}>
            <Partner partner={partner} />
          </div>
        ))}
      </Row>
    </Col>
  );
>>>>>>> bb45aaa6623070b1040444729edc635468fc8a39
};

export default PartnersList;
