import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Dropdown } from "semantic-ui-react";
import { parseData, getFilterByOptions } from "./helper";
import { Container } from "semantic-ui-react";
import OkrGroup from "./OkrGroup";

const Okrs = () => {
  const [data, setData] = useState(null);
  const [filtered, setFiltered] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data: listOfOkrs }
        } = await axios.get("https://okrcentral.github.io/sample-okrs/db.json");
        setData(parseData(listOfOkrs));
      } catch (error) {
        //error
        console.error("Error fetching data");
        setData([]);
      }
    })();
  }, []);
  if (data === null) {
    return <Loader />;
  }
  return (
    <>
      <div>
        <Dropdown
          fluid
          value={filtered}
          onChange={(_, { value }) => setFiltered(value)}
          selection
          style={{ margin: "40px 40px 40px 0" }}
          placeholder="Filter by"
          options={getFilterByOptions(data)}
        />
      </div>
      <Container style={{ marginTop: "40px" }}>
        {Object.entries(data).map(([typeId, { main, list }]) =>
          filtered === "" || main.category === filtered ? (
            <OkrGroup
              key={typeId}
              group={main}
              list={list.filter(({ category }) => filtered === "" || category === filtered)}
            />
          ) : null
        )}
      </Container>
    </>
  );
};

export default Okrs;
