import React, { useState } from "react";
import { List } from "semantic-ui-react";
const OkrGroup = ({ group: { title: groupTitle }, list }) => {
  const [isExpand, setIsExpand] = useState(true);
  return (
    <List>
      <List.Item>
        <List.Icon name={isExpand ? "angle down" : "angle right"} onClick={() => setIsExpand((type) => !type)} />
        <List.Icon name="user" />
        <List.Content>
          <List.Header>{groupTitle}</List.Header>
          {isExpand && (
            <List.List>
              {list.map(({ title }) => (
                <List.Item>
                  <List.Icon name="user" />
                  <List.Content>
                    <List.Header>{title}</List.Header>
                  </List.Content>
                </List.Item>
              ))}
            </List.List>
          )}
        </List.Content>
      </List.Item>
    </List>
  );
};
export default OkrGroup;
