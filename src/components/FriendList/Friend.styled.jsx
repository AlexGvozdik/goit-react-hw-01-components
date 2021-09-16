import styled from '@emotion/styled'
export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 380px;
  height: 120px;
  margin: 7px;
  background-color: snow;
  border: 1px solid #858585;
  border-radius: 3px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);

  .status{
        width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 15px;
  }

  .online {
  background-color: darkgreen;
}
.offline {
  background-color: red;
}

.name{
    margin-left: 18px;
  font-size: 28px;
  font-weight: 500;
  text-transform: capitalize;
}
`;



export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  background-color: #858585;
  border-radius: 10px;
`;