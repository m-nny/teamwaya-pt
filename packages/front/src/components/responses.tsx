import { Button, Space, Table } from 'antd';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ResponseEntity } from '../api/types';
import { AppRoutes } from '../routes';
import { StyledCard } from './styled';

export type QuizResponsesProps = {
  responses: ResponseEntity[];
};

const columns = [
  { title: 'Username', dataIndex: 'username', key: 'username' },
  { title: 'Verdict', dataIndex: 'verdict', key: 'verdict' },
  { title: 'Score', dataIndex: 'score', key: 'score' },
];
export const QuizResponses: FC<QuizResponsesProps> = ({ responses }) => {
  const dataSource = responses.map((res) => ({ key: res.id, ...res }));
  const history = useHistory();
  const handleTryAgain = () => {
    history.push(AppRoutes.Home);
  };
  return (
    <StyledCard title="All saved responses">
      <Space direction="vertical">
        <Table dataSource={dataSource} columns={columns} />
        <Space direction="horizontal">
          <Button type="dashed" onClick={handleTryAgain}>
            Star Quiz
          </Button>
        </Space>
      </Space>
    </StyledCard>
  );
};
