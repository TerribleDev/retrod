import React from "react";
import { Provider } from "react-redux";
import Boxes from "./boxes/Boxes";
import styles from "./App.module.css";
import {
  Grid,
  Paper,
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Menu
} from "@material-ui/core";
import setupStore from "./store/setupStore.js";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <CssBaseline>
      <Provider store={setupStore()}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Retro.d
            </Typography>
          </Toolbar>
        </AppBar>
        <Container fluid>
          <Grid fluid container spacing={3}>
            <Grid item xs={4}>
              <Card>xs=3</Card>
            </Grid>
            <Grid item xs={4}>
              <Card>xs=3</Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography component="p">
                    well meaning and kindly.
                  </Typography>
                  <CardActions>
                    <Button size="small">Dismiss</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Provider>
    </CssBaseline>
  );
}

export default App;
