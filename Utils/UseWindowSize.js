import React, { useLayoutEffect, useState } from "react"

export default function UseWindowSize() {
  const [ width, setWidth] = useState(0)

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return width
}
