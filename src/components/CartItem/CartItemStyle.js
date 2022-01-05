import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 150px;
display: flex;
align-items: flex-start;
margin-bottom: 15px;
padding-bottom: 15px;
border-bottom: 1px solid rgba(0,0,0,0.1);

&:last-child {
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
}
`;

export const Img = styled.img`
height: 100%;
width: 100%;
`;

export const Details = styled.div`
flex: 6;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const Info = styled.div`
`;

export const Title = styled.h3`
display: inline-block;
width: fit-content;

&:hover {
    text-decoration: underline;
}
`;

export const Author = styled.p`
font-weight: 400;
`;

export const Amount = styled.div`
display: flex;
width: 100%;
align-items: center;
`;

export const Links = styled.div`
`;

export const Btn = styled.button`
padding: 5px 10px;
margin-right: 5px;
border-radius: 10px;
border: none;
cursor: pointer;

&:hover {
    background-color: #85aac5;
    color: white;
}
`;

export const PriceContainer = styled.div`
flex: 2;
`;

export const Price = styled.h2`
border-bottom: 1px solid rgba(0,0,0,0.1);
font-weight: 500;
margin-bottom: 2px;
padding-bottom: 10px;
`;

export const OriginalPrice = styled.p`
color: grey;
font-size: 12px;
`;