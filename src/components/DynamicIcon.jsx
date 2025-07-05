import React from 'react';
import * as icons from 'lucide-react';
import PropTypes from 'prop-types';

const DynamicIcon = ({ name, ...props }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    // Devolver un ícono predeterminado o nulo si no se encuentra
    return null;
  }

  return <IconComponent {...props} />;
};

DynamicIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DynamicIcon;
