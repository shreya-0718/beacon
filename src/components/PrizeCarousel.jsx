import { useEffect, useState } from "react"

const images = import.meta.glob("../images/prizes/*.{png,jpg,jpeg,svg}", { eager: true })
const prizeImages = Object.values(images).map((m) => m.default)

export default function PrizeCarousel({
  circleThickness = 8,
  redColor = "#7a0000",
  blueColor = "var(--color-ocean)",
  slideSpeed = 15, 
  imageSize = 150, 
}) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (prizeImages.length === 0) return

    let lastTime = performance.now()

    const step = (time) => {
      const delta = time - lastTime
      lastTime = time
      setOffset((prev) => (prev + (slideSpeed * delta) / 1000) % (imageSize * prizeImages.length))
      requestAnimationFrame(step)
    }

    const animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [slideSpeed, imageSize])

  if (prizeImages.length === 0) return <p>No prizes found!</p>

  const formatName = (filename) => {
    let name = filename.split(".")[0]

    name = name.replace(/[^a-zA-Z\s-]+$/g, "")

    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .trim() + "!"
  }

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          transform: `translateX(-${offset}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {prizeImages.concat(prizeImages).map((img, idx) => {
          const color = idx % 2 === 0 ? redColor : blueColor
          const filename = img.split("/").pop()
          const name = formatName(filename)

          return (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 10px",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  border: `${circleThickness}px solid ${color}`,
                  borderRadius: "50%",
                  width: `${imageSize}px`,
                  height: `${imageSize}px`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxSizing: "border-box",
                  transition: "border-color 0.3s ease",
                }}
              >
                <img
                  src={img}
                  alt={name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>{name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}