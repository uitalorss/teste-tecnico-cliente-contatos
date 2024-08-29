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
    &.data{
        tr {
            th {
                text-align: left;
                width: 30%;
            }
            td{
              &.data{
                input{
                    display: none;
                }
                span{
                    color: #c0c0c0;
                }
              }  
            }
        }
    }
    &.input{
        tr{
            th {
                text-align: left;
                width: 30%;
            }
            td{
                span{
                    display: none;
                }
                input{
                    width: 100%;
                    padding: .5rem;
                    border-radius: 4px;
                    border: none;
                }
            }
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
    &.inactive {
        display: none;
    }
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
            background: #c23616;
        };
        &.updateActive{
            background: #c23616
        }
        &.updateInactive{
            display: none;
        }

}
`