import React from 'react';
import PropTypes from 'prop-types';

const Produtos = ({ produtos, ...props }) => {
  return (
    <table {...props}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Propriedade</th>
        </tr>
      </thead>
      {produtos.map(({ nome, propriedades }) => (
        <tbody key={nome}>
          <tr>
            <td>{nome}</td>
            <td>{propriedades.join(', ')}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Produtos;
