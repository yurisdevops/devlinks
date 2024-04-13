import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        console.log(`Cadastrados com sucesso!`);
      })
      .catch((error) => {
        console.log(`Não possível cadastrar ${error}`);
      });
  }

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook);
          setInstagram(snapshot.data()?.instagram);
          setYoutube(snapshot.data()?.youtube);
        }
      });
    }
    loadLinks();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen pb-7 px-2">
        <Header />

        <h1 className="text-white text-2xl font-medium mt-8 mb-4">
          Minhas Redes Sociais
        </h1>

        <form
          onSubmit={handleRegister}
          className="flex flex-col max-w-xl w-full"
        >
          <label className="text-white font-medium mt-2 mb-2">
            {" "}
            Link do Facebook
          </label>
          <Input
            placeholder="Digite a URL do Facebook"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />

          <label className="text-white font-medium mt-2 mb-2">
            {" "}
            Link do Instagram
          </label>
          <Input
            placeholder="Digite a URL do Instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />

          <label className="text-white font-medium mt-2 mb-2">
            {" "}
            Link do Youtube
          </label>
          <Input
            placeholder="Digite a URL do Youtube"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />

          <button
            type="submit"
            className="text-white bg-blue-600 rounded-md flex items-center justify-center mb-7 h-9 font-medium"
          >
            Salvar Links
          </button>
        </form>
      </div>
    </>
  );
}
