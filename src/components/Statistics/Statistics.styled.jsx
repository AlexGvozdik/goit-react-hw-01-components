import styled from '@emotion/styled'

export const Statistics = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;
export const Container = styled.div`
    border:1px solid black;
`;
export const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    color: red;
`;
export const StatList = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
`;
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;
`;
export const Label = styled.span`
    margin-bottom: 10px;
    font-size: 14px;
`;
export const Percentage = styled.span`
    font-size: 16px;
    font-weight: 400;
`;
