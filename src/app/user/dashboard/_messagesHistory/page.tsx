"use client";

const MessagesHistory = () => {
  const messagesHeads = [
    // constante à supprimer par un appel à API
    {
      id: 1,
      correspondant: "Nom du correspondant",
      lastMessageDate: "12/06/2024",
    },
    {
      id: 2,
      correspondant: "Nom du correspondant",
      lastMessageDate: "12/06/2024",
    },
    {
      id: 3,
      correspondant: "Nom du correspondant",
      lastMessageDate: "12/06/2024",
    },
    {
      id: 4,
      correspondant: "Nom du correspondant",
      lastMessageDate: "12/06/2024",
    },
  ];

  return (
    <>
      <h3 className="uppercase text-[30px] mb-6">Messages</h3>

      <div className="flex flex-col items-center">
        {!messagesHeads.length ? (
          <>
            <p className="text-center">Vous n'avez pas encore conversé</p>
          </>
        ) : (
          messagesHeads.map((messages) => (
            <>
              <div className="flex items-center justify-between w-[90%] bg-secondary-light text-texte-dark rounded-2xl px-6 py-2 my-2">
                <p>{messages.correspondant}</p>
                <div>
                  <p className="text-center font-black">Voir</p>
                  <p className="text-center">{messages.lastMessageDate}</p>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default MessagesHistory;
