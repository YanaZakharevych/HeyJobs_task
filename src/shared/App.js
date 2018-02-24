import React, { Component } from 'react'
import routes from './routes'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import NoMatch from './views/NoMatch/NoMatch'
import styled from 'styled-components';

const Layout = styled.div`
  font-family: Roboto, sans-serif;
  display: flex;
  flex-flow: column;
  align-items: center;
  color: #4c4c4c;
`;

const Content = styled.div`
  max-width: 1024px;
  width: 100%;
`;

const NavbarWrapper = styled.div`
    width: 100%;
`;

class App extends Component {
    render() {
        return (
                <Layout>
                    <NavbarWrapper>
                        <Navbar />
                    </NavbarWrapper>
                    <Content>
                        <Switch>
                            {routes.map(({ path, exact, component: Component, ...rest }) => (
                                <Route key={path} path={path} exact={exact} render={(props) => (
                                    <Component {...props} {...rest} />
                                )} />
                            ))}
                            <Route render={(props) => <NoMatch {...props} /> } />
                        </Switch>
                    </Content>
                </Layout>
        );
    }
}

export default App