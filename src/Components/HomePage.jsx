import React from "react";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { Twocolumntext } from "./Twocolumn";
import { Learning } from "./Learning";
import { FullWidthScrollImage } from "./FullWidthScrollImage";
import { StickyWIthText } from "./StickyWIthText";
import { Logolist } from "./Logolist";
import { Footer } from "./Footer";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <Banner />
            <Twocolumntext />
            <Learning />
            <FullWidthScrollImage />
            <StickyWIthText />
            <Logolist />
            <div className="space-80"></div>
            <Footer />
        </>
    )
}