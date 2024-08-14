import React, { useState, useEffect, useRef } from "react";
import { FixedSizeList as List } from "react-window";

const DynamicHeightFixedSizeList = ({ items }) => {
  const [containerHeight, setContainerHeight] = useState(600);
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.getBoundingClientRect().height);
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial height

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} style={{ height: "10%" }}>
      <List
        height={containerHeight}
        itemCount={items.length}
        itemSize={50} // Set your item size
        width={containerWidth} // Adjust the width as needed
      >
        {({ index, style }) => <div style={style}>{items[index]}</div>}
      </List>
    </div>
  );
};

const App = () => {
  const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

  return (
    <div style={{ padding: 20, height: "100vh" }}>
      <DynamicHeightFixedSizeList items={items} />
      <div>------------------------</div>
    </div>
  );
};

export default App;
