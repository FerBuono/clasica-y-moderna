import styled from 'styled-components';

const Container = styled.div`
    height: 500px;
    background-color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px 0 grey;
`;

const Spinner = () => {
    return (
        <Container>
            <div className="sk-circle">
                <div className="sk-circle1 sk-child"></div>
                <div className="sk-circle2 sk-child"></div>
                <div className="sk-circle3 sk-child"></div>
                <div className="sk-circle4 sk-child"></div>
                <div className="sk-circle5 sk-child"></div>
                <div className="sk-circle6 sk-child"></div>
                <div className="sk-circle7 sk-child"></div>
                <div className="sk-circle8 sk-child"></div>
                <div className="sk-circle9 sk-child"></div>
                <div className="sk-circle10 sk-child"></div>
                <div className="sk-circle11 sk-child"></div>
                <div className="sk-circle12 sk-child"></div>
            </div>
        </Container>
    )
}

export default Spinner
