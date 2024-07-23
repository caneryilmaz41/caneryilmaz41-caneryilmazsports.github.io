import React, { useState } from "react";
import {
  AppBar,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Container,
  TextField,
  Typography,
  Tab,
  Tabs,
  createTheme,
  ThemeProvider,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#F8DE22',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const PlayerWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  paddingTop: "56.25%", // 16:9 aspect ratio
  backgroundColor: "#333",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
});

const Header = styled(AppBar)({
  backgroundColor: "#F8DE22",
  boxShadow: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 16px",
});

const Logo = styled("img")({
  height: "50px",
  marginLeft: '16px',
});

const Sidebar = styled(Paper)({
  backgroundColor: "#121212",
  color: "white",
  padding: "16px",
  borderRadius: "8px",
  height: "100%",
  maxHeight: "calc(100vh - 64px)",
  overflowY: "auto",
});

const ListItemStyled = styled(ListItem)({
  display: "flex",
  alignItems: "center",
  padding: "8px",
  borderRadius: 4,
  backgroundColor: "#1a1a1a",
  marginBottom: "8px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#444",
  },
});

const SearchField = styled(TextField)({
  backgroundColor: "#fff",
  borderRadius: "4px",
  marginBottom: "16px",
  "& .MuiInputBase-root": {
    borderRadius: "4px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px",
    color: "#000", // Yazı rengi
  },
  "& .MuiInputAdornment-root": {
    marginRight: "10px",
  },
  "& .MuiFormLabel-root": {
    color: "#000", // Placeholder rengi
  },
});

const CustomTabs = styled(Tabs)({
  backgroundColor: "#222",
  borderRadius: "8px",
  '& .MuiTabs-indicator': {
    backgroundColor: "#F8DE22",
  },
  '& .MuiTab-root': {
    color: '#fff',
    textTransform: 'none',
  },
  '& .Mui-selected': {
    color: '#F8DE22',
  },
});

const CustomTab = styled(Tab)({
  minWidth: '50%',
  width: '50%',
  textAlign: 'center',
});

