import { css } from "@mui/material";

export const globalStyles = css`
  * {
    box-sizing: "border-box";
  }

  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: "Public Sans, sans-serif";
    color: "#292929";
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  //--------------SCROLL-BAR--------------------

  body::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  body::-webkit-scrollbar-track {
    background: #fff;
  }

  body::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 20px;
  }

  body::-webkit-scrollbar-thumb:hover {
    background: gray;
    cursor: pointer;
  }
`;
