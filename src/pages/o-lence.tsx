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
            <Page background="static/images/o-lence.jpg" twoColumns active={1} title="O Lence">
                <p>
                    Lenka Dusilová, devítinásobná držitelka výročních hudebních cen Anděl, není
                    zvyklá stagnovat a opakovat se. Stal se z ní mimořádný úkaz české hudební scény,
                    z pozice rockové a popové hvězdy putuje k osobnímu vyjádření, jež svobodně
                    přijímá impulzy z nejrůznějších stylů a mimohudebních zážitků.
                </p>

                <p>
                    Narodila se 28. 12. 1975 v Karlových Varech. V šestnácti letech se stala
                    ústřední tváří pražské rockové skupiny Sluníčko. Poté následovala spolupráce s
                    populární Lucií, s Davidem Kollerem pak i v příbuzné kapele Pusa.
                </p>

                <p>
                    Hned první kroky na sólové kariéře jí vynesly titul Zpěvačka roku ve výročních
                    cenách Akademie populární hudby Anděl, poté přišla další úspěšná alba a
                    spolupráce s Čechomorem (m.j. duet Proměny). Třetí sólovou desku Mezi
                    Světy natočila Dusilová v San Francisku s americkými renomovanými hudebníky a
                    producentem Benem Yonasem. Cen Anděl (2005) tentokrát album vyneslo hned
                    několik.
                </p>

                <p>
                    Setkání se zástupci nově se rodící české jazzové komunity (Vertigo Quintet) nebo
                    osudový souzvuk s hudební osobností, klavíristkou Beatou Hlavenkovou (a Clarinet
                    Factory) vyústily ve spolupráci na velmi respektovaném a nevšedním eklektickém
                    albu Eternal Seekers, za něž Lenka získala čtvrtou cenu Akademie populární hudby
                    Anděl v kategorii Zpěvačka roku (2008).
                </p>

                <p>
                    Své čtvrté sóĺové album s názvem Baromantika, natočila zpěvačka ve spolupráci se
                    silným producentským tandemem Beata Hlavenková + Tin Soldiers (producentské duo
                    Patrik Karpentski-Viliam Béreš). Zrodil se unikátní výsledek s vlastním hudebním
                    jazykem, který se pohybuje ve vřelých i chladných akusticko-elektronických
                    krajinách.
                </p>

                <p>
                    I za Baromantiku získala Dusilová (pátou) cenu Akademie populární hudby Anděl
                    (2011), opět jako Zpěvačka roku.  Album Baromntika bylo také nominováno mezi
                    nejlepší hudební počiny roku 2012 v nových hudebních Cenách Apollo.
                </p>

                <p>
                    Deska V hodině smrti byla již natočena jako Lenka Dusilová &  Baromantika v roce
                    2014 a opět patřila mezi desky, o kterých se nejvíce mluvilo a bylo nominováno
                    na cenu Anděl ve dvou kategoriích a také na cenu Apollo.
                </p>

                <p>Nové řadové album se jmenuje ŘEKA a vyšlo 6. listopadu 2020</p>
                <p>
                    V letošním roce, s tímto albem, získala Lenka Dusilová tři hudební ceny Anděl, a
                    to jako sólová interpretka, za skladbu roku a album roku.
                </p>
                <p>
                    Album je plavbou skrze různobarevné hudební imaginace, které jsou z části
                    inspirovány mikropříběhy a nekonkrétními ozvěnami mé rodové linie a mou
                    současnou realitou, ve které se učím víc věřit svým schopnostem a přírodním
                    zákonitostem.
                </p>
                <p>
                    Některé skladby vznikly z empatie a obdivu k síle a umanutosti žen, které se
                    snažily ochraňovat svoje rodiny a naději v toku různorodých událostí, jež
                    nemohly ovlivnit. Nemalá část materiálu vznikla též při putování po ohrožených
                    památkách bývalých Sudet, které jsme navštívili v rámci projektu Monument/um. I
                    jejich příběhy často rezonují s mým tématem.
                </p>
                <p>
                    Album se jmenuje jednoduše ŘEKA, protože metaforicky odráží různorodou dynamiku
                    a vlastnosti systému, který je ovlivňován svým okolím – terénem, počasím a
                    přirozenými i nepřirozenými ději v krajině. Tímto je každá „řeka“ jedinečná.“
                </p>
                <p>
                    V roce 2021 se vydává nejen na sólové turné s novou deskou, ale představuje i
                    nový projekt s kapelou Květy, na jejichž turné se můžete těšit v roce 2022.
                </p>
            </Page>
        </>
    );
}
