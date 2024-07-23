import React, { useState, useEffect } from 'react';
import '../App.css';

const Channels = () => {
  const [currentChannel, setCurrentChannel] = useState(29);

  useEffect(() => {
    changeChannel(currentChannel);
  }, [currentChannel]);

  const changeChannel = (channel) => {
    const iframeUrl = "https://bradm.ax/build/202403/05/b057cc1133c480972e29ee74d43333c0bbbffc7f/index.html?mediaUrl=";
    const title = "caneryılmazsports-hd";
    const duration = 0;
    const splashImgUrl = "https://i.ibb.co/VpSSbsd/logocum.png";
    
    const mediaUrls = {
      1: "yayin1.m3u8",
      2: "yayinb2.m3u8",
      3: "yayinb3.m3u8",
      4: "yayinb4.m3u8",
      5: "yayinbm1.m3u8",
      6: "yayinbm2.m3u8",
      7: "yayinss.m3u8",
      8: "yayinss2.m3u8",
      9: "yayint1.m3u8",
      10: "yayint2.m3u8",
      11: "yayint3.m3u8",
      12: "yayinsmarts.m3u8",
      13: "yayinb5.m3u8",
      14: "yayinas.m3u8",
      15: "yayinsms2.m3u8",
      16: "yayinatv.m3u8",
      17: "yayintv8.m3u8",
      18: "yayintv85.m3u8",
      19: "yayinnbatv.m3u8",
      20: "yayinex1.m3u8",
      21: "yayinex2.m3u8",
      22: "yayinex3.m3u8",
      23: "yayinex4.m3u8",
      24: "yayinex5.m3u8",
      25: "yayinex6.m3u8",
      26: "yayinex7.m3u8",
      27: "yayinex8.m3u8",
      28: "yayintrtspor.m3u8",
      29: "yayinzirve.m3u8",
      30: "yayintrt1.m3u8"
    };
    
    const fullUrl = `${iframeUrl}${encodeURIComponent("https://sonhafta.tvbom5.online/" + mediaUrls[channel])}&title=${encodeURIComponent(title)}&duration=${duration}&splashImgUrl=${encodeURIComponent(splashImgUrl)}`;

    document.getElementById("video_player").innerHTML =
      `<iframe src="${fullUrl}" width="100%" height="400px" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  }

  const channels = [
    { id: 1, img: "trt1.jpg", onclick: () => setCurrentChannel(1) },
    { id: 28, img: "trtspornew.png", onclick: () => setCurrentChannel(28) },
    { id: 29, img: "beinsports1.png", onclick: () => setCurrentChannel(29) },
    { id: 1, img: "beinsports1.png", onclick: () => setCurrentChannel(1) },
    { id: 2, img: "beinsports2.png", onclick: () => setCurrentChannel(2) },
    { id: 3, img: "beinsports3.png", onclick: () => setCurrentChannel(3) },
    { id: 4, img: "beinsports4.png", onclick: () => setCurrentChannel(4) },
    { id: 13, img: "beinsports5.png", onclick: () => setCurrentChannel(13) },
    { id: 5, img: "beinsportsmax1.png", onclick: () => setCurrentChannel(5) },
    { id: 6, img: "beinsportsmax2.png", onclick: () => setCurrentChannel(6) },
    { id: 7, img: "ssport1.png", onclick: () => setCurrentChannel(7) },
    { id: 8, img: "ssport2.png", onclick: () => setCurrentChannel(8) }
  ];

  return (
    <div className="video-container">
      <div className="channel-list">
        {channels.map((channel) => (
          <div key={channel.id} className="channel" onClick={channel.onclick}>
            <img
              src={`images/tv.png`}
              style={{ borderRadius: '0px !important' }}
              width="20"
              height="20"
              loading="lazy"
              alt="TV icon"
            />
            <div className="away" style={{ textAlign: 'right' }}>
              <img
                src={`images/${channel.img}`}
                style={{ borderRadius: '0px !important', marginTop: '-10px' }}
                width="100"
                loading="lazy"
                alt={channel.img.split('.')[0]}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="video-box" id="video_player"></div>
      
      <div className="channel-list">
        {channels.map((channel) => (
          <div key={channel.id} className="channel" onClick={channel.onclick}>
            <img
              src={`images/tv.png`}
              style={{ borderRadius: '0px !important' }}
              width="20"
              height="20"
              loading="lazy"
              alt="TV icon"
            />
            <div className="away" style={{ textAlign: 'right' }}>
              <img
                src={`images/${channel.img}`}
                style={{ borderRadius: '0px !important', marginTop: '-10px' }}
                width="100"
                loading="lazy"
                alt={channel.img.split('.')[0]}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channels;
