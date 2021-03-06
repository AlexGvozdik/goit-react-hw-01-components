import styled from '@emotion/styled';
export const TableStyled = styled.table`
  min-width: 800px;
  border-collapse: collapse;
  margin: 0 auto 70px;
  font-family: 'Roboto', Sans-Serif;
  font-size: 14px;
  color: #212121;
  border-collapse: collapse;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
box-shadow: -1px 0px 15px 4px rgba(0,0,0,0.86);

th {
  width: 250px;
  height: 45px;
  padding: 10px 20px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  text-align: center;
  font-weight: 600;
  color: #ffffff;
  border-color: #ffffff;
  background: #07aecc;
  text-transform: uppercase;
}

td {
  width: 250px;
  height: 45px;
  padding: 10px 20px;
  border-left: 1px solid #cfcdcd;
  border-right: 1px solid #cfcdcd;
  color: #4d4d4df1;
}

.type{
      text-transform:capitalize;
      font-weight:700;
}
tbody:nth-child(even) {
  background-color: rgb(216, 216, 216);
}
`;