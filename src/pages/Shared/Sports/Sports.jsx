import { Card } from 'react-bootstrap';
import sport from '../../../assets/1.png';
import sport2 from '../../../assets/2.png';
import sport3 from '../../../assets/3.png';
import { FaCalendar, FaCalendarAlt } from 'react-icons/fa';

const Sports = () => {
    return (
        <div className='my-3 me-3 gap-3'>
            <h4>Sports</h4>
            <div className="">
        <Card style={{ width: '18rem' }}>
       <img src={sport} alt="" />
      <Card.Body>
        <Card.Text>
        Bayern Slams Authorities Over Flight Delay to Club World Cup <br /> <br />
        <div className="d-flex"> 
        <p className='fw-bold pe-2'>Sport</p>
        <FaCalendarAlt></FaCalendarAlt></div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
       <img src={sport2} alt="" />
      <Card.Body>
        <Card.Text>
        Bayern Slams Authorities Over Flight Delay to Club World Cup <br /> <br />
        <div className="d-flex"> 
        <p className='fw-bold pe-2'>Sport</p>
        <FaCalendarAlt></FaCalendarAlt></div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
       <img src={sport3} alt="" />
      <Card.Body>
        <Card.Text>
        Bayern Slams Authorities Over Flight Delay to Club World Cup <br /> <br />
        <div className="d-flex"> 
        <p className='fw-bold pe-2'>Sport</p>
        <FaCalendarAlt></FaCalendarAlt></div>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        </div>
    );
};

export default Sports;