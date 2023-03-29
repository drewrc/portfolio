import React from "react";
import { useLottie } from "lottie-react";
import animationData from "./14592-loader-cat.json";

function Spinner () {
    const lottieCat = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    
      const { View } = useLottie(lottieCat);
      return (
        <div style={{
            width: '50vw',
            textAlign: 'center',
        }}>
        {View}
        </div>
      )
} 
export default Spinner;