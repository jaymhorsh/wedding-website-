"use client";

import { FaApple, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import AuthButton, { Button } from "@/components/CustomButton";
import { useRouter } from "next/navigation";
import { AiOutlineWallet } from "react-icons/ai";
import AuthLayout from "@/components/ui/AuthLayout";
import InputField from "@/components/ui/InputField";
import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { SiBinance, SiWalletconnect } from "react-icons/si";
import { MetamaskImage, OkxwalletImage, PhantomImage, RoninImage } from "../../../../public/assets/svg";
import { IoMdClose } from "react-icons/io";

export default function Login() {
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const handleSubmit = () => {};
  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        <h1 className="font-medium py-4 text-black-tertiary-text text-base  text-center max-sm:text-lg">
          Sign in with your credentials
        </h1>
        <div className="flex flex-col w-full items-center gap-3 max-sm:flex-col">
          <AuthButton
            icon={FaXTwitter}
            label="Twitter"
            onClick={() => {
              navigate.push("/dashboard");
            }}
          />
          <AuthButton
            icon={FcGoogle}
            label="Google"
            onClick={() => {
              navigate.push("/dashboard");
            }}
          />
          <AuthButton
            icon={FaFacebook}
            label="Facebook"
            iconStyle="text-[#0866FF]"
            onClick={() => {
              navigate.push("/dashboard");
            }}
          />
          <AuthButton
            icon={FaApple}
            label="Apple"
            iconStyle="w-[1.2rem] h-[1.2rem]"
            onClick={() => {
              navigate.push("/dashboard");
            }}
          />
          {/* Wallet Dialog  */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <AuthButton
                icon={AiOutlineWallet}
                iconStyle="w-5 h-5 text-[#9747FF] stroke-[1.5]"
                label="Wallet"
              />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black-primary-text opacity-80" />
              <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] flex mt-4 flex-col justify-center items-center max-w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white px-20 py-6 shadow-lg">
                <h1 className="text-black-primary-text text-center mt-4  text-base font-bold">
                  Sign in to your wallet
                </h1>
                <div className="flex flex-col w-full items-center gap-3 mt-8 mb-16">
                  <AuthButton
                    icon={MetamaskImage}
                    label="MetaMask"
                    iconStyle=""
                    onClick={() => {
                      navigate.push("/dashboard");
                    }}
                  />
                  <AuthButton
                    icon={SiWalletconnect}
                    label="WalletConnect"
                    iconStyle="w-[1.2rem] h-[1.2rem]"
                    onClick={() => {
                      navigate.push("/dashboard");
                    }}
                  />
                  <AuthButton
                    icon={OkxwalletImage}
                    label="OKX Wallet"
                    iconStyle="w-[1.2rem] h-[1.2rem]"
                    onClick={() => {
                      navigate.push("/dashboard");
                    }}
                  />{" "}
                  <AuthButton
                    icon={PhantomImage}
                    label="Phantom"
                    iconStyle="w-[1.2rem] h-[1.2rem]"
                    onClick={() => {
                      navigate.push("/dashboard");
                    }}
                  />{" "}
                  <AuthButton
                    icon={RoninImage}
                    label="Ronin"
                    iconStyle="w-[1.2rem] h-[1.2rem]"
                    onClick={() => {
                      navigate.push("/dashboard");
                    }}
                  />{" "}
                  <AuthButton
                    icon={SiBinance}
                    label="Binance Wallet"
                    iconStyle=" text-[#F3BA2F] "
                    onClick={() => {
                      navigate.push("/dashboard");
                    }}
                  />
                </div>
                <Dialog.Close asChild>
                  <button
                    className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                    aria-label="Close"
                  >
                    <IoMdClose className="text-black-primary-text font-medium text-4xl" />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="flex-grow border-t border-border-gray" />
          <span className="px-4 text-sm text-black-secondary-text">OR</span>
          <hr className="flex-grow border-t border-border-gray" />
        </div>

        <div className="flex flex-col gap-6">
          <form onSubmit={handleSubmit}>
            <InputField
              label="Email"
              type="email"
              placeholder="Email"
              className="placeholder: font-medium placeholder:text-[#C2C2C2]"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Button label="Continue" className="mt-4 w-full text-white" />
          </form>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-medium text-black-secondary-text">
              Don't have an account?
            </span>
            <Link href="/register" className="text-main-blue font-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}


// {
//   "id": "de7818e7-610a-4057-8f6f-b785dc1e6f88",
//   "name": "test_stream",
//   "kind": "stream",
//   "creatorId": {
//     "type": "unverified",
//     "value": "user123"
//   },
//   "userTags": {},
//   "lastSeen": 1587667174725,
//   "sourceSegments": 1,
//   "transcodedSegments": 2,
//   "sourceSegmentsDuration": 1,
//   "transcodedSegmentsDuration": 2,
//   "sourceBytes": 1,
//   "transcodedBytes": 2,
//   "ingestRate": 1,
//   "outgoingRate": 2,
//   "isActive": true,
//   "isHealthy": null,
//   "issues": null,
//   "createdByTokenName": "abc-123-xyz-456",
//   "createdAt": 1587667174725,
//   "parentId": "de7818e7-610a-4057-8f6f-b785dc1e6f88",
//   "streamKey": "hgebdhhigq",
//   "pull": {
//     "source": "https://myservice.com/live/stream.flv",
//     "headers": {
//       "Authorization": "Bearer 123"
//     },
//     "isMobile": 0,
//     "location": {
//       "lat": 39.739,
//       "lon": -104.988
//     }
//   },
//   "playbackId": "eaw4nk06ts2d0mzb",
//   "playbackPolicy": {
//     "type": "webhook",
//     "webhookId": "1bde4o2i6xycudoy",
//     "webhookContext": {
//       "streamerId": "my-custom-id"
//     },
//     "refreshInterval": 600,
//     "allowedOrigins": [
//       "<string>"
//     ]
//   },
//   "profiles": [
//     {
//       "width": 1280,
//       "name": "720p",
//       "height": 720,
//       "bitrate": 3000000,
//       "fps": 30,
//       "fpsDen": 1,
//       "quality": 23,
//       "gop": 2,
//       "profile": "H264Baseline",
//       "encoder": "H.264"
//     }
//   ],
//   "projectId": "aac12556-4d65-4d34-9fb6-d1f0985eb0a9",
//   "record": false,
//   "recordingSpec": {
//     "profiles": [
//       {
//         "width": 1280,
//         "name": "720p",
//         "height": 720,
//         "bitrate": 3000000,
//         "quality": 23,
//         "fps": 30,
//         "fpsDen": 1,
//         "gop": 2,
//         "profile": "H264Baseline",
//         "encoder": "H.264"
//       }
//     ]
//   },
//   "multistream": {
//     "targets": [
//       {
//         "id": "PUSH123",
//         "profile": "720p"
//       }
//     ]
//   },
//   "suspended": true,
//   "lastTerminatedAt": 1713281212993,
//   "userId": "we7818e7-610a-4057-8f6f-b785dc1e6f88",
//   "renditions": {}
// }