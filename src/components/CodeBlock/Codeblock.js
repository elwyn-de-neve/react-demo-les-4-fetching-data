import { CopyBlock } from "react-code-blocks";

function MyCodeComponent(props) {
    return (
        <CopyBlock
            text={props.code}
            language={props.language}
            showLineNumbers={props.showLineNumbers}
            startingLineNumber={props.startingLineNumber}
            wrapLines
        />
    );
}