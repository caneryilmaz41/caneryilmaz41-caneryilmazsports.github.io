import React, { useState } from 'react';
import './App.css';
import logo from './images/logocum.png';
import ReactPlayer from 'react-player';

import banner from './images/cybanner.png';

function App() {
  const [videoUrl, setVideoUrl] = useState('https://corsproxy.org/?https://cakal.click/yayinzirve.m3u8  '); // Varsayılan video URL

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
            <button className="btn btn-secondary" onClick={() => changeChannel('https://corsproxy.org/?https://cakal.click/yayinzirve.m3u8')}>
              Bein Sports 1
            </button>
            <button className="btn btn-secondary" onClick={() => changeChannel('https://corsproxy.org/?https://cakal.click/yayin1.m3u8')}>
              Bein Sports 1 Yedek
            </button>
            <button className="btn btn-secondary" onClick={() => changeChannel('https://corsproxy.org/?https://cakal.click/yayinb2.m3u8')}>
              Bein Sports 2
            </button>
            <button className="btn btn-secondary" onClick={() => changeChannel('https://corsproxy.org/?https://cakal.click/yayinb3.m3u8')}>
              Bein Sports 3
              {/* //dflfddfg */}
            </button>
            <button className="btn btn-secondary" onClick={() => changeChannel('https://corsproxy.org/?https://cakal.click/yayinex1.m3u8')}>
              Exxen
            </button>
            <button className="btn btn-secondary" onClick={() => changeChannel('https://corsproxy.org/?https://cakal.click/yayinss.m3u8')}>
              S Sport 1
            </button>
            <button className="btn btn-secondary" onClick={() => changeChannel('https://corsproxy.org/?https://cakal.click/yayint1.m3u8')}>
              Tivibu Spor 1
            </button>
            <button className="btn btn-secondary" onClick={() => changeChannel('https://corsproxy.org/?https://cakal.click/yayinas.m3u8')}>
              A Spor
            </button>
            <button className="btn btn-secondary" onClick={() => changeChannel('https://corsproxy.org/?https://cakal.click/yayintrtspor.m3u8')}>
              Trt Spor
            </button>
            {/* Diğer kanal butonları buraya eklenmeli */}
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
