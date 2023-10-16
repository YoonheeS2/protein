import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 148px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid #a3b6f7;
  margin-right: 7px;
  padding-left: 10px;
`;

const RecomMain = styled.span`
  color: #345a99;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const Recomvalue = styled.span`
  color: #464646;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const BoxModeRecom = ({ main, value }) => {
  return (
    <Box>
      <RecomMain>{main}</RecomMain>
      <Recomvalue>{value}</Recomvalue>
    </Box>
  );
};

export default BoxModeRecom;
