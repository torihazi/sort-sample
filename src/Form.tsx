import { User } from "./types/user";

type FormProps = {
  email: User["email"];
  setEmail: React.Dispatch<React.SetStateAction<User["email"]>>;
};

export const Form = ({ email, setEmail }: FormProps) => {
  return (
    <div className="flex items-center my-3">
      <label htmlFor="email">Email検索</label>
      <input
        id="email"
        className="border rounded p-0.5"
        type="text"
        autoComplete="off"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
    </div>
  );
};
