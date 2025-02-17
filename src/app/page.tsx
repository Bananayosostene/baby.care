import Button from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full pt-10 gap-6 justify-center">
        <div className="w-1/2 h-[20rem] rounded-lg bg-white dark:bg-bg-secondary border border-gray-300 dark:border-gray-700 flex items-center justify-center">
          <p className="text-center">My Photo</p>
        </div>
        <div className="w-1/3">
          <div className="w-full h-[5rem] rounded-full border border-gray-300 dark:border-gray-700 flex px-4 items-center">
            <div className="w-[4rem] h-[4rem] rounded-full bg-white dark:bg-bg-secondary border border-gray-300 dark:border-gray-700 flex items-center justify-center">
              <p>BS</p>
            </div>
            <div className="flex flex-col justify-center ml-4 ">
              <h1 className="font-bold text-lg text-bt-primary">
                BANANAYO Sostene
              </h1>
              <p className="text-[12px] text-gray-500 dark:text-gray-400">
                Software Developer
              </p>
            </div>
            <div className="flex ml-auto">
              <Button variant="signUp">Sign in</Button>
            </div>
          </div>
          {/* <Button className='mb-4' variant='bt-primary'>Login</Button>
        <Button variant='secondary'><FcGoogle /> Continue with google</Button> */}
        </div>
      </div>

      <div className="px-20 py-10">
        <p className="text-center text-md text-gray-500 dark:text-gray-400">
          Lorem, ipsum dolor sit consectetur adipisicing elit. Corporis
          repellendus asperiores quas ipsam incidunt officia corrupti ab quaerat
          aspernatur, veritatis, quidem ad vero accusantium, totam cum modi
          sapiente eos illum?
        </p>
      </div>
      <div>
        <Button variant="outline">Contact me</Button>
      </div>
    </div>
  );
}
