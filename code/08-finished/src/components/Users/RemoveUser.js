import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const RemoveUser = (props) => {

  const removeUserHandler = (event) => {
    event.preventDefault();
    props.onRemoveUser();
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={removeUserHandler}>
          <Button type="submit">Remove User</Button>
        </form>
      </Card>
    </div>
  );
};

export default RemoveUser;
