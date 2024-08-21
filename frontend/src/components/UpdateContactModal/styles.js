import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog"

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #1a1a1a;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    h2 {
      color: #d9d9d9;
    }
    input {
      font-size: 1rem;
      padding: 1rem;
      width: 100%;
      background: #262626;
      border: none;
      outline: none;
      color: #d9d9d9;
      line-height: 1.6;
      border-radius: 8px;
    }
    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 575px) {
      min-width: 24rem;
      padding: 1.5rem 2rem;
  }
`;

