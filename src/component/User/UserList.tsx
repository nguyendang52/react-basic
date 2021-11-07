interface Props {
  users: Array<User>;
}
interface User {
  name: string;
  age: number;
}
const UserList = (props: Props) => {
  return (
    <ul>
      {props.users.map((user, index) => {
        return <li key={index}>{user.name}</li>;
      })}
    </ul>
  );
};
export default UserList;
