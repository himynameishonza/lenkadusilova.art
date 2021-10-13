import React from 'react';
import {HeadMeta} from '../components/HeadMeta';
import {Loader} from '../components/Loader';
import {Page} from '../components/Page';

export default function Index() {
    return (
        <>
            <HeadMeta />
            <Page>
                <Loader />
            </Page>
        </>
    );
}
