import styled from 'styled-components';

export const Container = styled.div`
    padding-top: .6rem;
    height: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #0000003d;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
`;

export const Left = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Nav = styled.div`
    align-items: center;
    border-right: 2px solid #050814;
    color: lightgray;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    height: 100%;
    justify-content: space-evenly;
    padding: 0 1rem;
    position: relative;
    transition: .2s ease;

    &:hover {
       color: white;
    }
`;

export const LogoutContainer = styled.div`
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    padding-left: 1rem;
    padding-top: 5px;
    align-items: center;
    color: black;
    z-index: 10;
`;

export const User = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    font-size: 14px;
    color: white;
    border-right: 2px solid #050814;
    cursor: pointer;
    transition: .2s ease;

    &:hover ${LogoutContainer} {
        display: flex;
    }
`;

export const Logout = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: black;
    padding: .2rem 1rem;
    border: 1px solid rgba(0,0,0,0.1);
    border-top: 4px solid #85aac5;
    
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: white;
        z-index: -1;
    }

    &:hover {
        background-color: #96969676;
    }
`;

export const Text = styled.p`
    margin-left: .5em;
    display: flex;
    align-items: center;
`;

export const Right = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;