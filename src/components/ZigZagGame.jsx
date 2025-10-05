import { useEffect, useRef, useState } from "react";
import { Box, chakra } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ImRocket } from "react-icons/im";
import { BsStars } from "react-icons/bs";

const ZigzagGame = ({ ...props }) => {
  const svgRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 25 });
  const [dragging, setDragging] = useState(false);
  const [pathD, setPathD] = useState("");
  const [pathWidth, setPathWidth] = useState(200);
  const [endPoint, setEndPoint] = useState({ x: 200, y: 25 });

  const navigate = useNavigate();

  useEffect(() => {
    const width = 200 + Math.random() * 100;
    const height = 75;
    const segments = Math.floor(3 + Math.random() * 4);
    const segmentWidth = width / segments;
    const startUp = Math.random() > 0.5;

    let path = `M0,${height / 2}`;
    let lastPoint = { x: 0, y: height / 2 };

    for (let i = 1; i <= segments; i++) {
      const x = i * segmentWidth;
      let y;
      if ((i % 2 === 1 && startUp) || (i % 2 === 0 && !startUp)) {
        // go upward
        y = 10 + Math.random() * 10;
      } else {
        // go downward
        y = height - (10 + Math.random() * 10);
      }
      path += ` L${x},${y}`;
      lastPoint = { x, y };
    }

    setPathD(path);
    setPathWidth(width);
    setEndPoint(lastPoint);
    setPosition({ x: 0, y: height / 2 });
  }, []);

  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const path = svg.querySelector("path");
    const totalLength = path.getTotalLength();
    let closestPoint = { x: 0, y: 25 };
    let minDist = Infinity;
    let angle = 0;

    for (let i = 0; i <= totalLength; i += 1) {
      const pt = path.getPointAtLength(i);
      const dist = Math.hypot(pt.x - mouseX, pt.y - mouseY);

      if (dist < minDist) {
        minDist = dist;
        closestPoint = pt;

        const nextPt = path.getPointAtLength(Math.min(i + 1, totalLength));
        const dx = nextPt.x - closestPoint.x;
        const dy = nextPt.y - closestPoint.y;
        angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      }
    }

    setPosition({ x: closestPoint.x, y: closestPoint.y, angle });

    // end detection
    if (closestPoint.x >= pathWidth - 1) {
      setDragging(false);
      navigate("/portfolio");
    }
  };

  return (
    <Box
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      width={pathWidth + 45 + "px"}
      height="75px"
      position="relative"
      cursor="grab"
      userSelect="none"
      mx="auto"
      mt={6}
      {...props}
    >
      <chakra.svg
        ref={svgRef}
        width="100%"
        height="100%"
        stroke="secondary.600"
      >
        <path d={pathD} strokeWidth="1.5" fill="none" />
      </chakra.svg>

      <Box
        as={ImRocket}
        color={"primary.500"}
        onMouseDown={handleMouseDown}
        fontSize="40px"
        position="absolute"
        left={position.x - 20 + "px"}
        top={position.y - 20 + "px"}
        zIndex={10}
        transform={`rotate(${position.angle + 45}deg)`}
      />
      {!dragging && (
        <Box
          position="absolute"
          left={position.x - 20 + "px"}
          top={position.y + 25 + "px"}
          fontSize="12px"
          color="secondary.600"
          fontWeight="medium"
        >
          (Drag me!)
        </Box>
      )}
      <Box
        as={BsStars}
        color={"primary.500"}
        position="absolute"
        left={endPoint.x + "px"}
        top={endPoint.y - 25 + "px"}
        fontSize="50px"
        zIndex={5}
      />
    </Box>
  );
};

export default ZigzagGame;
