import Link from "next/link";
import Head from "next/head";

const Success = () => {
  return (
    <>
    <Head>
        <title>Thank You</title>
        <link rel="icon" href="/assets/favico.png" />
        <meta name="description" content="Molly Raik's software developer portfolio website" />
    </Head>
    <div id="success" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Thank you for your message. I look forward to connecting with you
            soon!
          </h1>
          <Link href="/">
            <p className="underline cursor-pointer">Back to Homepage</p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Success;
