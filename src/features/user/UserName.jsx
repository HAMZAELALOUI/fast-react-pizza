import { useSelector } from 'react-redux';

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="font-serif hidden text-sm md:block">{userName}</div>
  );
}

export default UserName;
