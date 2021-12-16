import styled from 'styled-components';



export const Container = styled.div`
    flex: 1;    
    margin: .5rem;
    min-width: 180px;
    padding: 0 10px;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    background-color: #85aac516;
`;

export const Image = styled.img`
    height: 50%;
    margin: 10px 0;
    position: relative;
    cursor: pointer;
`;

export const Info = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const BookInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Title = styled.p`
    height: 2.5rem;
    cursor: pointer;
    font-weight: 600;
    overflow: hidden;
    margin-bottom: 10px;
    text-align: left;

    &:hover {
        text-decoration: underline;
    }
`;

export const Author = styled.p`
    margin-bottom: 10px;
    cursor: pointer;
    border-bottom: 1px dotted grey;
    font-size: 15px;

    &:hover {
        border-bottom: 1px solid #333333;
    }
`;

export const Year = styled.p`
    color: grey;
    font-size: 15px;

`;

