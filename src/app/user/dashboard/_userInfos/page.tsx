"use client";
import Link from "next/link";
import { useState } from "react";
import { TbMessageCircle2Filled } from "react-icons/tb";

const UserInfos = () => {
  const [name, setName] = useState("Jean");
  const [fistname, setfirstName] = useState("Dupont");
  const [pseudo, setPseudo] = useState("pseudotropcool");
  const [email, setEmail] = useState("email@domaine.fr");
  const [password, setPassword] = useState("motdepasse123*");

  const [editIsActive, setEditIsActive] = useState(false);
  const toggleEdit = () => {
    setEditIsActive(!editIsActive);
  };

  const inputActiveClass =
    "py-2 px-4 mt-4 rounded-xl border border-primary-dark";
  const inputNotActiveClass =
    "bg-transparent py-2 px-4 mt-4 rounded-xl border border-transparent";

  return (
    <>
      <h3 className="uppercase text-[30px] mb-6">Mes informations</h3>

      <form className="flex justify-between flex-wrap w-[90%] m-auto">
        <div className="flex flex-col w-[45%]">
          <label htmlFor="name" className="text-[12px] pl-4">
            Nom
          </label>
          <input
            disabled={!editIsActive}
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={editIsActive ? inputActiveClass : inputNotActiveClass}
          />
        </div>
        <div className="flex flex-col w-[45%]">
          <label htmlFor="name" className="text-[12px] pl-4">
            Prénom
          </label>
          <input
            disabled={!editIsActive}
            type="text"
            name="name"
            value={fistname}
            onChange={(e) => setfirstName(e.target.value)}
            className={editIsActive ? inputActiveClass : inputNotActiveClass}
          />
        </div>
        <div className="flex flex-col w-[100%] mt-10">
          <label htmlFor="pseudo" className="text-[12px] pl-4">
            Pseudo
          </label>
          <input
            disabled={!editIsActive}
            type="text"
            name="pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            className={editIsActive ? inputActiveClass : inputNotActiveClass}
          />
        </div>
        <div className="flex flex-col w-[100%] mt-10">
          <label htmlFor="email" className="text-[12px] pl-4">
            Email
          </label>
          <input
            disabled={!editIsActive}
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={editIsActive ? inputActiveClass : inputNotActiveClass}
          />
        </div>
        <div className="flex flex-col w-[100%] mt-10">
          <label htmlFor="password" className="text-[12px] pl-4">
            Mot de passe
          </label>
          <input
            disabled={!editIsActive}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={editIsActive ? inputActiveClass : inputNotActiveClass}
          />
        </div>

        <button
          type="button"
          onClick={toggleEdit}
          className={
            !editIsActive
              ? "bg-secondary-light text-texte-dark w-40 mx-auto py-2.5 mt-10 rounded-2xl text-center text-fontTitle scale-h-102 cursor-pointer"
              : "hidden"
          }
        >
          Modifier
        </button>
        <button
          type="button"
          onClick={toggleEdit}
          className={
            editIsActive
              ? "bg-primary-light text-texte-light w-40 mx-auto py-2.5 mt-10 rounded-2xl text-center text-fontTitle scale-h-102 cursor-pointer"
              : "hidden"
          }
        >
          Valdider
        </button>
      </form>
    </>
  );
};

export default UserInfos;