import React, { Children, createContext, useEffect, useState } from "react";

export const CardDataContext = createContext();

const Cards = [
  
  {
    pic: "EyePic",
    Symbol: "Spyware detection",
    Desc: "Our advanced spyware detection engine can identify if a device contains spyware or bugging software.",
  },
  {
    pic: "KeyLogger",
    Symbol: "Keylogger detection",
    Desc: "Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).",
  },
  {
    pic: "Tracking",
    Symbol: "Find tracking apps",
    Desc: "Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.",
  },
  {
    pic: "Mobile",
    Symbol: "OS integrity check",
    Desc: "Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.",
  },
  {
    pic: "Threat",
    Symbol: "Threat removal",
    Desc: "Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.",
  },
  {
    pic: "EasyUse",
    Symbol: "Easy to use",
    Desc: "We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.",
  },
];

const CardContext = ({ children }) => {
  const [CardsData, setCardsData] = useState([]);

  useEffect(() => {
    setCardsData(Cards);
  }, []);
  return (
    <CardDataContext.Provider value={{ CardsData }}>
      {children}
    </CardDataContext.Provider>
  );
};

export default CardContext;
