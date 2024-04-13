import { Social } from "../../components/Social";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState, useEffect } from "react";

import { db } from "../../services/firebaseConnection";
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  backgroundColor: string;
  textColor: string;
}

interface SocialLinkProps {
  facebook: string;
  instagram: string;
  youtube: string;
}

export function Home() {
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinkProps>();

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
        let list = [] as LinkProps[];
        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            backgroundColor: doc.data().backgroundColor,
            textColor: doc.data().textColor,
          });

          setLinks(list);
        });
      });
    }
    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data()?.facebook,
            instagram: snapshot.data()?.instagram,
            youtube: snapshot.data()?.youtube,
          });
        }
      });
    }
    loadSocialLinks();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full py-4 items-center justify-center">
        <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
          Página Home
        </h1>
        <span className=" text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

        <main className=" flex flex-col w-11/12 max-w-xl text-center">
          {links.map((link) => (
            <section
              key={link.id}
              className="bg-white mb-4 w-full font-bold p-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
              style={{
                backgroundColor: link.backgroundColor,
              }}
            >
              <a href={link.url} target="_blank" rel="noreferrer">
                {" "}
                <p
                  className="text-base md:text-lg"
                  style={{ color: link.textColor }}
                >
                  {link.name}
                </p>
              </a>
            </section>
          ))}

          {socialLinks && Object.keys(socialLinks).length > 0 && (
            <footer className="flex justify-center gap-3 my-4">
              <Social url={socialLinks.facebook}>
                <FaFacebook
                  size={35}
                  color="#FFF"
                  className="transition-transform hover:scale-105"
                />
              </Social>
              <Social url={socialLinks.instagram}>
                <FaInstagram
                  size={35}
                  color="#FFF"
                  className="transition-transform hover:scale-105"
                />
              </Social>
              <Social url={socialLinks.youtube}>
                <FaYoutube
                  size={35}
                  color="#FFF"
                  className="transition-transform hover:scale-105"
                />
              </Social>
            </footer>
          )}
        </main>
      </div>
    </>
  );
}
