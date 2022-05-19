import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import ComponenteA from './ComponenteA';
import ComponenteB from './ComponenteB';

function soma(a, b) {

    alert(a + b);

}

const App = () => {

    return (
        <div>
            <Button onClick={() => soma(10, 20)} name="Teste" />
            <ComponenteA>
                <ComponenteB>
                    <Button onClick={() => soma(30, 40)} name="Segundo teste" />
                </ComponenteB>
            </ComponenteA>
        </div>
    );

};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);