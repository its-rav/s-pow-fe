import React from "react";
import "./App.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container } from "@mui/material";
import { Box, Stack } from "@mui/system";

import { purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "./assets/logo192.png";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
declare global {
  interface Window {
    solana: any;
  }
}
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#3f48cc",
      },
    },
  });
  const [value, setValue] = React.useState(0);
  const [proposerValue, setProposerValue] = React.useState(0);
  const [menuValue, setMenuValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleProposerChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setProposerValue(newValue);
  };
  const handleMenuChange = (event: React.SyntheticEvent, newValue: number) => {
    setMenuValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <header
        style={{
          width: "100%",
          height: "65px",
          padding: "5px 30px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" height={"100%"} />
        <div>
          <Tabs
            value={menuValue}
            onChange={handleMenuChange}
            textColor="secondary"
            indicatorColor="secondary"
            style={{ color: "white" }}
            aria-label="secondary tabs example"
          >
            <Tab
              {...a11yProps(0)}
              style={{ color: "white" }}
              label="Proposals"
            />
            <Tab
              {...a11yProps(1)}
              style={{ color: "white" }}
              label="POWs"
            />
          </Tabs>
        </div>
        <Box marginRight={"60px"}>
          <Button
            onClick={() => {
              window?.solana?.connect();
            }}
            variant="outlined"
          >
            {window?.solana?.isConnected ? "Bp...Y1wB" : "Connect wallet"}
          </Button>
        </Box>
      </header>
      <Container disableGutters>
        <Container maxWidth={"lg"}>
          <TabPanel value={menuValue} index={0}>
            <Button style={{float:"right"}} variant="contained">Create Proposal</Button>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={proposerValue}
                onChange={handleProposerChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab {...a11yProps(0)} label="Pending"></Tab>
                <Tab {...a11yProps(1)} label="Approved"></Tab>
              </Tabs>
            </Box>
            <Box>
              <TabPanel value={value} index={0}>
                <Stack>
                  <Item>Proposal 1901<Button style={{float:"right"}} size="small" variant="text">Approve</Button></Item>
                  <Item>Proposal 1902<Button style={{float:"right"}} size="small" variant="text">Approve</Button></Item>
                  <Item>Proposal 1906<Button style={{float:"right"}} size="small" variant="text">Approve</Button></Item>
                </Stack>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Stack>
                  <Item>Proposal 2901</Item>
                  <Item>Proposal 2902</Item>
                  <Item>Proposal 2906</Item>
                </Stack>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Stack>
                  <Item>Proposal 3901</Item>
                  <Item>Proposal 3902</Item>
                  <Item>Proposal 3906</Item>
                </Stack>
              </TabPanel>
            </Box>
          </TabPanel>
          <TabPanel value={menuValue} index={1}>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab {...a11yProps(2)} label="Available"></Tab>
                <Tab {...a11yProps(0)} label="Submitted"></Tab>
                <Tab {...a11yProps(1)} label="Claimed"></Tab>
              </Tabs>
            </Box>
            <Box>
              <TabPanel value={value} index={0}>
                <Stack>
                  <Item>Proposal 1 <Button style={{float:"right"}} size="small" variant="text">Claim</Button></Item>
                  <Item>Proposal 2 <Button style={{float:"right"}} size="small" variant="text">Claim</Button></Item>
                  <Item>Proposal 3 <Button style={{float:"right"}} size="small" variant="text">Claim</Button></Item>
                </Stack>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Stack>
                  <Item>Proposal 8</Item>
                  <Item>Proposal 9</Item>
                  <Item>Proposal 10</Item>
                </Stack>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Stack>
                  <Item>Proposal 901</Item>
                  <Item>Proposal 902</Item>
                  <Item>Proposal 906</Item>
                </Stack>
              </TabPanel>
            </Box>
          </TabPanel>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
