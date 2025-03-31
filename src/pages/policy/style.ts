import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  background-color: #ffde2e;
  height: 100vh;
  overflow: auto;

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    font-family: "Gopher-Bold", "sans-serif";
    white-space: pre-line;
    user-select: text;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
    font-family: "Gopher-Medium", "sans-serif";
    white-space: pre-line;
    user-select: text;
  }

  .card {
    background: white;
    width: 80%;
    border-radius: 20px;
    padding: 40px 30px 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #ffdd2e;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(0, 0, 0);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgb(37, 37, 37);
      border-radius: 10px;
    }
  }
`;
