import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./style.module.less";

const Iframe = (payload) => {
  const [pay, setPay] = useState();

  const pay2 = useSelector((state) => state.data.link);

  console.log("dsfsa", pay);
  useEffect(() => {
    // if (payload != null) {
    setPay(pay2);
    // }
  }, [pay2]);
  return (
    <>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className={classes.iframe}
        src={pay}
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=YJyCaFyndEplWJsc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe> */}
    </>
  );
};
export default Iframe;
