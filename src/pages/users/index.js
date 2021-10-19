import React from 'react';

import { MenuItem } from '../../components/sidebar/sidebar_components';

export default function Users() {

  return (
    <section>
      <h1>Usuários</h1>
      <MenuItem to="/new_user">
          Novo Usuário
    </MenuItem>
    </section>
  );
}