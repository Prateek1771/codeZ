"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { BackgroundLines } from "../ui/background-lines";
import Lookup from "@/app/data/Lookup";
import COLORS from "@/app/data/Colors";
import { ArrowRight, Link } from "lucide-react";
import { ShineBorder } from "../magicui/shine-border";
import { MessagesContext } from "@/context/MessagesContext";
import { UserDetailContext } from "@/context/UserDetailsContext";
import SignInDialog from "./SignInDialog";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function Hero() {
  const [userInput, setUserInput] = useState();
  const { messages, setMessages } = useContext(MessagesContext);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [openDialog, setOpenDialog] = useState(false);
  const CreateWorkspace = useMutation(api.workspace.CreateWorkspace);
  const router = useRouter();

  const onGenerate = async (input) => {
    if (!userDetail?.name) {
      setOpenDialog(true);
      return;
    }

    const msg = {
      role: "user",
      content: input,
    };

    setMessages(msg);

    const workspaceId = await CreateWorkspace({
      user: userDetail._id,
      messages: [msg],
    });
    console.log(workspaceId);

    router.push("/workspace/" + workspaceId);

  };

  return (
    <BackgroundLines className="flex items-center  w-full flex-col px-4 md:mt-52 lg:mt-52 sm:mt-54">
      {/* Heading */}
      <h2 className="bg-clip-text text-center  dark:from-neutral-600 dark:to-white text-2xl md:text-5xl lg:text-6xl py-2 relative z-20 font-bold tracking-tight">
        {Lookup.HERO_HEADING}
      </h2>
      {/* Sub heading */}
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        {Lookup.HERO_DESC}
      </p>

      <ShineBorder
        className="relative size-48 rounded-lg p-5 border z-20 max-w-xl w-full mt-3"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        style={{ backgroundColor: COLORS.BACKGROUND }}
      >
        {/* input field */}
        <div className="flex z-20 gap-2 mt-3 relative">
          <textarea
            placeholder={Lookup.INPUT_PLACEHOLDER}
            onChange={(e) => setUserInput(e.target.value)}
            className="outline-none bg-transparent w-full h-32 max-h-56 rounded-md resize-none"
          />

          {/* submit button */}
          {userInput && (
            <ArrowRight
              onClick={() => onGenerate(userInput)}
              className="bg-blue-500 p-2 h-8 w-8 rounded-md cursor-pointer z-20 relative "
            />
          )}
        </div>
        <Link className="w-5 h-5 z-20 relative " />
      </ShineBorder>

      {/* examples */}
      <div className="flex flex-wrap max-w-2xl justify-center items-center z-20 gap-3 mt-8">
        {Lookup?.SUGGSTIONS.map((suggestion, index) => (
          <h2
            key={index}
            onClick={() => onGenerate(suggestion)}
            className="p-1 px-2 border z-20 border-gray-500 text-sm text-gray-400 rounded-full cursor-pointer hover:text-zinc-200"
          >
            {suggestion}
          </h2>
        ))}
      </div>
      <SignInDialog openDialog={openDialog} closeDialog={(v)=>setOpenDialog(v)}/>
    </BackgroundLines>
  )
}

export default Hero;
