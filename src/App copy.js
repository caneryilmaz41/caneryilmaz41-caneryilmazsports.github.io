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
});

const Logo = styled("img")({
  height: "50px",
  alignSelf: 'center',
  marginLeft: '16px',
});

const Sidebar = styled(Paper)({
  backgroundColor: "#121212",
  color: "white",
  padding: "16px",
  borderRadius: "8px",
  height: "100%",
  maxHeight: "calc(100vh - 64px)",
  overflow: "hidden",
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
  const [activeTab, setActiveTab] = useState(0); // State for active tab index

  const iframeUrl =
    "https://bradm.ax/build/202403/05/b057cc1133c480972e29ee74d43333c0bbbffc7f/index.html?mediaUrl=";
  const title = "caneryılmazsports-hd";
  const duration = 0;
  const splashImgUrl = "https://i.ibb.co/VpSSbsd/logocum.png";

  const channels = [
    { name: "TRT Spor", url: "yayintrtspor.m3u8", category: "Spor", logo: "path/to/trtsporlogo.png" },
    { name: "BeinSports 1", url: "yayinzirve.m3u8", category: "Spor", logo: "path/to/beinsports1logo.png" },
    { name: "BeinSports 2", url: "yayinb2.m3u8", category: "Spor", logo: "path/to/beinsports2logo.png" },
    { name: "BeinSports 3", url: "yayinb3.m3u8", category: "Spor", logo: "path/to/beinsports3logo.png" },
    { name: "BeinSports 4", url: "yayinb4.m3u8", category: "Spor", logo: "path/to/beinsports4logo.png" },
    { name: "BeinSports 5", url: "yayinb5.m3u8", category: "Spor", logo: "path/to/beinsports5logo.png" },
    { name: "BeinSports Max 1", url: "yayinbm1.m3u8", category: "Spor", logo: "path/to/beinsportsmax1logo.png" },
    { name: "BeinSports Max 2", url: "yayinbm2.m3u8", category: "Spor", logo: "path/to/beinsportsmax2logo.png" },
    { name: "S Sport 1", url: "yayinss.m3u8", category: "Spor", logo: "path/to/ssport1logo.png" },
    { name: "S Sport 2", url: "yayinss2.m3u8", category: "Spor", logo: "path/to/ssport2logo.png" },
    { name: "TV 85", url: "yayintv85.m3u8", category: "Ulusal 7/24", logo: "path/to/tv85logo.png" },
    { name: "Smart Spor", url: "yayinsmarts.m3u8", category: "Spor", logo: "path/to/smartsporlogo.png" },
    { name: "Smart Spor 2", url: "yayinsms2.m3u8", category: "Spor", logo: "path/to/smartspor2logo.png" },
    { name: "Tivibu 1", url: "yayint1.m3u8", category: "Spor", logo: "path/to/tivibu1logo.png" },
    { name: "Tivibu 2", url: "yayint2.m3u8", category: "Spor", logo: "path/to/tivibu2logo.png" },
    { name: "Tivibu 3", url: "yayint3.m3u8", category: "Spor", logo: "path/to/tivibu3logo.png" },
    { name: "Exxen 1", url: "yayinex1.m3u8", category: "Spor", logo: "path/to/exxen1logo.png" },
    { name: "Exxen 2", url: "yayinex2.m3u8", category: "Spor", logo: "path/to/exxen2logo.png" },
    { name: "Exxen 3", url: "yayinex3.m3u8", category: "Spor", logo: "path/to/exxen3logo.png" },
    { name: "Exxen 4", url: "yayinex4.m3u8", category: "Spor", logo: "path/to/exxen4logo.png" },
    { name: "Exxen 5", url: "yayinex5.m3u8", category: "Spor", logo: "path/to/exxen5logo.png" },
    // Add more channels with appropriate categories and logos
  ];

  const matches = [
    { time: "21:30", teams: "Lugano - Fenerbahçe", channel: "yayinsmarts.m3u8" },
    // Add more matches with appropriate times and channels
  ];

  const tabs = ["Maç Listesi", "Kanallar"]; // Define your tab labels

  const handleChannelClick = (channel) => {
    setSelectedChannel(channel.url);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredChannels = channels.filter((channel) => {
    const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === 1; // Kanallar sekmesi
    return matchesSearch && matchesCategory;
  });

  const playerUrl = `${iframeUrl}${encodeURIComponent(
    `https://sonhafta.tvbom5.online/${selectedChannel}`
  )}&title=${encodeURIComponent(title)}&duration=${duration}&splash=${encodeURIComponent(
    splashImgUrl
  )}`;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header position="static">
        <Logo src="https://i.ibb.co/VpSSbsd/logocum.png" alt="Logo" />
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center', marginLeft: '-50px' }}>
          Canlı TV Akışı
        </Typography>
      </Header>
      <Container maxWidth="xl" sx={{ paddingY: "16px", display: "flex", gap: "16px" }}>
        <Box sx={{ flex: "1", display: "flex", flexDirection: "column", gap: "16px" }}>
          <PlayerWrapper>
            <iframe
              src={playerUrl}
              frameBorder="0"
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
        <Box sx={{ width: "300px" }}>
          <Sidebar>
            <CustomTabs value={activeTab} onChange={handleTabChange}>
              <CustomTab label="Maç Listesi" />
              <CustomTab label="Kanallar" />
            </CustomTabs>
            <SearchField
              variant="outlined"
              placeholder="Ara..."
              value={searchQuery}
              onChange={handleSearchChange}
              fullWidth
            />
            <PerfectScrollbar>
              <List>
                {activeTab === 0 &&
                  matches.map((match, index) => (
                    <ListItemStyled
                      key={index}
                      button
                      onClick={() => handleChannelClick({ url: match.channel })}
                    >
                      <ListItemText primary={`${match.time} ${match.teams}`} secondary="Smartspor" />
                    </ListItemStyled>
                  ))}
                {activeTab === 1 &&
                  filteredChannels.map((channel, index) => (
                    <ListItemStyled
                      key={index}
                      button
                      onClick={() => handleChannelClick(channel)}
                    >
                      <Avatar src={channel.logo} alt={channel.name} sx={{ marginRight: "8px" }} />
                      <ListItemText primary={channel.name} />
                    </ListItemStyled>
                  ))}
              </List>
            </PerfectScrollbar>
          </Sidebar>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
