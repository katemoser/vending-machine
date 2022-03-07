import { Route, Switch, Redirect } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Cake from "./Cake";
import RichManTears from "./RichManTears";
import PocariSweat from "./PocariSweat";

/**
 * 
 */
function Routes(){
    return (
        <Switch>
            <Route exact path="/"><VendingMachine /></Route>
            <Route exact path="/cake"><Cake /></Route>
            <Route exact path="/tears"><RichManTears /></Route>
            <Route exact path="/pocari"><PocariSweat /></Route>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Routes;