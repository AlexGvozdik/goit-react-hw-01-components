import React from "react";
import PropTypes from 'prop-types';
import {Statistics,Title,StatList,Item,Label,Percentage,Container} from "./Statistics.styled";

const generateColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const Statisticss = ({title, stats}) => {
  return (
      <Statistics class="statistics">
          <Container>
          <Title class="title">{title}</Title>

          <StatList class="stat-list">
              {stats.map(({ id, label, percentage }) => (<Item key={id} class="item" style={{ backgroundColor: generateColor()}}>
                  <Label class="label">{label}</Label>
                  <Percentage class="percentage">{percentage}%</Percentage>
        </Item> ))}
              </StatList>
              </Container>
    </Statistics>
  );
};

Statisticss.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage:PropTypes.number
        })
    )
}

export default Statisticss;
