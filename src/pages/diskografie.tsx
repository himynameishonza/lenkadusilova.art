import React, {useState} from 'react';
import {Albums} from '../components/Albums';
import {HeadMeta} from '../components/HeadMeta';
import {Page} from '../components/Page';

export default function Index() {
    const [muted, setMuted] = useState(true);

    return (
        <>
            <HeadMeta />
            <Page
                background="static/images/diskografie.jpg"
                twoColumns
                active={3}
                title="Diskografie"
            >
                <Albums />
            </Page>
        </>
    );
}
