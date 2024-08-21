import styled from "styled-components";

export const DashboardHeaderContainer = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    a{
        color: #dcdde1;
        text-decoration: none;    
    }

`
export const UserDataContainer = styled.div`
    width: 50%;

`

export const HeaderUserDataContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 1rem;
        button {
        display: flex;
        align-items: center;
        gap: .25rem;
        border: none;
        padding: 0.5rem 0.75rem;
        border-radius: 4px;
        background: #10ac84;
        color: #dcdde1;
        font-weight: bold;
        cursor: pointer;
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
        a{
            color: #dcdde1;
            text-decoration: none;
        }
    }
`