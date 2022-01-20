import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 20rem;
    padding: 2rem 2rem;
    position: relative;
    
    &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #F3F8FA;
        z-index: -1;
        opacity: .8;
        
    }
`;

export const Left = styled.div`
    width: 33%;
    padding-right: 20px;
    text-align: left;
`;

export const Title = styled.h3`
    margin-bottom: 30px;
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;


export const Center = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
`;

export const Logo = styled.div`
    height: 7rem;
    margin-bottom: 50px;
`;

export const SocialContainer = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
`;

export const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Right = styled.div`
    width: 33%;
    padding-left: 20px;
    text-align: left;
`;

export const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

export const Payment = styled.img`
    width: 50%;
`;
