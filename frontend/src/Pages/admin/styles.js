import styled from "styled-components";

export const AdminContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #dcdde1;
    div.admin-nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 3rem;
        a{
            color: #dcdde1;
            text-decoration: none;
        }
    }
    @media only screen and (max-width: 767px) {
        div.admin-nav{
        padding: 2rem 1rem 0 1rem; 
        }
    }
`

export const InfoUserContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    color: #dcdde1;
    padding: 1rem;
    width: 50%;
    @media (min-width: 992px) and (max-width: 1199px) {
        width: 70%;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        margin: 0 auto;
        width: 80%;
    }

    @media (min-width: 576px) and (max-width: 767px) {
        margin: 0 auto;
        width: 90%;
    }

    @media only screen and (max-width: 575px) {
        width: 100%;
    }
`