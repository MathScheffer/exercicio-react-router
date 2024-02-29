import React from 'react';

const Header = () => {
  const style = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '50px',
  };
  return (
    <div style={style}>
      <a href="/">Home</a>
      <a href="produtos">Produtos</a>
    </div>
  );
};

export default Header;
