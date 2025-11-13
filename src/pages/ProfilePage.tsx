// 프로필 페이지: 사용자의 개인 정보 관리를 위한 페이지입니다.
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  return (
    <div style={{padding:24}}>
      <h1>Profile Page</h1>
      {user ? (
        <p>안녕하세요, {user.name}님</p>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </div>
  );
};

export default ProfilePage;
