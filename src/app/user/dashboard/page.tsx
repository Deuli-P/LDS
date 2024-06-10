"use client";
import Link from "next/link";


const Dashboard = () => {

  return (
    <>
      <section className="w-[90%] mb-32">
        <h2 className="uppercase text-[35px] mt-10">Dashboard</h2>

        <div className="flex flex-col items-center my-8">
          <p className="w-fit my-8 py-4 px-6 bg-yellow text-fontTitle text-center text-purple rounded-xl">
            <Link href={`/user/nouvelle-conversation`}>+ Nouvelle Conversation</Link>
          </p>
          <p className="w-fit my-8 py-4 px-6 bg-purple text-fontTitle text-center text-white rounded-xl">
            <Link href={`/user/conversation`}>Conversations</Link>
          </p>
          <p className="w-fit my-8 py-4 px-6 bg-purple text-fontTitle text-center text-white rounded-xl">
            <Link href={`/user/informations-personnelles`}>Mes informations personnelles</Link>
          </p>
          <p className="w-fit my-8 py-4 px-6 bg-purple text-fontTitle text-center text-white rounded-xl">
            <Link href={`/user/parametres`}>Paramètres du compte</Link>
          </p>
        </div>

      </section>
    </>
  );
};

export default Dashboard;
