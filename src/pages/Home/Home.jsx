import React from 'react';
import Canvas from "../../components/Canvas/Canvas";
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

const Home = () => {

    function MyCoolCodeBlock( { code, language, showLineNumbers, startingLineNumber } ) {
        return (
            <CodeBlock
                text={ code }
                language={ language }
                showLineNumbers={ showLineNumbers }
                startingLineNumber={ startingLineNumber }
                theme={ dracula }
            />
        );
    }

    function MyCoolCodeBlockv2( { code, language, showLineNumbers, startingLineNumber } ) {
        return (
            <CopyBlock
                text={ code }
                language={ language }
                showLineNumbers={ showLineNumbers }
                startingLineNumber={ startingLineNumber }
                theme={ dracula }
                codeBlock
            />
        )
    }


    return (
        <>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aperiam consequuntur cum ea esse et eum,
                ex facere ipsam iste labore necessitatibus perspiciatis praesentium quibusdam quod reiciendis
                reprehenderit tenetur ullam. Adipisci corporis delectus eum nemo nihil quia repellat, voluptates.
                Obcaecati.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum cumque, cupiditate, dolorum error
                et excepturi exercitationem facere fuga iusto labore, minus modi optio perspiciatis porro praesentium
                quisquam quod quos!</p>

            <Canvas/>
        </>
    );
};

export default Home;