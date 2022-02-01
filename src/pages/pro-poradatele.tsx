import React from 'react';
import {Downloads} from '../components/Downloads';
import {HeadMeta} from '../components/HeadMeta';
import {Page} from '../components/Page';

export default function Index() {
    return (
        <>
            <HeadMeta pageTitle="Pro pořadatele" />
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
