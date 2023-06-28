import { useEffect, useState } from "react";
import Folder from "./util/folder";

const api = 'https://api.github.com/repos/spuckhafte/breezer.js/tags';
const emptyReleases:{ v:string, commit:string }[] = [];

export default function Content() {

    const [_, setIsMob] = useState(false);
    const [releases, setReleases] = useState(emptyReleases);

    window.onresize = () => {
        setIsMob(isMob());
    }

    useEffect(() => {
      fetch(api).then(_data => _data.json()).then(data => {
        let push = [];
        for (let release of data) {
          push.push({
            v: release.name,
            commit: release.commit.sha
          });
        }
        setReleases(push);
      });
    }, []);

    return (
        <div className="content">
        <div className="about akshar">
          <span className="questions shadow">
            <div className="glow pb">Do you love writing beautiful and concise code that works like magic?</div>
            <div className="glow pb">Are you tired of writing if-else to manage your commands?</div>
            <div className="glow pb">Do you find it irritating to edit your message payloads over and over again?</div>
          </span>
          <br/>
          <div className="answer">
            <span className="fjla sell">
              DONT WORRY! BREEZER.JS LETS YOU CREATE DISCORD BOTS USING JAVASCRIPT WITH ELEGANT AND MINIMAL CODE
              SO YOU CAN FOCUS ON YOUR BOT.
            </span><br/><br/>
            <div className="shadow glow feat pb">
              It works on file based command system which automatically find and runs the cmds used by the client.<br/>
            </div>
            <div className="shadow glow feat pb">
              It provides you out-of-the-box features like State Management, Button Signals and many more coming soon.<br/>
            </div>
            <div className="shadow glow feat">
              Breezer.js is compatible with TypeScript and provides in-editor documentation, so you don't have to keep referring back to the original documentation repeatedly.<br/><br/>
            </div>
            
            <span className="fjla sell">
              These features solve the problems mentioned above and make creating a bot a painless process.
            </span> <br/><br />

            <span className="start black-ops">GET STARTED -</span>
          </div>
        </div>
        <div className="npmi">
          <span className="npm">npm</span> <span className="i">install</span> breezer.js
        </div>
        <div className="releases">
          {
            releases.map((release, i) => {
              return <Folder v={release.v} commit={release.commit} key={i} />
            })
          }
        </div>
      </div>
    )
}
  
function isMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
  
    let regMatch = toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });

    let resMatch = ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 );

    return regMatch || resMatch;
}