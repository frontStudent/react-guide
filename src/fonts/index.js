import styled from 'styled-components'
const T1 = styled.div`
  font-size: 30px;
  font-weight: bold;
`
const T2 = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 12px 0px
`
const T3 = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 11px 0px
`
const T4 = styled.div`
  font-size: 18px;
  margin: 10px 0px;
`

const ListItem = styled.div`
font-size: 18px;
margin: 10px 40px;
position: relative;

&::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: 55%;
  left: -15px;
  transform: translateY(-50%);
}
`;
export {
  T1, T2, T3, T4, ListItem
}