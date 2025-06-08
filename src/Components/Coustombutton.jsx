import { Button, colors } from "@mui/material";
import React from "react";

      
function Coustombutton({color,variant,onClick,width,height,padding,borderRadius='4px',backgroundColor,buttonname,fontWeight,fontSize,}) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      style={{
        fontSize:fontSize,
        fontWeight:fontWeight,
        color:color,
        backgroundColor:backgroundColor,
        width,
        padding,
        height,
        borderRadius: borderRadius,
      }}
    >
      {buttonname}
    </Button>
  );
}

export default Coustombutton;
