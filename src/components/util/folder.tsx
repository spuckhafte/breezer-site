export default function Folder(props:{ v:string, commit:string }) {
    return (
        <div className="folder black-ops">
            <div className="version">{ props.v }</div>
            <div className="details">
                <ul className="glow"><a href={ `https://github.com/spuckhafte/breezer.js/releases/tag/${props.v}` }>Release Note</a></ul>
                <ul className="glow"><a href={ `https://github.com/spuckhafte/breezer.js/commit/${props.commit}` }>Final Commit</a></ul>
            </div>
        </div>
    )
}