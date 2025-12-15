import React from "react";

interface ImagePlaceholderProps {
  title: string;
  description: string;
  elements?: string[];
  size?: "small" | "medium" | "large" | "full";
  width?: string;
  height?: string;
}

export default function ImagePlaceholder({
  title,
  description,
  elements,
  size = "medium",
  width,
  height,
}: ImagePlaceholderProps) {
  const dimensions = {
    small: { w: "100%", h: "150px" },
    medium: { w: "100%", h: "250px" },
    large: { w: "100%", h: "350px" },
    full: { w: "100%", h: "450px" },
  };

  const dim = dimensions[size];

  return (
    <div
      className={`image-placeholder ${size}`}
      style={{
        width: width || dim.w,
        minHeight: height || dim.h,
      }}
    >
      <span className="image-placeholder-dimensions">
        {size === "small" && "~150px"}
        {size === "medium" && "~250px"}
        {size === "large" && "~350px"}
        {size === "full" && "~450px"}
      </span>
      <div className="image-placeholder-title">{title}</div>
      <p className="image-placeholder-description">{description}</p>
      {elements && elements.length > 0 && (
        <div className="image-placeholder-elements">
          <strong>Visual Elements to Include:</strong>
          <ul>
            {elements.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
