import { Button } from "react-bootstrap";
import "./Bigad.css";


const Bigad = () => {
    return (
        <>
            <div className="video-box">
                <video width="100%" autoPlay muted loop>
                    <source src="home_video.mp4" type="video/mp4" />
                </video>
                <div className="overlay d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="text-light">Introducing</h1>
                        <h1 className="text-white large-title"><b>React Tutorial</b></h1>
                        <h2 className="text-light">By <span className="navbar-brand">KLEARN</span></h2>
                        <Button className="btn btn-sm btn-primary py-2 px-4 mt-4">Learn More</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bigad;