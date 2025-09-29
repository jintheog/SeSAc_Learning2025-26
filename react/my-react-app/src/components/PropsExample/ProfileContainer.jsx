import Profile from "./Profile";

export default function ProfileContainer() {
  return (
    <div>
      <Profile name="현우" age={22} isAdmin={true} />
      <Profile name="수진" age={21} isAdmin={false} />
    </div>
  );
}
