import React from "react";

const HOC = (Wrappedcomponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      search: "",
    };
    componentDidMount() {
      const getApiData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const apiRes = await res.json();
        console.log(apiRes);
        this.setState({ ...this.state, data: apiRes });
      };
      getApiData();
    }

    render() {
      const { data, search } = this.state;
      console.log(data);
      const filteredData = data.filter((item) => {
        if (entity === "users") {
          const { name } = item;
          return name.indexOf(search) >= 0;
        }
        if (entity === "todos") {
          const { title } = item;
          return title.indexOf(search) >= 0;
        }
      });
      return (
        <div>
          <div>{entity}</div>
          <input
            type={"text"}
            value={search}
            onChange={(e) => {
              this.setState({ ...this.state, search: e.target.value });
            }}
          />
          <Wrappedcomponent data={filteredData}></Wrappedcomponent>
        </div>
      );
    }
  };
};

export default HOC;
