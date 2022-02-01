import React, {useState} from 'react';
import {Concerts} from '../components/Concerts';
import {HeadMeta} from '../components/HeadMeta';
import {Page} from '../components/Page';

export default function Index() {
    return (
        <>
            <HeadMeta pageTitle="Koncerty" />
            <Page background="static/images/koncerty.jpg" twoColumns active={2} title="Koncerty">
                <Concerts />
            </Page>
        </>
    );
}
