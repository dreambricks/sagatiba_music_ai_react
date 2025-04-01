import styled from "styled-components";

export const ContainerMenu = styled.div`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  margin-bottom: 10em;

  nav {
    width: 100%;
    height: 5em;
    background-color: #0090d0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  .head-menu {
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .hamburger {
      display: none;
      @media (max-width: 1280px) {
        display: block;
      }
    }

    img {
      width: 150px;
      @media (max-width: 1280px) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }

      @media (max-width: 900px) {
        width: 100px;
      }
    }
  }

  .menu {
    width: 100%;
    height: calc(100vh - 5em);
    background-color: #fff;
    position: fixed;
    top: 5em;
    z-index: 5;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;

    .menu-items {
      width: 100%;
      height: 100%;
      padding: 40px 40px 50px 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2.5rem;
      font-family: "Gopher-Bold", sans-serif;
      background-color: #fff;
      text-align: center;

      a {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        cursor: pointer;
        text-decoration: none;
        color: #000;
        width: 100%;

        span {
          .angle-right {
            width: 16px;
          }
        }
      }
    }
  }

  .hidden {
    transform: translateX(-100%);
  }

  .visible {
    transform: translateX(0);
  }

  .sub-menu {
    width: 100%;
    height: 5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
    font-family: "Gopher-Bold", sans-serif;
    background-color: #fff;
    text-align: center;
    position: fixed;
    top: 5em;
    left: 0;
    z-index: 999;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-decoration: none;
      color: #000;
      padding-left: 16px;
      padding-right: 16px;
      margin-right: 40px;
      cursor: pointer;
    }
  }

  @media (max-width: 1280px) {
    .head-menu {
      width: 90%;
    }
    .sub-menu {
      gap: 30px;
    }
  }

  @media (max-width: 900px) {
    margin-bottom: 4.5em;

    nav {
      height: 4.5em;
    }

    .menu {
      top: 4.5em;
      height: calc(100vh - 4.5em);
    }

    .sub-menu {
      display: none;
    }
  }
`;
