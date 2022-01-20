import styled from 'styled-components';

export const Container = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: white;
    padding: 2rem;
    outline: none;
    box-shadow: 0 0 5px 0 grey;
    position: relative;
`;

export const SpinnerContainer = styled.div`
    display: ${props => props.loading ? "flex" : "none"};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    background-color: white;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Img = styled.img`
    height: 30px;
`;

export const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
