import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./page/Home";
import Oaths from "./page/Oaths";
import Faq from "./page/Faq";
import Support from "./page/Support";
import Rules from "./page/Rules";
import Privacy from "./page/Privacy";
import ContactUsCeo from "./page/ContactUsCeo";
import AboutUs from "./page/AboutUs";
import Regulations from "./page/Regulations";
import ContactUs from "./page/ContactUs";
import {Helmet} from "react-helmet";
import Departmants from "./page/Departmants";
import Departmant from "./page/Departmant";
import Project from "./page/Project";
import DProjects from "./page/DProjects";
import Projects from "./page/Projects";


export default function App() {
    return (
        <React.Fragment>
            <Helmet>
                {/*<title>Comidt</title>*/}
                <link rel="shortcut icon" href="images/favicon.ico"/>
            </Helmet>
            <Router>
                <Switch>
                    {/*<Route  path="/dashboard">*/}
                    {/*    <Admin/>*/}
                    {/*</Route>*/}
                     <Route exact path="/departments">
                        <Departmants/>
                    </Route>
                    <Route exact path="/department/:id">
                        <Departmant/>
                    </Route>
                    {/*<Route exact path="/projects/:id">*/}
                    {/*    <Projects/>*/}
                    {/*</Route>*/}
                    <Route exact path="/projects">
                        <DProjects/>
                    </Route>
                    <Route exact path="/project/:id">
                        <Project/>
                    </Route>
                    <Route exact path="/aboutus">
                        <AboutUs/>
                    </Route>
                    <Route exact path="/contactus">
                        <ContactUs/>
                    </Route>
                    <Route exact path="/oaths">
                        <Oaths/>
                    </Route>
                    <Route exact path="/faq">
                        <Faq/>
                    </Route>
                    <Route exact path="/rules">
                        <Rules/>
                    </Route>
                    <Route exact path="/support">
                        <Support/>
                    </Route>
                    <Route exact path="/privacy">
                        <Privacy/>
                    </Route>
                    <Route exact path="/contact-ceo">
                        <ContactUsCeo/>
                    </Route>
                    <Route exact path="/regulations">
                        <Regulations/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="*">
                        <div>
                            <h3>
                                No match
                            </h3>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    );
}
