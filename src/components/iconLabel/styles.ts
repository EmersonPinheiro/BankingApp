import styled, {css} from 'styled-components/native';

interface IconLabel {
  focused?: boolean;
}

export const Text = styled.Text`
  ${({focused}: IconLabel) => css`
    font-family: 'Montserrat-Medium';
    font-size: 11px;
    color: ${focused ? '#EC008C' : '#333333'};
    margin-bottom: 4px;
  `}
`;
