
import './Videos.css';
import { VideoPlayer } from '../../containers/VideoPlayer/VedeoPlayer';
import { Footer, Header } from "../../containers";
export const Videos = () => {
    return (
        <>
            <div className="main-cotainer">

                <Header />
                <VideoPlayer />
            </div>
        </>
    );
};
