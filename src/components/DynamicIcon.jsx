import React, { lazy, Suspense } from 'react';
import * as icons from 'lucide-react';

const DynamicIcon = ({ name, ...props }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    // Devolver un ícono predeterminado o nulo si no se encuentra
    return null;
  }

  return <IconComponent {...props} />;
};

export default DynamicIcon;
