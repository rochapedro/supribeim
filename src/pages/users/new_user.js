import React from 'react';

import { PageContent } from '../../components/page/page';
import { Form } from '@unform/web';

import FieldSet from '../../components/Form/fieldset';
import Input from '../../components/Form/Input';
import { FormGroup } from '../../components/Form/FormGroup';
import { ButtonSuccess } from '../../components/Button/Button';

export default function NewUser() {
  function handleSubmit(data) {
    console.log(data);
  };

  return (
    <section>
      <h1>Cadastrar novo usuário</h1>
      <Form onSubmit={handleSubmit}>
            <FieldSet>
                <FormGroup>
                    <label>Nome</label>
                    <Input type="text" name="name" />
                </FormGroup>
                <FormGroup>
                    <label>Sobrenome</label>
                    <Input type="text" name="sobrenome" />
                </FormGroup>
            </FieldSet>
            <FieldSet>
                <FormGroup>
                    <label>E-mail</label>
                    <Input type="email" name="email" />
                </FormGroup>
            </FieldSet>
            <FieldSet>
                <FormGroup>
                    <label>Nome de usuário</label>
                    <Input type="text" name="username" />
                </FormGroup>
                <FormGroup>
                    <label>Senha</label>
                    <Input type="password" name="password" />
                </FormGroup>
            </FieldSet>

          <ButtonSuccess type="submit">Enviar</ButtonSuccess>        
      </Form>
    </section>
  );
}