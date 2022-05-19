import React from "react";
import ReactDOM from "react-dom";

const element1 = <h1>Digital Innovation One</h1>;
const element2 = <h2>Ubirajara Neves</h2>;

const App = () => {

    return(
        <div>
            {element1}
            {element2}
        </div>
    );

};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);