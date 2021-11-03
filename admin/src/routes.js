import React from 'react';
import {Switch, Route} from "react-router-dom";

import Blocks from "./pages/Blocks";
import Cards from "./pages/Cards";
import Forms from "./pages/Forms";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";

function Routes() {

    return(
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/blocks" component={Blocks}/>
            <Route path="/cards" component={Cards}/>
            <Route path="/forms" component={Forms}/>
            <Route path="/pricing" component={Pricing}/>
            <Route component={() => <div>Erro 404: Página não encontrada</div>}/>
        </Switch>
    )
}

export default Routes;