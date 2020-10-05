import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import RecipeDetails from './RecipeDetails';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={App} exact />
            <Route path="/RecipeDetails/:id" component={RecipeDetails} onchange={() => window.scrollTo(0, 0)} />
        </BrowserRouter>
    )
}

export default Router
