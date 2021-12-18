import styled from 'styled-components';

const Container = styled.div`
    margin-top: 20px;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Spinner = () => {
    return (
        <Container>
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
        </Container>
    )
}

export default Spinner
