import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Test from './pages/Test';
import Test2 from './pages/Test2';

function routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Test}/>
                <Route path='/test2' exact component={Test2}/>
            </Switch>
        </Router>
    );
}

export default routes;