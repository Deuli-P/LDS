"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InlineInput from "@/components/Input/Inline";
import CtaSecondary from "@/components/CTA/cta-secondary";
import CtaPrimary from "@/components/CTA/cta-primary";
import Checkbox from "@/components/Input/Checkbox";


export default function SignUp() {
  
  const [ newUser, setNewUser ] = useState({
    firstname: "",
    lastname:"",
    email: "",
    password: "",
    newsletter: false,
  })

  // Value de Confirm password
  const [confirmPassword, setConfirmPassword ] = useState('')
  // value to check strongest of the password
  const [ strong, setStrong ] = useState<""| "trop court" | "faible"| "correct"| "fort">('')


  const router = useRouter();

  // regex for minimum requirement: 1 lowercase , 1 uppercase ,1 number, 1 symbol and 12 letter
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/

  
  const handleConfirmPassword=()=> {
    return confirmPassword === newUser.password
  }


  const handleSubmit= async()=> {
    if(handleConfirmPassword()){
      const newForm = {...newUser}
      

    }
  }

 
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=> {
    
    const value = e.target.value;
    
    const propertyName = e.target.name;
    
    setNewUser((prevInfo)=> (
      {
      ...prevInfo,
      [propertyName]: value
    }
  ))}

  const handleCheckbox =(value:boolean)=> {
    setNewUser((prevInfo)=> (
      {
      ...prevInfo,
      newsletter: value
    }
  ))}


  useEffect(() => {
    // si psw > 0
    if(newUser.password.length > 0){
      setStrong("trop court");
    if (regex.test(newUser.password)) {
      if (newUser.password.length >= 12 && newUser.password.length < 16) {
        setStrong("faible");
      } else if (newUser.password.length >= 16 && newUser.password.length < 20) {
        setStrong('correct');
      } else if (newUser.password.length >= 20) {
        setStrong('fort');
      }
    }
  }
    else{
      setStrong("")
    }
  }, [newUser.password]);

  // Mot de passe comparaison
  // Si passwordConfirm!= newUser.password alors erreur
  
  // Si passwordConfirm < 12 et pas symbole, maj et number : invalid



  return (
      <section className="w-full flex flex-col items-center gap-6 px-4 py-12 bg-background-light dark:bg-background-dark text-texte-light dark:text-texte-dark">
        <h2 className="font-munday font-bold text-2xl">Inscription</h2>
        <form 
          action="submit" 
          className="flex flex-col bg-primary rounded-lg p-3 bg-foreground-light dark:bg-foreground-dark gap-6"
        >
          <div className="gap-2 flex flex-col">
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <InlineInput
                type='text'
                name='firstname'
                label="Prenom"
                required={true}
                placeholder="Votre Prenom"
                value={newUser.firstname}
                onChange={handleChange}
              />
              <InlineInput
                type='text'
                name='lastname'
                label="Nom"
                required={true}
                placeholder="Votre nom"
                value={newUser.lastname}
                onChange={handleChange}
              />
            </div>
              <InlineInput
                type='email'
                name='email'
                label="Email"
                required={true}
                placeholder="Votre email"
                value={newUser.email}
                onChange={handleChange}
              />
              <div className="gap-2 flex flex-col">
                <div>
                  <label>
                    <div className="w-full flex justify-between">
                      <span>Mot de passe</span>
                      <span className={` font-roboto font-bold ${strong === "correct"? "text-primary-light" : strong === "fort"? "text-vert" : "text-rouge" }`}>{strong}</span>
                    </div>
                    <input 
                    className={`
                      border-0
                      focus:ring-1
                      focus:focus-primary-light
                      error:bg-error
                      rounded-lg
                      mt-1
                      block
                      w-full
                      px-3
                      py-2
                      bg-background-light
                      dark:bg-foreground-light
                      text-texte-light
                      font-bold
                      `}
                      type="password" 
                      name="password" 
                      value={newUser.password} 
                      onChange={handleChange} 
                      placeholder="Votre mot de passe"
                      required={true}
                      />
                  </label>
                  <span className=" text-[12px]">Le mot de passe doit contenir au minimum 12 caractères comprenant une lettre minuscule et une majuscule, un nombre et un symbole.</span>
                  </div>
                <div>
                  <label>
                    <div className="w-full flex justify-between">
                      <span>Confirmer mot de passe</span>
                    </div>
                    <input 
                    className={`
                      border-0
                      focus:ring-1
                      focus:focus-primary-light
                      error:bg-error
                      rounded-lg
                      mt-1
                      block
                      w-full
                      px-3
                      py-2
                      bg-background-light
                      dark:bg-foreground-light
                      text-texte-light
                      font-bold
                      `}
                      type="password" 
                      name="confirmPassword" 
                      value={confirmPassword} 
                      placeholder="Réecrire le mot de passe"
                      onChange={(e)=>setConfirmPassword(e.target.value)} 
                      />
                  </label>
                </div>
              </div>
            </div>
            <Checkbox
              label="Accepter de recevoir le courrier d'actualité du projet si il y en existe une un jour."
              onCheckbox={handleCheckbox}
              name='newsletter'
            />
            <div className=" flex flex-col gap-2 justify-center items-center">
              <p className=" text-center text-[12px] lg:w-[60%]">En validant l&apos;inscrption vous acceptez <Link href="/cgvu">les CGVUs, la politique de confidentialité et la gestion des données.</Link></p>
              <div className='w-[160px] '>
                <CtaPrimary onClick={()=>console.log('Submit')}>
                  S&apos;inscrire
                </CtaPrimary>
              </div>
            </div>
        </form>
        <div className="flex flex-col items-center gap-2">
        <p className="">Vous avez déjà un compte?</p>
          <CtaSecondary onClick={()=>console.log("go to connexion")}>
            <Link href="/connexion">Se connecter</Link>
          </CtaSecondary>
        </div>
      </section>
  );
}
