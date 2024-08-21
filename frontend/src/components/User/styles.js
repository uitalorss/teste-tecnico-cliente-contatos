import styled from "styled-components";

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 1rem;
    padding: 1rem;
`

export const ItemUserContainer = styled.table`
    background: #262626;
    border-radius: 8px;
    padding: .75rem;
    tr {
        th {
            text-align: left;
            width: 20%;
        }
        &.contact-item{
        display: flex;
        flex-direction: column;
        gap: 1rem 0;
        margin-top: 1rem;
        }
    }

`