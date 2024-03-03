import React, { useState } from 'react';
import './App.css';
import logo from './images/logocum.png';
import ReactPlayer from 'react-player';

import banner from './images/cybanner.png';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  
  const channels = [
    { name: 'Bein Sports 1', link: 'https://corsproxy.link/?https://odin.cd9184d3e95e6.shop/1/chunk_hd.m3u8' },
    { name: 'Bein Sports 1 Yedek', link: 'https://corsproxy.org/?https://cakal.click/yayin1.m3u8' },
    { name: 'Bein Sports 2', link: 'https://corsproxy.org/?https://cakal.click/yayinb2.m3u8' },
    { name: 'Bein Sports 3', link: 'https://corsproxy.org/?https://cakal.click/yayinb3.m3u8' },
    { name: 'Exxen', link: 'https://corsproxy.org/?https://cakal.click/yayinex1.m3u8' },
    { name: 'S Sport 1', link: 'https://corsproxy.org/?https://cakal.click/yayinss.m3u8' },
    { name: 'Tivibu Spor 1', link: 'https://corsproxy.org/?https://cakal.click/yayint1.m3u8' },
    { name: 'A Spor', link: 'https://corsproxy.org/?https://cakal.click/yayinas.m3u8' },
    { name: 'Trt Spor', link: 'https://corsproxy.org/?https://cakal.click/yayintrtspor.m3u8' }
    // Diğer kanallar buraya eklenebilir
  ];

  const changeChannel = (newVideoUrl) => {
    setVideoUrl(newVideoUrl);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </header>

      <div className='fullbody'>
        <img src={banner} alt="Banner" className="banner-image" />
        <div className="video-section">
          <div className="channel-buttons">
            {/* Kanal Butonları */}
            {channels.map(channel => (
              <button key={channel.name} className="btn btn-secondary" onClick={() => changeChannel(channel.link)}>
                {channel.name}
              </button>
            ))}
          </div>
          <div className="video-container">
            {/* Video Oynatıcı */}
            <ReactPlayer
              light='logocum.png'
              className='react-player'
              url={videoUrl}
              width='100%'
              height='100%'
              controls={true}
              playing={true}
            />
          </div>
          <div className="point-status">
            {/* Puan Durumu */}
            <iframe className='puancetveli'
              frameBorder="0"
              scrolling="no"
              width="300"
              height="800"
              src="https://www.fctables.com/turkey/super-lig/iframe/?type=table&lang_id=7&country=220&template=33&team=185954&timezone=Europe/Istanbul&time=24&po=1&ma=1&wi=1&dr=1&los=1&gf=1&ga=0&gd=0&pts=1&ng=0&form=0&width=300&height=700&font=Verdana&fs=10&lh=34&bg=0C2D57&fc=FFFFFF&logo=1&tlink=0&ths=1&thb=1&thba=0C2D57&thc=FFFFFF&bc=030637&hob=030637&hobc=ebe7e7&lc=333333&sh=1&hfb=1&hbc=030637&hfc=FFFFFF"
              title="fcTables"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
