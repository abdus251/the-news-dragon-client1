import { Button } from 'react-bootstrap';
import img from '../../../assets/qZone1.png';
import img2 from '../../../assets/qZone2.png';
import img3 from '../../../assets/qZone3.png';
import'./QZone.css';

const QZone = () => {
    return (
        <div className='bg-secondary text-center h-50% my-4 py-4'>
            <h4>Q-Zone</h4>
            <div className="">
                <img src={img} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <div className='bg'>
                <h1 className='text-white pt-4'>Create an Amazing Newspaper</h1> <br />
                <h3 className='text-white text-center'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h3> <br /> 
                <Button variant="danger px-4 mx-8 py-4 mt-4 ">Learn More</Button> 

            </div>
        </div>
    );
};

export default QZone;