import React from 'react';
import {HeadMeta} from '../components/HeadMeta';
import {HeroBar} from '../components/HeroBar';
import {Page} from '../components/Page';

export default function Index() {
    return (
        <>
            <HeadMeta />
            <Page>
                <HeroBar />
            </Page>
        </>
    );
}
