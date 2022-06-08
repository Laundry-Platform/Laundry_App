import styled from 'styled-components/native';

export interface AllDirection {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const Padding = styled.View<AllDirection>`
  padding-top: ${props => (props.top ? `${props.top}px` : '0px')};
  padding-left: ${props => (props.left ? `${props.left}px` : '0px')};
  padding-bottom: ${props => (props.bottom ? `${props.bottom}px` : '0px')};
  padding-right: ${props => (props.right ? `${props.right}px` : '0px')};
`;
