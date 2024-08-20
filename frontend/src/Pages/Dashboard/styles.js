import styled from "styled-components";

export const DashboardHeaderContainer = styled.div`
    padding: 2rem 1rem;

`
export const UserDataContainer = styled.div`
    margin-top: 2rem;
    width: 50%;
    h3{
        margin: 2rem 1rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 0 2rem;
    justify-content: center;
    button{
        width: 15rem;
        &.delete{
            background: #c23616;
        }
    }
`