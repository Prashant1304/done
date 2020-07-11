import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import First from "./First"
import Second from "./Second"
import Third from "./Third"
import Fourth from "./Fourth"
import Fifth from "./Fifth"
import Sixth from "./Sixth"
import Seven from "./Seven"
import Eight from "./Eight"
import Nine from "./nine"
import Ten from "./Ten"
import Eleven from "./Eleven"
import Twelve from "./Twelve"
import React,{Component} from "react"
import Dealer from "./dealership"

class Render extends Component {
    render( ) {
        return(
            <div>
                <Router>
        <div>
          <Switch>
          <Route exact path="/">  
              <Dealer />
            </Route>
            <Route path="/firse">
              <First />
            </Route>
            <Route path="/second">
              <Second />
            </Route>
            <Route path="/third">
              <Third />
            </Route>
            <Route path="/fourth">
              <Fourth />
              </Route>
              <Route path="/fifth">
              <Fifth />
            </Route>
            <Route path="/sixth">
              <Sixth />
            </Route>
            <Route path="/seven">
              <Seven />
            </Route>
            <Route path="/eight">
              <Eight />
            </Route>
            <Route path="/nine">
              <Nine />
            </Route>
            <Route path="/ten">
              <Ten />
            </Route>
            <Route path="/eleven">
              <Eleven />
            </Route>
            <Route path="/twelve">
              <Twelve />
            </Route>
          </Switch>
        </div>
      </Router>
            </div>
        )
    }
}
export default Render