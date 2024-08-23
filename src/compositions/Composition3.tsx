import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import { useMemo } from "react";

const RotateZoomImage = ({ src, index }: { src: string; index: number }) => {
  const { width, height, fps } = useVideoConfig();
  const frame = useCurrentFrame();

  // Define the start and end frames for each image
  const startFrame = index * fps; // Each image starts at index * 1 second
  const endFrame = startFrame + fps; // Each image ends after 1 second

  // Calculate progress based on frame
  const progress = (frame - startFrame) / fps;

  // Ensure progress is clamped between 0 and 1
  const clampedProgress = Math.max(0, Math.min(1, progress));

  // Interpolate rotation and scale values
  const rotation = interpolate(clampedProgress, [0, 1], [0, 5], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(clampedProgress, [0, 1], [1, 1.2], {
    extrapolateRight: "clamp",
  });

  // Center the image vertically and horizontally
  const top = height / 2 - (720 * scale) / 2; // Adjust based on image height and scale
  const left = width / 2 - (1080 * scale) / 2; // Adjust based on image width and scale

  // Check if the current frame is within the visible range of the image
  const isVisible = frame >= startFrame && frame < endFrame;

  return isVisible ? (
    <img
      src={src}
      style={{
        position: "absolute",
        top: top, // Center vertically
        left: left, // Center horizontally
        width: `${1080 * scale}px`, // Scale width
        height: `${720 * scale}px`, // Scale height
        objectFit: "cover",
        transform: `rotate(${rotation}deg)`,
        transition: "transform 1s ease-in-out",
      }}
    />
  ) : null;
};

export const Composition3 = () => {
  const images = useMemo(() => [image1, image2, image3], []);

  return (
    <>
      {images.map((src, index) => (
        <RotateZoomImage src={src} index={index} />
      ))}
    </>
  );
};
