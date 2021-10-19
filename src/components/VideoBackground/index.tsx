import React, {useState} from 'react';
import styles from './VideoBackground.module.scss';
import YouTube from 'react-youtube';
import {isMobile, isBrowser} from 'react-device-detect';

export type VideoBackgroundProps = {
    videoID?: string,
    overlay?: boolean,
    startTime?: number,
    endTime?: number,
    muted?: any,
};

export const VideoBackground = ({
    videoID,
    overlay = false,
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

    return (
        <div className={styles['video-background']}>
            {overlay && <div className={styles['video-background__overlay']} />}

            {isBrowser && (
                <div className={styles['video-background__container']}>
                    {/*@ts-ignore*/}
                    <YouTube videoId={videoID} opts={opts} />;
                </div>
            )}

            {isMobile && (
                <>
                    <div className={styles['video-background__overlay']} />
                    <div className={styles['image-background__container']} />
                </>
            )}
        </div>
    );
};
