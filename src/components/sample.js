import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkCard = ({ title, description, link }) => {
  return (
    <div className="link-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link}>Go to {title}</Link>
    </div>
  );
};

LinkCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default LinkCard;
