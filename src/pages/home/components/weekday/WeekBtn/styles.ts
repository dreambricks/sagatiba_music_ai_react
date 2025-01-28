import styled from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background: ${(props) => (props.selected ? "#F3592F" : "#FFDD2E")};
    padding: 0px 25px;
    font-size: 1rem;
    color: black;
    text-transform: uppercase;
    border: none;
    margin-bottom: 10px;
    border-radius: 20px;
    cursor: pointer;
    height: 82px;
    width: 62px;

    &.btn-img {
      padding-bottom: 0;
      padding-top: 0;
      height: 82px;
      display: flex;
      justify-content: center;

      img {
        display: block;
        width: 20px;
        height: 82px;
      }
    }
  }

  p {
    text-transform: uppercase;
    font-size: 0.5rem;
    font-weight: 600;
  }

  @media (min-width: 620px) {
    button {
      font-size: 1.2rem;
      margin-bottom: 20px;
      height: 92px;
      width: 72px;

      &.btn-img {
        height: 92px;

        img {
          display: block;
          width: 20px;
          height: 92px;
        }
      }
    }

    p {
      font-size: 0.7rem;
    }
  }

  @media (min-width: 1024px) {
    button {
      font-size: 1.5rem;
      margin-bottom: 30px;
      height: 102px;
      width: 82px;

      &.btn-img {
        height: 102px;

        img {
          display: block;
          width: 30px;
          height: 102px;
        }
      }
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 1024px) {
    button {
      font-size: 1.5rem;
      margin-bottom: 30px;
      height: 152px;
      width: 132px;

      &.btn-img {
        height: 152px;

        img {
          width: 50px;
          height: 152px;
        }
      }
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 1920px) {
    button {
      font-size: 5rem;
      margin-bottom: 30px;
      height: 273px;
      width: 211px;

      &.btn-img {
        height: 273px;

        img {
          width: 100px;
          height: 273px;
        }
      }
    }

    p {
      font-size: 1.125rem;
    }
  }
`;
