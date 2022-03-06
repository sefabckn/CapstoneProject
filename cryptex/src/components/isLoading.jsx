import { Button, Space } from "antd";

import React from "react";

class isLoading extends React.Component {
  state = {
    loadings: [],
  };

  enterLoading = (index) => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });

    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 1000);
  };

  render() {
    const { loadings } = this.state;
    return (
      <>
        <Space style={{ width: "100%" }}>
          <Button type="primary" loading>
            Loading
          </Button>
        </Space>
      </>
    );
  }
}

export default isLoading;
