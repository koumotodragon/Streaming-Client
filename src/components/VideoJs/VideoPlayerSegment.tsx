import { useRef } from 'react';
import Player from 'video.js/dist/types/player';
import VideoJS from './VideoJs';
export const VideoPlayerSegment = () => {
    const playerRef = useRef<Player | null>(null);
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: 'https://www.shutterstock.com/shutterstock/videos/1099528505/preview/stock-footage-http-symbol-sign-on-black-background-d-render-hypertext-transfer-protocol-secure-web.mp4',
            type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player: any) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            // videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            // videojs.log('player will dispose');
        });
    };

    return (
        <>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </>
    );
};
