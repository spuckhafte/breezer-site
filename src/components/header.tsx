import { useEffect, useState } from "react";

export default function Header() {
    const allFeatures = ["declarative", "reactive", "concise"]
    const [settings, setSettings] = useState({ using: 0, dir: +1 });
    const [feature, setFeature] = useState('');
    
    useEffect(() => {

        if (feature.length == 0) {

        if (settings.dir == -1) {
            let using:number;
            if (settings.using + 1 == allFeatures.length) using = 0;
            else using = settings.using + 1;
            setSettings({ using, dir: 1 });
        }
        else {
            setTimeout(() => {
            setFeature(allFeatures[settings.using][0]);
            }, 100);
        }

        }

        if (feature.length == allFeatures[settings.using].length && settings.dir == 1) {

        setTimeout(() => {
            setSettings(prev => {
            prev.dir = -1;
            return { ...prev };
            });
        }, 3000);

        }

    }, [settings, feature]);

    setTimeout(() => {
        let text = allFeatures[settings.using];
        setFeature(text.slice(0, feature.length + settings.dir));
    }, 100);

    return (
        <div className="header black-ops">
            <nav className="navbar no-padding">
                <img src="/logo.png" alt="logo" />
                <span><a href="https://github.com/spuckhafte/breezer.js#breezer-js">DOCS</a></span>
                <span><a href="https://npmjs.com/package/breezer.js">NPM</a></span>
            </nav>
            <span className="heading">BREEZER.JS</span>
            <span className="byline">
                A 
                <span className="feature"> {feature}</span>
                <span className="cursor">| </span>
                framework for 
                <a href="https://v13.discordjs.guide/#before-you-begin" className="djs glow" title="v13"> Discord.js</a>
            </span>
        </div>
    )
}