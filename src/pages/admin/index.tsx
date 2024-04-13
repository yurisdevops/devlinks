import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { FormEvent, useState, useEffect } from "react";
import { FiTrash } from "react-icons/fi";

import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  backgroundColor: string;
  textColor: string;
}

export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#f1f1f1");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#121212");

  const [links, setLinks] = useState<LinkProps[]>([]);

  useEffect(() => {
    const linksRef = collection(db, "links");
    const queryRef = query(linksRef, orderBy("created", "asc"));

    const unsub = onSnapshot(queryRef, (snapshot) => {
      let list = [] as LinkProps[];
      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          textColor: doc.data().textColor,
          backgroundColor: doc.data().backgroundColor,
        });
      });
      setLinks(list);
    });
    return () => {
      unsub();
    };
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();
    if (nameInput == "" || urlInput == "") {
      alert("Preencha todos os campos");
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      textColor: textColorInput,
      backgroundColor: backgroundColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
        console.log("Cadastrado com sucesso!");
      })
      .catch((error) => {
        console.log(`Erro ao cadastrar ${error}`);
      });
  }

  function handleDeleteLink(id: string) {
    deleteDoc(doc(db, "links", id))
      .then(() => {
        console.log("Deletado com sucesso!");
      })
      .catch((error) => {
        console.log(`Erro ao deletar ${error}`);
      });
  }

  return (
    <>
      <div className="flex items-center flex-col min-h-screen pb-7 px-2">
        <Header />

        <form
          onSubmit={handleRegister}
          className="flex flex-col mt-3 mb-3 w-full max-w-xl"
        >
          <label className="text-white font-medium mt-2 mb-2">
            {" "}
            Nome do Link
          </label>
          <Input
            type="text"
            placeholder="Digite o link"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <label className="text-white font-medium mt-2 mb-2"> URL</label>
          <Input
            type="url"
            placeholder="Digite a url do link"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />

          <section className="flex my-4 gap-5">
            <div className="flex gap-2">
              <label className="text-white font-medium mt-2 mb-2">
                Cor do link:
              </label>
              <input
                className="rounded w-8"
                type="color"
                value={textColorInput}
                onChange={(e) => setTextColorInput(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <label className="text-white font-medium mt-2 mb-2">
                Fundo do link:
              </label>
              <input
                className="rounded w-8"
                type="color"
                value={backgroundColorInput}
                onChange={(e) => setBackgroundColorInput(e.target.value)}
              />
            </div>
          </section>

          {nameInput !== "" && (
            <div className="flex items-center justify-center flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
              <label className="text-white font-medium mt-2 mb-2">
                Veja como está ficando...
              </label>
              <article
                className="w-11/12 flex flex-col items-center justify-center bg-zinc-900 rounded px-1 py-3"
                style={{
                  marginBottom: 8,
                  marginTop: 8,
                  backgroundColor: backgroundColorInput,
                }}
              >
                <p className="font-bold" style={{ color: textColorInput }}>
                  {nameInput}
                </p>
              </article>
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex items-center justify-center"
          >
            Cadastrar
          </button>
        </form>

        <h2 className="text-white font-bold mb-4 text-2xl ">Meu Links</h2>
        {links.map((link) => (
          <article
            key={link.id}
            className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
            style={{
              backgroundColor: link.backgroundColor,
              color: link.textColor,
            }}
          >
            <p>{link.name}</p>
            <div>
              <button
                onClick={() => handleDeleteLink(link.id)}
                className="border border-dashed p-1 rounded bg-zinc-800"
              >
                <FiTrash size={18} color="#fff" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