const App = () => {
  const [selectedChannel, setSelectedChannel] = useState("yayinzirve.m3u8");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const Title = styled(Typography)({
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: "1px",
  });
  const iframeUrl =
    "https://bradm.ax/build/202403/05/b057cc1133c480972e29ee74d43333c0bbbffc7f/index.html?mediaUrl=";
  const title = "caneryılmazsports-hd";
  const duration = 0;
  const splashImgUrl = "https://i.ibb.co/VpSSbsd/logocum.png";

  const channels = [
 
    { name: "BeinSports 1", url: "yayinzirve.m3u8", logo: "/images/beinsports1.png" },
    { name: "BeinSports 2", url: "yayinb2.m3u8", logo: "/images/beinsports2.png" },
    { name: "BeinSports 3", url: "yayinb3.m3u8", logo: "/images/beinsports3.png" },
    { name: "BeinSports 4", url: "yayinb4.m3u8", logo: "/images/beinsports4.png" },
    { name: "BeinSports 5", url: "yayinb5.m3u8", logo: "/images/beinsports5.png" },
    { name: "BeinSports Max 1", url: "yayinbm1.m3u8", logo: "/images/beinsportsmax1.png" },
    { name: "BeinSports Max 2", url: "yayinbm2.m3u8", logo: "/images/beinsportsmax2.png" },
    { name: "TRT Spor", url: "yayintrtspor.m3u8", logo: "/images/trtspor.png" },
    { name: "S Sport 1", url: "yayinss.m3u8", logo: "/images/ssport1.png" },
    { name: "S Sport 2", url: "yayinss2.m3u8", logo: "/images/ssport2.png" },
    { name: "TV 85", url: "yayintv85.m3u8", logo: "/images/tv85.png" },
    { name: "Smart Spor", url: "yayinsmarts.m3u8", logo: "/images/smartspor.png" },
    { name: "Smart Spor 2", url: "yayinsms2.m3u8", logo: "/images/smartspor2.png" },
    { name: "Tivibu 1", url: "yayint1.m3u8", logo: "/images/tivibu1.png" },
    { name: "Tivibu 2", url: "yayint2.m3u8", logo: "/images/tivibu2.png" },
    { name: "Tivibu 3", url: "yayint3.m3u8", logo: "/images/tivibu3.png" },
    { name: "Exxen 1", url: "yayinex1.m3u8", logo: "/images/exxen1.png" },
    { name: "Exxen 2", url: "yayinex2.m3u8", logo: "/images/exxen2.png" },
    { name: "Exxen 3", url: "yayinex3.m3u8", logo: "/images/exxen3.png" },
    { name: "Exxen 4", url: "yayinex4.m3u8", logo: "/images/exxen4.png" },
    { name: "Exxen 5", url: "yayinex5.m3u8", logo: "/images/exxen5.png" },
    // Add more channels with appropriate logos
  ];

  const matches = [
    { time: "21:30", teams: "Lugano - Fenerbahçe", channel: "yayinsmarts.m3u8",kanal:"Smartspor" },
    
    // Add more matches with appropriate times and channels
  ];

  const tabs = ["Maç Listesi", "Kanallar"];

  const handleChannelClick = (channelUrl) => {
    setSelectedChannel(channelUrl);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredChannels = channels.filter((channel) =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const playerUrl = `${iframeUrl}${encodeURIComponent(
    `https://sonhafta.tvbom5.online/${selectedChannel}`
  )}&title=${encodeURIComponent(
    title
  )}&duration=${duration}&splashImgUrl=${encodeURIComponent(splashImgUrl)}`;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#121212",
        }}
      >
        <CssBaseline />
        <Header position="static">
          <Title>Caner Yılmaz Sports</Title>
        </Header>

        <Container
          maxWidth="lg"
          sx={{
            borderRadius:"10px",
            display: "flex",
            flexGrow: 1,
            flexDirection: { xs: "column", sm: "row" },
            backgroundColor: "#333",
            padding: 2,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              marginRight: { sm: 2 },
            }}
          >
            <PlayerWrapper>
              <iframe
                src={playerUrl}
                width="100%"
                height="400px"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video Player"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </PlayerWrapper>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              marginTop: { xs: 2, sm: 0 },
              backgroundColor: "#222",
              borderRadius: "8px",
              padding: 2,
            }}
          >
            <CustomTabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="tabs"
              variant="fullWidth"
            >
              {tabs.map((tab, index) => (
                <CustomTab key={index} label={tab} />
              ))}
            </CustomTabs>
            <PerfectScrollbar
              component="div"
              style={{ maxHeight: "calc(100vh - 200px)", paddingTop: "16px" }}
            >
              {activeTab === 1 && (
                <SearchField
                  fullWidth
                  variant="outlined"
                  placeholder="Kanal Ara"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <FontAwesomeIcon
                        icon={faTv}
                        style={{ marginRight: "8px" }}
                      />
                    ),
                  }}
                />
              )}
              <List>
                {activeTab === 0 && matches
                  .filter((match) =>
                    match.teams.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((match, index) => (
                    <ListItemStyled
                      button
                      key={index}
                      onClick={() => handleChannelClick(match.channel)}
                    >
                      <ListItemText
                        primary={`${match.time} - ${match.teams}`}
                        secondary={`${match.kanal}`}
                      />
                    </ListItemStyled>
                  ))}
                {activeTab === 1 && filteredChannels.map((channel, index) => (
                  <ListItemStyled
                    button
                    key={index}
                    onClick={() => handleChannelClick(channel.url)}
                  >
                    <Avatar
                      src={channel.logo}
                      alt={channel.name}
                      sx={{
                        marginRight: "8px",
                        width: 40,
                        height: 40,
                        objectFit: 'contain',
                      }}
                    />
                    <ListItemText
                      primary={channel.name}
                    />
                  </ListItemStyled>
                ))}
              </List>
            </PerfectScrollbar>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
