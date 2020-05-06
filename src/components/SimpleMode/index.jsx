import React, { useEffect, useState } from 'react';
import { SimpleTask } from './SimpleTask';
import Styled from './styled';

const mapData = (data) => data.reduce((accum, item) => {
  // eslint-disable-next-line no-param-reassign
  accum = [...accum, ...item.children.map((el) => ({
    ...el,
    statusName: item.status,
    statusId: item.id,
  }))];
  console.log(accum, 'accum')
  return accum;
}, []);

export const SimpleMode = ({ data }) => {
  const [mappedData, setMappedData] = useState([]);

  useEffect(() => {
    setMappedData(mapData(data));
  }, [data]);
  return (
    <Styled.SimpleTasks>
      Simple mode
      {
            mappedData.map((el) => (
              <SimpleTask
                name={el.name}
                taskDescription={el.taskDescription}
                statusName={el.statusName}
                statusId={el.statusId}
                id={el.id}
              />
            ))
        }
      <p />
    </Styled.SimpleTasks>
  );
};
