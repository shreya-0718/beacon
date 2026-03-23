import { useEffect, useState } from "react"

const images = import.meta.glob("../images/prizes/*.{png,jpg,jpeg,svg}", { eager: true })
const prizeImages = Object.entries(images).map(([path, mod]) => ({
  src: mod.default,
  name: path.split("/").pop().split(".")[0],
}))

export default function PrizeCarousel({
  circleThickness = 8,
  redColor = "#7a0000",
  blueColor = "var(--color-ocean)",
  slideSpeed = 15,
  imageSize = 150,
  gap = 20,
}) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let last = performance.now()
    const total = prizeImages.length * (imageSize + gap)

    const step = (t) => {
      const d = t - last
      last = t
      setOffset((o) => {
        const n = o + (slideSpeed * d) / 1000
        return n >= total ? n - total : n
      })
      requestAnimationFrame(step)
    }

    const f = requestAnimationFrame(step)
    return () => cancelAnimationFrame(f)
  }, [slideSpeed, imageSize, gap])

  const formatName = (raw) =>
    raw
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ") + "!"

  if (prizeImages.length === 0) return <p style={{ color: "white" }}>No prizes found!</p>

  return (
    <div style={{ overflow: "hidden", width: "100%", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          transform: `translateX(-${offset}px)`,
          whiteSpace: "nowrap",
        }}
      >
        {[...prizeImages, ...prizeImages].map((img, idx) => {
          const color = idx % 2 === 0 ? redColor : blueColor
          const name = formatName(img.name)
          return (
            <div
              key={idx}
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: `${gap}px`,
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
                }}
              >
                <img
                  src={img.src}
                  alt={name}
                  style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "50%" }}
                />
              </div>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "white",
                }}
              >
                {name}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}