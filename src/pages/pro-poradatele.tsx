import React, {useState} from 'react';
import {Downloads} from '../components/Downloads';
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
            <Page
                background="static/images/pro-poradatele.jpg"
                twoColumns
                active={5}
                title="Pro pořadatele"
            >
                <Downloads />
            </Page>
        </>
    );
}
