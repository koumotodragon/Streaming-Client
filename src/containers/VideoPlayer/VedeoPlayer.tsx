import { VideoPlayerSegment } from "../../components/VideoJs/VideoPlayerSegment";
import './VedeoPlayer.css'
import viewIcon from '../../assets/icon_view_gray.svg'
import timeIcon from '../../assets/icon_time_gray.svg'
export const VideoPlayer = () => {

    return (
        <>
            <div className="video-player-container">
                <div className="video-player">
                    <VideoPlayerSegment />
                    <ul className="video-tags">
                        <li className="video-tag"><a href="">lebron james </a></li>
                        <li className="video-tag"><a href="">NBA </a></li>
                    </ul>
                    <div className="video-title">
                        <h1>"He's On That New Juice" Kevin Garnett Says Lebron James Is On Roids!</h1>
                    </div>
                    <div className="veiw-time">
                        <div className="view">
                            <span><img src={viewIcon} alt="" /></span>
                            56,133
                        </div>
                        <div className="time">
                            <span><img src={timeIcon} alt="" /></span>
                            feb 24,2024
                        </div>
                    </div>
                </div>
                <aside className="ad-content">
                    ad
                </aside>
            </div>
        </>
    );
}