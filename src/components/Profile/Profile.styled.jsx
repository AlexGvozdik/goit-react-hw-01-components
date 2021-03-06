import styled from "@emotion/styled";
export const ProfileDiv = styled.div`
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 320px;
    border: 1px solid #212121;
    border-radius: 4px;
`;

export const Description = styled.div`
    font-family: 'Roboto', 'sans-serif';
    font-size: 18px;
    text-align: center;
    display: block;
    border-bottom: 1px solid #212121;
`;

export const Image = styled.img`
    margin: 35px auto 0px auto;
    background-color: #9e9e9e;
    border-radius: 50%;
    max-width: 120px;
`;

export const Name = styled.p`
    font-size: 22px;
    font-weight: 600;
    color: #212121;
`;


export const Tag = styled.p`
    margin: 1px auto 10px auto;
    color: #212121;
`;

export const Location = styled.p`
    margin: 10px auto 20px auto;
    color: #212121;
`;

export const Stats = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style-type: none;
    text-align: center;
    background-color: #e0dede;

    & li {
        display: flex;
        flex-direction: column;
        padding: 15px 0px;
        width: 120px;
        font-size: 14px;
        color: #212121;

        &:nth-child(2n) {
            border-right: 1px solid #212121;
            border-left: 1px solid #212121;
        }
    }
`;

export const Quantity = styled.span`
    margin-top: 4px;
    font-size: 15px;
    font-weight: 700;
    color: #212121;
`;


