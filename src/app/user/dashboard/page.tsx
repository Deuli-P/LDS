"use client";
import Link from "next/link";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { LiaUserSolid } from "react-icons/lia";
import { useState } from "react";

import MessagesHistory from "./_messagesHistory/page";
import UserInfos from "./_userInfos/page";
import UserSettings from "./_usersSettings/page";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const activeTabClassName = "flex flex-col items-center justify-center w-[120px] h-[120px] bg-secondary-light text-fontTitle text-center text-texte-dark rounded-xl shrink-0";
  const notActiveTabClassName = "flex flex-col items-center justify-center w-[120px] h-[120px] bg-background-dark text-fontTitle text-center text-texte-dark rounded-xl shrink-0";

  const renderComponent = () => {
    switch (selectedTab) {
      case "MessagesHistory":
        return <MessagesHistory />;
      case "UserInfos":
        return <UserInfos />;
      case "UserSettings":
        return <UserSettings />;
      default:
        return (
          <h3 className="uppercase text-[30px]">Sélectionner une section</h3>
        );
    }
  };

  return (
    <>
      <section className="w-[90%] mb-32 mx-auto">
        <h2 className="uppercase text-[35px] mt-10">Dashboard</h2>

        <p className="w-fit mx-auto mt-8 py-4 px-6 bg-primary-light text-fontTitle text-center text-texte-light rounded-xl">
          <Link href={`/user/nouvelle-conversation`}>
            + Nouvelle Conversation
          </Link>
        </p>

        <div className="overflow-x-auto mt-10">
          <div className="flex flex-nowrap space-x-10">
            {/* <Link href={`/user/conversation`}> */}
            <button
              onClick={() => setSelectedTab("MessagesHistory")}
              className={selectedTab === "MessagesHistory" ? activeTabClassName : notActiveTabClassName}
            >
              <p>
                <TbMessageCircle2Filled />
              </p>
              <p>Messages</p>
            </button>
            {/* </Link> */}
            {/* <Link href={`/user/informations-personnelles`}> */}
            <button
              onClick={() => setSelectedTab("UserInfos")}
              className={selectedTab === "UserInfos" ? activeTabClassName : notActiveTabClassName}
            >
              <p>
                <LiaUserSolid />
              </p>
              <p>Profil</p>
            </button>
            {/* </Link> */}
            {/* <Link href={`/user/parametres`}> */}
            <button
              onClick={() => setSelectedTab("UserSettings")}
              className={selectedTab === "UserSettings" ? activeTabClassName : notActiveTabClassName}
            >
              <p>
                <RiSettings4Line />
              </p>
              <p>Paramètres</p>
            </button>
            {/* </Link> */}
          </div>
        </div>

        <article className="flex flex-col w-full mt-16 mx-auto bg-foreground-light rounded-3xl py-10">
          {renderComponent()}
        </article>
      </section>
    </>
  );
};

export default Dashboard;
