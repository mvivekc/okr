import React, { useState } from "react";
import { List } from "semantic-ui-react";
const OkrGroup = ({ group: { title: groupTitle }, list }) => {
  const [isExpand, setIsExpand] = useState(true);
  return (
    <List>
      <List.Item>
        <List.Icon
          style={{ cursor: "pointer" }}
          name={isExpand ? "angle down" : "angle right"}
          onClick={() => setIsExpand((type) => !type)}
        />
        <List.Icon name="user circle outline" />
        <List.Content>
          <List.Header>{groupTitle}</List.Header>
          {isExpand && (
            <List.List>
              {list.map(({ title }, index) => (
                <List.Item style={{ backgroundColor: index % 2 ? "#efeff7" : "" }}>
                  <List.Icon name="user circle outline" />
                  <List.Icon>{String.fromCharCode(97 + index)}.</List.Icon>
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
