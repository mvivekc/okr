const AllOption = { key: -1, value: "", text: "All" };
export const parseData = (list) => {
  const groupedList = {};
  list.forEach((data) => {
    const { parent_objective_id, id } = data;
    if (parent_objective_id === "" && typeof groupedList[id] === "undefined") {
      groupedList[id] = { main: data, list: [] };
    }
  });
  list.forEach((listItem) => {
    if (listItem.parent_objective_id !== "") {
      if (typeof groupedList[listItem.parent_objective_id] !== "undefined") {
        groupedList[listItem.parent_objective_id].list.push(listItem);
      } else {
        console.error(`${listItem.parent_objective_id} does not have any reference`);
      }
    }
  });
  return groupedList;
};

export const getFilterByOptions = (data) => {
  let categories = [];
  Object.entries(data)
    .reduce((accumulator, [_, { list }]) => {
      accumulator = accumulator.concat(list);
      return accumulator;
    }, [])
    .forEach(({ category }) => {
      if (!categories.includes(category)) {
        categories.push(category);
      }
    });
  categories = categories.map((category, index) => ({ key: index, value: category, text: category }));
  categories.splice(0, 1, AllOption);
  return categories;
};
