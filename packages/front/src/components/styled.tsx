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

export const ErrorCard: FC = () => (
  <StyledCard>
    <StyledTitle>Something bad happened</StyledTitle>
  </StyledCard>
);
