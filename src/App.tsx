import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import styles from "./styles/App.module.css";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className={styles.appContainer}>
                <div className={styles.contentContainer}>
                    <Switch>
                        <Route exact path="/(|signin)" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
