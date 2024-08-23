import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import { useMemo } from "react";

const SlideInImage = ({ src, index }: { src: string; index: number }) => {
  const { width, fps } = useVideoConfig();
  const frame = useCurrentFrame();

  // Define the start frame for each image
  const startFrame = index * fps; // Each image starts at index * 1 second
  const endFrame = startFrame + fps; // Each image ends after 1 second

  // Define the animation parameters
  const slideIn = interpolate(frame - startFrame, [0, fps], [width, 0], {
    extrapolateRight: "clamp",
  });

  // Check if the current frame is within the visible range of the image
  const isVisible = frame >= startFrame && frame < endFrame;
  return isVisible ? (
    <img
      src={src}
      style={{
        position: "absolute",
        top: 0,
        left: slideIn, // Images will slide from the right
        width: "1080px", // Set your desired image width
        height: "720px",
        objectFit: "cover",
      }}
    />
  ) : null;
};

export const Composition2 = () => {
  const images = useMemo(() => [image1, image2, image3], []);
  return (
    <>
      {images.map((src, index) => (
        <SlideInImage src={src} index={index} />
      ))}
    </>
  );
};
