import Image from "next/image";
import { signIn } from "next-auth/react";
function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://wallpaper.dog/large/971295.png"
        width={400}
        height={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="bg-blue-500 p-5 rounded-full text-white cursor-pointer"
      >
        login with facebook
      </h1>
    </div>
  );
}

export default Login;
