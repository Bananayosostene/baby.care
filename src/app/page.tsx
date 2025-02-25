import Button from "@/components/ui/button";
// import Input from "@/components/ui/input";
import Image from "next/image";
// import { FaMicrophone, FaVideo, FaHeart, FaMusic } from "react-icons/fa";
import {
  Mic,
  Video,
  Heart,
  Music,
  Brain,
  Bell,
  ChevronRight,
} from "lucide-react";
import { Input, Textarea } from "@/components/ui/input";
// import Textarea from "@/components/ui/input";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full pt-10 gap-6 justify-center">
        <div className="w-1/2 h-[20rem] rounded-lg bg-white dark:bg-bg-secondary border border-gray-300 dark:border-gray-700 flex items-center justify-center">
          <p className="text-center">Photo</p>
        </div>
        <div className="w-1/3">
          <div className="w-full h-[5rem] rounded-full border border-gray-300 dark:border-gray-700 flex px-4 items-center">
            <div className="w-[4rem] h-[4rem] rounded-full bg-white dark:bg-bg-secondary border border-gray-300 dark:border-gray-700 flex items-center justify-center">
              <Image
                src="/heart-baby.care.svg"
                alt="Baby Care Logo"
                width={32}
                height={32}
                className="text-bt-primary"
              />
            </div>
            <div className="flex flex-col justify-center ml-4 ">
              <h1 className="font-bold text-lg text-bt-primary">Baby Care</h1>
              <p className="text-[12px] text-gray-500 dark:text-gray-400">
                Monitoring System
              </p>
            </div>
            <div className="flex ml-auto">
              <Button variant="signUp">Sign in</Button>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="w-[15rem] h-[15rem] flex flex-col  items-center justify-center">
              {/* Fixed: Replace img with Next.js Image component */}
              <Image
                src="/imgs/AIoT.png"
                alt="AIoT Feature"
                width={200}
                height={200}
              />
              <h1 className="text-sm text-tx-secondary">AIoT Feature</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 py-10">
        <div className=" space-y-4">
          <h2 className="text-xl text-bt-primary">System Overview</h2>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Our Baby Care Monitoring System integrates IoT, AI, and web
            technologies to provide comprehensive care for your baby. With smart
            sensors capturing emotional states, a speaker for soothing sounds,
            and real-time monitoring via a secure web platform, you can ensure
            your baby&apos;s well-being at all times. The AI analyzes the
            baby&apos;s voice to classify emotions and recommend actions, while
            the admin can invite family members to join and monitor the
            baby&apos;s status.
          </p>
          <div className="flex w-full flex-col items-end ">
            <div className="w-1/2 flex items-center justify-center border border-gray-300 dark:border-gray-700 p-4">
              <Input
                type="email"
                placeholder="Enter family member's email"
                variant="primary"
                className="flex-grow"
                required
              />
              <Button variant="primary">Get Invited </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence features */}
      <div className="w-full max-w-6xl px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-xl text-bt-primary mb-4">
            Intelligence Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Voice Sensor Card */}
          <div className="bg-white dark:bg-bg-secondary rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Mic size={32} />
              </div>
              <h3 className="text-md mb-2  text-tx-success">
                Real-time Voice Sensor
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Advanced audio sensors detect your baby&apos;s cries and sounds,
                alerting you instantly.
              </p>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                99.8% accuracy
              </span>
              <Button variant="primary" className="p-0 h-8 w-8">
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>

          {/* Live Streaming Card */}
          <div className="bg-white dark:bg-bg-secondary rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Video size={32} />
              </div>
              <h3 className=" text-md mb-2  text-tx-success">
                Baby Live Streaming
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                HD video streaming with night vision to monitor your baby at any
                time.
              </p>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                HD 1080p quality
              </span>
              <Button variant="primary" className="p-0 h-8 w-8">
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>

          {/* Emotional Analysis Card */}
          <div className="bg-white dark:bg-bg-secondary rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <Brain size={32} />
              </div>
              <h3 className="text-md mb-2 text-tx-secondary  text-tx-success">
                Real-time Emotional Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AI analyzes your baby&apos;s crying patterns to identify needs:
                hunger, discomfort, or tiredness.
              </p>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                5 emotional states
              </span>
              <Button variant="primary" className="p-0 h-8 w-8">
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>

          {/* Soothing Sounds Card */}
          <div className="bg-white dark:bg-bg-secondary rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4">
                <Music size={32} />
              </div>
              <h3 className=" text-md mb-2 text-tx-success">
                Personalized Lullabies
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AI-generated sounds and lullabies that adapt to your baby&apos;s
                preferences.
              </p>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                50+ sound options
              </span>
              <Button variant="primary" className="p-0 h-8 w-8">
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* contact us */}
      <div className="w-full px-20 pt-10 pb-4">
        <h3 className="text-xl text-bt-primary mb-4">Contact us</h3>
        <div className="flex border p-2 rounded-lg bg-white">
          <div className="mt-4 w-[90%]">
            <Input type="email" placeholder="Enter email" variant="primary" />
            <Textarea
              placeholder="Enter your message"
              variant="primary"
              rows={2}
              required
            />
          </div>
          <div className="w-[10%]">
            <Button variant="primary" className=" p-2 h-[4rem] w-[6rem]">
              send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
