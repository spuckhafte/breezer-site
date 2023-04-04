import { useState } from "react";

export default function Content() {

    const [_, setIsMob] = useState(false);
    window.onresize = () => {
        setIsMob(isMob());
    }

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
              SO THAT YOU CAN FULLY FOCUS ON YOUR BOT.
            </span><br/><br/>
            <div className="shadow glow feat pb">
              It works on file based command system which automatically find and runs the cmds used by the client.<br/>
            </div>
            <div className="shadow glow feat">
              It provides you out-of-the-box features like State Management, Button Signals and many more coming soon.<br/><br/>
            </div>
            
            <span className="fjla sell">
              These features solve the problems mentioned above and make creating a bot a painless process.
            </span> 
          </div>
        </div>
        <div className="releases"></div>
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