import React, { createContext, useState, useEffect } from "react";

export const ReviewDataContext = createContext();

const Reviewdata2 = [
  {
    Review:
      "Absolutely love this app! The interface is clean, simple, and extremely user-friendly. I didn’t expect it to analyze my device this deeply. The breach checker was a shocker — I found two of my old email accounts listed in past data breaches and immediately took action. The app doesn’t just show info.",
    Reviewer: "Jennifer Black",
  },
  {
    Review:
      "This app is genuinely impressive. The way it breaks down device information and explains everything in understandable terms is amazing. No technical knowledge required. I’ve shared this with my family as well because it’s important to know where your data has been exposed. The best part is the breach history checker.",
    Reviewer: "Michael Carter",
  },
  {
    Review:
      "If you're looking for a tool that gives you both clarity and control over your device security, this is it. The dashboard is beautifully designed, animations are smooth, and everything responds instantly. I’ve been using it daily for the last week and have had zero issues. It's rare to find apps that focus on usefulness rather than ads or fluff — but this one does it perfectly.",
    Reviewer: "Ava Thompson",
  },
  {
    Review:
      "I downloaded this app out of curiosity, and it turned out to be one of the smartest decisions I’ve made. It alerted me to a breach I wasn’t even aware of, which could’ve caused real problems later. Peace of mind is priceless, and this app provides exactly that. You can tell that a lot of thought, research, and care has gone into building this.",
    Reviewer: "Emily Johnson",
  },
  {
    Review:
      "What I appreciate most is how transparent this app is. It tells you exactly what’s going on in your device without trying to scare you or force you into purchasing something. It's honest, clean, and straightforward. The performance is smooth and doesn’t drain battery or resources. A very reliable companion for everyday use.",
    Reviewer: "David Wilson",
  },
  {
    Review:
      "This is hands-down one of the most useful apps I’ve installed in recent months. The security audit feature is so detailed yet easy to understand. I loved the recommendations section that tells you what needs to be fixed and why. The breach checker is just brilliant — I had no idea my old college mail was leaked in a breach years ago!",
    Reviewer: "Sophia Martinez",
  },
  {
    Review:
      "I have tried many apps in this category, but none came close to the accuracy and depth of information this one provides. The best part? No complicated terms, no confusing UI — everything is laid out logically and with clarity. I feel more aware and in control of my data now.",
    Reviewer: "Daniel Lee",
  },
  {
    Review:
      "Very helpful and insightful. I love how the app focuses on user education and awareness rather than just numbers. It not only shows you security risks, but explains them in plain language. This approach is what makes it valuable. I truly trust this app now and use it regularly.",
    Reviewer: "Olivia Brown",
  },
  {
    Review:
      "I rarely leave reviews, but this app deserves one. The experience is smooth, the information is accurate, and the developers clearly understand user privacy. It helped me clean up old accounts, secure my passwords, and stay protected. I don’t think people realize how vulnerable they are online until they see the breach results. Eye-opener!",
    Reviewer: "James Anderson",
  },
];

const ReviewContext = ({ children }) => {
  const [ReviewData, setReviewData] = useState([]);

  // ✅ Set data only once
  useEffect(() => {
    setReviewData(Reviewdata2);
  }, []);

  return (
    <ReviewDataContext.Provider value={{ ReviewData}}>
      {children}
    </ReviewDataContext.Provider>
  );
};

export default ReviewContext;
