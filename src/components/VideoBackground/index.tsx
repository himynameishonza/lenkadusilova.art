import React, {useState} from 'react';
import styles from './VideoBackground.module.scss';
import YouTube from 'react-youtube';

export type VideoBackgroundProps = {
    videoID?: string,
    startTime?: number,
    endTime?: number,
    muted?: any,
};

export const VideoBackground = ({
    videoID,
    startTime = 0,
    endTime,
    muted = 1,
}: VideoBackgroundProps) => {
    const opts = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            start: startTime,
            end: endTime,
            playlist: videoID,
            playsinline: 1,
            loop: 1,
            mute: muted,
        },
    };

    const [videoLoading, setVideoLoading] = useState(true);
    return (
        <div className={styles['video-background']}>
            {videoLoading && (
                <>
                    <div className={styles['video-background__overlay']} />
                    <div className={styles['video-background__static']} />
                </>
            )}

            <div className={styles['video-background__container']}>
                {/*@ts-ignore*/}

                <YouTube videoId={videoID} opts={opts} onPlay={() => setVideoLoading(false)} />
            </div>
        </div>
    );
};
