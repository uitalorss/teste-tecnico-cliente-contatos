import styled from "styled-components";

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 1rem;
    background: #222f3e;
    padding: 1rem;
    border-radius: 8px;
`

export const ItemUserContainer = styled.table`
    background: #353b48;
    border-radius: 8px;
    padding: .75rem;
    tr {
        th {
            text-align: left;
            width: 20%;
        }
    }

`