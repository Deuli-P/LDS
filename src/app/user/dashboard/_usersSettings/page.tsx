"use client";

import styles from "./button.module.css";

const UserSettings = () => {

  return (
    <>
      <h3 className="uppercase text-[30px] mb-6">Paramètres</h3>

      <div className="flex flex-row justify-between w-[90%] m-auto mb-10">
        <p>Thème :</p>
        <div className="flex flex-row justify-between">
          {/* <p className="mr-4">clair</p> */}
          <input className={styles.Input} type="checkbox" id="darkmode-toggle" />
          <label className={styles.Label} htmlFor="darkmode-toggle"></label>
          {/* <p className="ml-4">sombre</p> */}
        </div>
      </div>

      <div className="flex flex-row justify-between w-[90%] m-auto">
        <p>Recevoir la newsletter</p>
        <div className="flex flex-row justify-between">
          <input className={styles.Input} type="checkbox" id="newsletter-toggle" />
          <label className={styles.Label} htmlFor="newsletter-toggle"></label>
        </div>
      </div>

      <button className="bg-foreground-light text-texte-light w-80 mx-auto py-2.5 mt-32 rounded-2xl text-center text-fontTitle scale-h-102 cursor-pointer border border-secondary-light">Supprimer mon compte</button>

    </>
  );
};

export default UserSettings;
