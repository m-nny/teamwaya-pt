import { Card } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  width: 500px;
`;

export const StyledTitle = styled.div`
  font-style: italic;
  font-weight: bold;
`;

export type ErrorCardProps = {
  error?: Error;
};
export const ErrorCard: FC<ErrorCardProps> = ({ error }) => (
  <StyledCard>
    <StyledTitle>{error?.message ?? 'Something bad happened'}</StyledTitle>
  </StyledCard>
);

export const LoadingCard: FC = () => (
  <StyledCard loading>
    <StyledTitle>Data is loading</StyledTitle>
  </StyledCard>
);
