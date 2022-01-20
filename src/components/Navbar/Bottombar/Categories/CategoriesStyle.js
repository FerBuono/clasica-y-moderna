import styled from 'styled-components';

export const CategoriesContainer = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    padding: 4px 0;
    left: 0;
    background-color: white;
    width: 500px;
    height: 400px;
    text-align: left;
    z-index: -1;
    border: 1px solid rgba(0,0,0,0.1);
    border-top: 4px solid #85aac5;
    cursor: default;
    box-shadow: 0 0 5px 0 grey;
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;

    &:hover ${CategoriesContainer} {
        display: flex;
    }
`;

export const Nav = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
    transition: all .3s ease;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #050814;
        opacity: 0;
        transition: all .3s ease;
    }

    &:hover {
        &::after {
            opacity: 1;
        }
    }
`;

export const Title = styled.h3`
    font-size: 16px;
    display: inline-block;
    margin-bottom: 10px;
    padding: 5px 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export const Left = styled.div`
    width: 33%;
    height: 100%;
    border-right: 1px solid rgba(0,0,0,0.1);
`;

export const TopCategories = styled.ul`
    height: 85%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    list-style-type: none;
`;


export const Category = styled.li`
    font-size: 14px;
    cursor: pointer;
    display: block;
    width: 100%;
    padding: 2px 10px;

    &:hover {
        background-color: #96969676;
    }
`;

export const Center = styled.div`
    width: 33%;
    height: 100%;
    border-right: 1px solid rgba(0,0,0,0.1);
`;

export const TopAuthors = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Right = styled.div`
    width: 33%;
    height: 100%;
`;


export const Bestsellers = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;