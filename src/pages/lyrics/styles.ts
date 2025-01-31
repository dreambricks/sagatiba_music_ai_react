import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr 35px !important;
  height: 100%;
  background: #ffdd2e;


  .content {
    grid-column: 2/3;
    padding: 100px 0 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 1.3rem;
      font-family: "Gopher-Bold", "sans-serif";
    }

    .description {
      margin-top: 40px;
      text-align: center;
    }

    button {
      margin-top: 40px;
      background: #75b947;
      border: none;
      color: black;
      font-family: "Gopher-Bold", "sans-serif";
      padding: 15px 40px 12px;
      border-radius: 12px;
    }

    .lyrics {
      margin-top: 40px;
      background: #f3592f;
      border-radius: 40px;
      height: 320px;
      padding: 25px 10px 25px 30px;

      .lyrics-holder {
        height: 100%;
        overflow: auto;

        pre{
      font-family: "Gopher-Medium", "sans-serif";
        
        }

        &:: -webkit-scrollbar {
          width: 5px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
          background: #ef7a32;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: #ffdd2e;
          border-radius: 10px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: #ffdd2e;
          border-radius: 10px;
        }
      }
    }

    .share {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-top: 40px;
      font-family: "Gopher-Bold", "sans-serif";
      font-size: 1.5rem;

      img {
        width: 50px;
      }
    }

    .advise {
      margin-top: 40px;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 560px 1fr !important;
  }

  @media (min-width: 1920px) {
    grid-template-columns: 1fr 1283px 1fr !important;



  .content {
   

    h1 {
      font-size:6rem;
    }

    .description {
      font-size:2.56rem;
    }

    button {
      font-size:4rem;
      padding: 33px 40px 29px;
      border-radius: 41px;
    }

    .lyrics {
      border-radius: 113px;
      height: 947px;
      padding: 85px 99px 21px 161px;

      .lyrics-holder {
        height: 100%;
        overflow: auto;
        font-size:2.623rem;

        p{
        margin-right:100px;
        text-align:justify;
        }

        &:: -webkit-scrollbar {
          width: 15px;
        }

       

        &::-webkit-scrollbar-thumb {
          border-radius: 115px;
        }

        &::-webkit-scrollbar-thumb:hover {
          border-radius: 15px;
        }
      }
    }

    .share {
      gap: 30px;
      font-size: 6.25rem;

      img {
        width: 160px;
      }
    }

    .advise {
      font-size: 2.5625rem;

    }
  }
`;
