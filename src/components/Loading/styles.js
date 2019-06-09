import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  display: flex;
  border: 12px solid #fff;
  border-radius: 50%;
  border-top: 12px solid #fc6963;
  width: 90px;
  height: 90px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
