import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 1rem;
    background: #1a1a1a;
    padding: 1rem;
    border-radius: 8px;
`

export const ItemContactContainer = styled.table`
    tr {
        th {
            text-align: left;
            width: 30%;
        }
    }

`

export const Example = styled.table`
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

export const ActionsContactContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    
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
    &.delete{
        background: #c23616
    }
}
`