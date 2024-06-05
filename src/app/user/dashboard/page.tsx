"use client";
import Link from "next/link";


const Dashboard = () => {

  return (
    <>
      <section className="dashboard-ctn">
        <h2>Dashboard</h2>

        <div className="conversation-btn-div">
          <p className="conversation-btn">
            <Link href={`/user/nouvelle-conversation`}>+ Nouvelle Conversation</Link>
          </p>
          <p className="conversation-btn">
            <Link href={`/user/conversation`}>Conversations</Link>
          </p>
          <p className="conversation-btn">
            <Link href={`/user/informations-personnelles`}>Mes informations personnelles</Link>
          </p>
        </div>

      </section>
    </>
  );
};

export default Dashboard;
