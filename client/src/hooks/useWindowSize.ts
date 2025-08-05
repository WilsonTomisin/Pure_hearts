import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [innerWidth, setInnerWWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setInnerWWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
  }, [])
  const isMobile = innerWidth < 768
  const isTabletandMobile = innerWidth < 1024

  return {
    isMobile,
    isTabletandMobile,
    innerWidth,
  }
}

export default useWindowSize
