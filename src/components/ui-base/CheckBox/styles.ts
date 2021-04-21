import styled from 'styled-components';

export const ICheckBoxPropsStyled = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  label {
    display: block;
    position: relative;
    margin-right: 2rem;
  }

  label:hover input ~ span {
    background-color: ${props => props.theme.colors.blue};
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  label input:checked ~ span:after {
    display: block;
  }

  label span:after {
    left: 0.25rem;
    top: 0.02rem;
    width: 0.5rem;
    height: 0.8rem;
    border: solid white;
    border-width: 0 0.2rem 0.2rem 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.25rem;
    width: 1.25rem;
    cursor: pointer;
    border-radius: 0.3rem;
    box-shadow: 0 0 0 0.2rem ${props => props.theme.colors.lightBlue};
    background-color: ${props => props.theme.colors.light};
  }

  .check-label {
    font-size: 1rem;
    color: ${props => props.theme.colors.darkBlue};
  }

  input:checked + span {
    background-color: ${props => props.theme.colors.lightBlue};
  }

  input:hover {
    background-color: ${props => props.theme.colors.lightBlue};
  }
`;
