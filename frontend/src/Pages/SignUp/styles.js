import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: .25rem;
  padding: 2rem 3rem;
  a{
    color: #dcdde1;
    text-decoration: none;
  }
  @media only screen and (max-width: 575px) {
    padding: 1rem;
    width: 100%;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 40rem;
    padding: 1rem 2rem;
    color: #dcdde1;
    input{
        padding: 1rem 0.75rem;
        border-radius: 10px;
        border: 1px solid #c0c0c0;
    }
    button{
        width: 100%;
    }

    @media only screen and (max-width: 575px) {
      padding: 0 2rem;
      width: 100%;
      input{
        width: 100%;
      }
      h2{
        text-align: center;
      }
    }
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  label {
    font-weight: 500;
  }
  input {
    padding: 1rem 0.75rem;
    border-radius: 10px;
    border: 1px solid #c0c0c0;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
  span{
    &.tooltip-text{
      font-size: .75rem;
    }
  }
`;

