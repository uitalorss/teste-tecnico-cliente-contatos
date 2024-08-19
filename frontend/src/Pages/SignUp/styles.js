import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 40rem;
    height: 20rem;
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
`;

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