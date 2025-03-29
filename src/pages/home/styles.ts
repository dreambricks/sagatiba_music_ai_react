import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;

export const ButtonSiga = styled.button`
  background-color: #ff5722;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-image: url("/path-to-your-image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    background-color: #e64a19;
  }

  &:active {
    transform: scale(0.98);
  }
`;
