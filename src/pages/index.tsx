import React, {useState} from 'react';
import {Header} from '../components/Header';
import {HeadMeta} from '../components/HeadMeta';
import {HeroBar} from '../components/HeroBar';
import {Page} from '../components/Page';
import {VideoBackground} from '../components/VideoBackground';

export default function Index() {
    const [muted, setMuted] = useState(true);

    return (
        <>
            <HeadMeta />
            <Page>
                <HeroBar muteControl={() => setMuted(!muted)} muted={muted} />
            </Page>
            <VideoBackground videoID="cjB5LzRT_jk" startTime={4} endTime={230} muted={muted} />
        </>
    );
}
