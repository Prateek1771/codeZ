import Lookup from "@/app/data/Lookup";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserDetailContext } from "@/context/UserDetailsContext";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useMutation } from "convex/react";
import { useContext } from "react";
import uuid4 from "uuid4";
import { api } from "@/convex/_generated/api";

function SignInDialog({ openDialog, closeDialog }) {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const CreateUser = useMutation(api.users.CreateUser);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: "Bearer " + tokenResponse?.access_token } }
      );

      console.log(userInfo);

      const user = userInfo.data;

      await CreateUser({
        name: user?.name,
        email: user?.email,
        picture: user?.picture,
        uid: uuid4(),
      });

      // tempworry save the user to local storage
      if (typeof window !== undefined) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      setUserDetail(userInfo?.data);
      // save the data to db
      closeDialog(false);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle classname="text-zinc-300">
            {Lookup.SIGNIN_HEADING}
          </DialogTitle>
          <DialogDescription classname="text-zinc-300">
            <div className="mt-2">{Lookup.SIGNIN_SUBHEADING}</div>
            <div className="mt-2">{Lookup.SIGNIn_AGREEMENT_TEXT}</div>
            <div className="mt-3 flex flex-col items-center justify-center">
              <Button
                className="bg-blue-500 text-zinc-50 hover:bg-blue-400"
                onClick={googleLogin}
              >
                Sign In
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SignInDialog;
