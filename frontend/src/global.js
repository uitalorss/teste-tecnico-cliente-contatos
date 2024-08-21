import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
    }

    body, input, textarea, button{
        font-family: 'Titillium Web', sans-serif;
        line-height: 130%;
    }

    body{
      background: #1a1a1a;
    }

    p{
        font-family: 'Titillium Web', sans-serif;
        line-height: 130%;
}
`;

export const DefaultButton = styled.button`
  width: 70%;
  padding: 1rem 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 1px;
  border: none;
  border-radius: 10px;
  outline: none;
  color: #ffffff;
  background: #5e60ce;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  &:hover {
    background: #8284fa;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #dcdde1;
`

export const SpanError = styled.span`
  &.active {
    width: 100%;
    padding: 1rem;
    background: #f1c40f20;
    color: #f39c12;
    border-radius: 10px;
    text-align: center;
    @media (max-width: 820px) {
      width: 100%;
    }
  }
`;