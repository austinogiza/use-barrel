"use client"
import styled, { keyframes } from "styled-components"

const PageLoading = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-row">
        {" "}
        <div>
          {" "}
          <Shimmer />
        </div>
        <div>
          {" "}
          <Shimmer />
        </div>
      </div>
      <div>
        {" "}
        <Shimmer />
      </div>
      <div>
        {" "}
        <Shimmer />
      </div>
    </div>
  )
}
const loading = keyframes`
0%{
  transform: translateX(-150%);
}
50%{
  transform: translateX(-60%);
}
100%{
  transform: translateX(150%);
}
`
const Shimmer = styled.div`
  position: absolute;
  animation: ${loading} 2s infinite;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  transform: skew(-45deg);
  background: rgba(255, 255, 255, 0.8);
`

export default PageLoading
