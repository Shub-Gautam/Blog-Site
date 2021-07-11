import React from "react";
import { Box } from "@material-ui/core";
//this is use to route like localhost:3000/details
import {BrowserRouter, Switch, useHistory} from 'react-router-dom'



//Import self made components
import Header from "./compoents/Header";
import Home from "./compoents/Home/Home";

import { Route,} from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import DetailView from "./compoents/post/DetailView";
import CreateView from "./compoents/post/CreateView";
import UpdateView from "./compoents/post/UpdateView";

import Login from './compoents/account/Login';
import { oktaAuthConfig, oktaSignInConfig } from './config';

const oktaAuth = new OktaAuth(oktaAuthConfig);

function AppWithRouterAccess() {
    const history = useHistory();

    const customAuthHandler = () => {
        history.push('/login');
    };

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };


    return (
        // because we cannot return multiple parent elements so we use this
        // you can also use div but it will appear in the DOM file in browser
        <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
        >
            <SecureRoute path='/' component={Header} />
            <Box style={{marginTop:64}}>
              <Switch>
                <Route exact path='/' component={Home} />
                  <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                  <Route path='/login/callback' component={LoginCallback} />
                <Route exact path='/details/:id'component={DetailView} />
                <Route exact path='/create' component={CreateView}/>
                <Route exact path='/update/:id' component={UpdateView}/>
              </Switch>
            </Box>
        </Security>

    );
}

export default AppWithRouterAccess;
