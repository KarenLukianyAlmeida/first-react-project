const user = {
  firstName: 'Fulano',
  lastName: 'Detal',
};

function User() {
  return <span>{`${user.firstName} ${user.lastName}`}</span>;
}

export default User;
