import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./views/home";
import SearchList from "./views/search";

import { SearchProvider } from "./contexts/Search"

function Layout() {
  return (
    <div className="layout">
        <BrowserRouter>
            <Header />
            <Container>
                <SearchProvider>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/search" component={SearchList} />
                    </Switch>
                </SearchProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    </div>
  );
};

export default Layout;
