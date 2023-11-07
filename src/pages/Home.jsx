import {
  banner01,
  banner02,
  closeMenuIcon,
  downArrowIcon,
  footerFacebookIcon,
  footerInstagramIcon,
  footerPhoneIcon,
  footerPlaceIcon,
  footerYoutubeIcon,
  headerFacebookIcon,
  headerInstagramIcon,
  headerYoutubeIcon,
  image01,
  image02,
  image03,
  image04,
  logo,
  menuIcon,
} from "../assets";
import Button from "../components/common/Button/Button";
import Container from "../components/layout/Container/Container";
import Text from "../components/common/Text/Text";
import Animation from "../components/common/Animation/Animation";
import { motion } from "framer-motion";
import Link from "../components/common/Link";
import Map from "../components/common/Map/Map";

// INFRA
import { ACTIVITES, DOUTRINES, GALLERY, INTRODUCTION, QG } from "../infra";
import { useEffect, useState } from "react";
import ImageModal from "../components/common/Modal/ImageModal";

export default function Home() {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [locate, setLocate] = useState([-8.9032331, 13.2124664, 17]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 78 ? setHeaderFixed(true) : setHeaderFixed(false);
    });
  });

  function handleSwitchLocation(e) {
    e.preventDefault();
    let lat = e.target.value.split(",")[0];
    let log = e.target.value.split(",")[1];
    let cod = e.target.value.split(",")[2];

    let coord = [Number(lat), Number(log), Number(cod)];
    setLocate(coord);
    console.log(locate);
  }

  function handleOpenImage(id) {
    setOpenImageModal(true);
    localStorage.setItem("image-view", id.toString());
  }

  return (
    <div className="'w-full relative overflow-x-hidden">
      {openImageModal && (
        <ImageModal
          onClose={() => setOpenImageModal(false)}
          id={Number(localStorage.getItem("image-view"))}
        />
      )}

      <section className="w-full h-screen flex flex-col items-center xs:px-8 md:px-28 2xl:px-36 relative">
        <div className="absolute w-full h-full top-0 -z-10 left-0">
          <img
            src={banner01}
            alt="Banner image 01"
            className="w-full h-full object-cover brightness-[60%]"
          />
        </div>

        <header
          className={`w-full py-10 flex items-center justify-between ${
            headerFixed
              ? "fixed xs:px-8 md:px-28 2xl:px-36 z-30 bg-secondaryColor shadow-lg"
              : ""
          }`}
        >
          <h2 className=" xs:text-lg md:text-2xl font-poppins_semibold text-white">
            Igreja da{" "}
            <span className="font-poppins_semibold text-primaryColor">
              Fé Apostólica
            </span>{" "}
            Americana
          </h2>

          <nav
            onClick={() => setOpenMenu(false)}
            className={`
              transition duration-200
              lg:translate-x-0 flex lg:relative lg:h-auto lg:bg-transparent lg:backdrop-blur-0 lg:w-auto
              xs:fixed xs:h-screen xs:bg-[#00000090] left-0 top-0 xs:w-full xs:backdrop-blur-sm
              ${openMenu ? "translate-x-0" : "-translate-x-full delay-300"}
            `}
          >
            <ul
              className={`
              transition duration-300 delay-300
              flex lg:flex-row lg:items-center gap-x-8 lg:gap-y-0 lg:p-0 lg:w-auto relative lg:h-auto lg:bg-transparent
              lg:translate-x-0

              xs:flex-col xs:items-start xs:p-10 xs:w-[70%] xs:h-screen xs:bg-secondaryColor xs:gap-y-8
              ${openMenu ? "xs:translate-x-0" : "xs:-translate-x-full delay-75"}
            `}
            >
              <li>
                <Link
                  href="#home"
                  className="text-sm text-white hover:text-primaryColor transition duration-150 focus:text-primaryColor"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#about_us"
                  className="text-sm text-white hover:text-primaryColor transition duration-150 focus:text-primaryColor"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="#our_doutrins"
                  className="text-sm text-white hover:text-primaryColor transition duration-150 focus:text-primaryColor"
                >
                  Nossa Doutrinas
                </Link>
              </li>
              <li>
                <Link
                  href="#our_activities"
                  className="text-sm text-white hover:text-primaryColor transition duration-150 focus:text-primaryColor"
                >
                  Nossa Actividades
                </Link>
              </li>
              <li>
                <Link
                  href="#come_see_us"
                  className="text-sm text-white hover:text-primaryColor transition duration-150 focus:text-primaryColor"
                >
                  Localizações
                </Link>
              </li>
              <li>
                <Link
                  href="#contact_us"
                  className="text-sm text-white hover:text-primaryColor transition duration-150 focus:text-primaryColor"
                >
                  Contactos
                </Link>
              </li>

              <button
                onClick={() => setOpenMenu(false)}
                className={`absolute right-4 top-4 lg:hidden`}
              >
                <img src={closeMenuIcon} alt="" className="w-8" />
              </button>
            </ul>
          </nav>

          <ul className="lg:flex xs:hidden items-center gap-6">
            <li>
              <Link href="https://www.facebook.com/nossaigrej/">
                <img className="w-6" src={headerFacebookIcon} alt="Facebook" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <img className="w-6" src={headerYoutubeIcon} alt="Youtube" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <img
                  className="w-6"
                  src={headerInstagramIcon}
                  alt="Instagram"
                />
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setOpenMenu(true)}
            className="xs:block lg:hidden"
          >
            <img src={menuIcon} className="w-10" alt="" />
          </button>
        </header>

        <motion.div
          initial={{ y: 100, opacity: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col gap-8 xs:pt-14 md:pt-48"
        >
          <h2 className="text-5xl 2xl:text-7xl text-white font-poppins_bold">
            Seja bem vindo
          </h2>

          <p className="text-white text-base 2xl:text-base max-w-4xl leading-loose">
            Nossa organização é conservadora por natureza, seguindo uma tradição
            de santidade Wesleyana praticada por aqueles sobre os quais o
            Espírito Santo desceu em Azusa.
          </p>

          <div className="flex items-center gap-4">
            <Button className="text-white border-2 border-white">
              Saiba mais
            </Button>
            <Button className="border-2 bg-primaryColor border-primaryColor text-primaryFont font-poppins_medium">
              Fale connosco
            </Button>
          </div>
        </motion.div>
      </section>

      <Container
        id="about_us"
        className="justify-center md:flex-wrap-reverse lg:flex-nowrap items-center xs:gap-14 lg:gap-72"
      >
        <Animation
          position="zoom-in"
          className="relative xs:hidden md:-ml-28 lg:ml-0 md:flex flex-col gap-28"
        >
          <img src={image02} className="w-96 rouded-md" alt="" />
          <img src={image03} className="w-96 rouded-md  z-10" alt="" />
          <img
            src={image01}
            className="w-96 rouded-md absolute -right-44 top-40 brightness-75"
            alt=""
          />
        </Animation>

        <Animation
          position="fade-up-left"
          className="flex flex-col gap-6 items-start"
        >
          <h2 className="text-5xl text-primaryColor font-poppins_semibold">
            Introdução
          </h2>

          {INTRODUCTION.map((introduction, index) => (
            <p
              key={index}
              className="text-sm 2xl:text-base leading-relaxed max-w-xl"
            >
              {introduction.content}
            </p>
          ))}

          <Button className="border-2 bg-primaryColor border-primaryColor text-primaryFont font-poppins_medium">
            Fale connosco
          </Button>
        </Animation>
      </Container>

      <section
        id="our_mission"
        className="w-full h-[370px] flex justify-center items-center mt-36 xs:px-8 md:px-28 2xl:px-36 relative"
      >
        <img
          className="w-full h-full object-cover absolute left-0 top-0 -z-10"
          src={banner02}
          alt="Banner 02"
        />

        <Animation
          position="fade-right"
          className="flex flex-col items-center gap-5"
        >
          <h2 className="text-5xl text-white font-poppins_semibold">
            Nosso Lema
          </h2>

          <Text className="text-center max-w-xl text-white">
            Defender com afinco a fé que uma vez foi entregue aos santos. -
            Judas Capítulo 3
          </Text>
        </Animation>
      </section>

      <Container className=" xs:gap-14 md:gap-8 justify-center flex-wrap">
        {ACTIVITES.map((activity, index) => (
          <Animation
            position="fade-left"
            key={index}
            className="flex items-start gap-4"
          >
            <img src={activity.icon} alt="" className="w-11" />

            <div>
              <Text className="max-w-[341px]">{activity.content}</Text>
            </div>
          </Animation>
        ))}
      </Container>

      <Container
        id="locate"
        className="justify-center xs:flex-wrap-reverse md:flex-wrap-reverse lg:flex-nowrap items-center xs:gap-14 lg:gap-32"
      >
        <Animation position="zoom-in-up" className="max-w-xl rounded-lg">
          <img
            src={image04}
            alt="Nossa Sede"
            className="w-full object-cover h-full"
          />
        </Animation>

        <Animation
          position="fade-up-left"
          className="flex flex-col gap-6 items-start"
        >
          <h2 className="text-5xl text-primaryColor font-poppins_semibold">
            Nossa Sede
          </h2>

          {QG.map((qg, index) => (
            <p
              key={index}
              className="text-sm 2xl:text-base leading-relaxed max-w-xl"
            >
              {qg.content}
            </p>
          ))}

          <Button className="border-2 bg-primaryColor border-primaryColor text-primaryFont font-poppins_medium">
            Fale connosco
          </Button>
        </Animation>
      </Container>

      <Container id="our_doutrins" className="flex-col gap-6 items-center">
        <Animation
          className="flex flex-col gap-6 items-center"
          position="fade-up"
        >
          <h2 className="text-5xl text-primaryColor font-poppins_semibold">
            Nossas Doutrinas
          </h2>

          <Text className="lg:text-center max-w-xl">
            Aqui, você encontrará uma coleção de fotos que capturam os sorrisos,
            as orações e os eventos que unem nossa congregação. Nossa galeria é
            um reflexo do amor e da dedicação que compartilhamos em nossa
            igreja.
          </Text>
        </Animation>

        <div className="flex items-start justify-start px-6 flex-wrap gap-20 mt-8">
          {DOUTRINES.map((doutrine, index) => (
            <Animation key={index} position="zoom-in">
              <ul className="flex flex-col items-start gap-6">
                {doutrine.list.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm list-disc text-gray-500 font-poppins_medium"
                  >
                    {item.content}
                  </li>
                ))}
              </ul>
            </Animation>
          ))}
        </div>
      </Container>

      <Container id="our_activities" className="flex-col gap-6 items-center">
        <Animation
          className="flex flex-col gap-6 items-center"
          position="fade-up"
        >
          <h2 className="text-5xl text-primaryColor font-poppins_semibold">
            Nossas Actividades
          </h2>

          <Text className="lg:text-center max-w-xl">
            Aqui, você encontrará uma coleção de fotos que capturam os sorrisos,
            as orações e os eventos que unem nossa congregação. Nossa galeria é
            um reflexo do amor e da dedicação que compartilhamos em nossa
            igreja.
          </Text>
        </Animation>

        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {GALLERY.slice(0, 4).map((gal) => (
            <Animation
              position="zoom-in"
              onClick={() => handleOpenImage(gal.id)}
              key={gal.id}
              className="flex-1 rounded-lg"
            >
              <img
                src={gal.image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </Animation>
          ))}
        </div>
      </Container>

      <Container
        id="come_see_us"
        className="flex-col gap-10 items-center py-32"
      >
        <div className="w-full flex justify-between flex-wrap gap-6 items-end">
          <Animation position="fade-left" className="flex flex-col gap-5">
            <h2 className="text-5xl text-primaryColor font-poppins_semibold">
              Visite-nos
            </h2>

            <Text className="max-w-sm">
              Pretende visitar nossa igreja? Encontre-nos nos locais mais perto
              de si e venha adorar a Deus connosco
            </Text>
          </Animation>

          <form action="">
            <select
              name=""
              id=""
              onChange={handleSwitchLocation}
              className="p-4 w-full bg-gray-100 rounded-lg outline-none text text-gray-400 font-poppins_medium"
            >
              <option
                value={[String(-8.9032331), String(13.2124664), String(17)]}
              >
                Igreja da Fé Apostólica Americana - Gamek
              </option>
              <option
                value={[String(-12.3827377), String(13.5549241), String(17)]}
              >
                Igreja da Fé Apostólica Americana - Lobito
              </option>
              <option
                value={[String(-8.7972858), String(13.2844043), String(16.95)]}
              >
                Igreja da Fé Apostólica Americana - Sambizanga
              </option>
            </select>
          </form>
        </div>

        <div className="w-full h-96 -z-30 rounded-xl">
          <Map coordinates={locate} />
        </div>
      </Container>

      <footer id="contact_us" className="bg-secondaryColor">
        <div className="flex items-start flex-wrap xs:px-8 gap-x-40 gap-y-20 justify-between py-36 md:px-28 2xl:px-36">
          <div className="flex flex-col items-start gap-6">
            <img src={logo} alt="" className="w-36" />

            <Text className="text-white max-w-xs">
              Acreditamos que a Bíblia inteira é a Palavra infalível de Deus e
              defendemos os ensinamentos fundamentais da fé do Novo Testamento.
            </Text>
          </div>

          <div className="flex flex-col items-start gap-6">
            <h2 className="text-xl font-semibold text-white">Links</h2>

            <ul className="flex flex-col gap-6">
              <li>
                <Link href="#home" className="text-sm text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#about_us" className="text-sm text-white">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#our_doutrins" className="text-sm text-white">
                  Nossa Doutrinas
                </Link>
              </li>
              <li>
                <Link href="#our_activities" className="text-sm text-white">
                  Nossa Actividades
                </Link>
              </li>
              <li>
                <Link href="#come_see_us" className="text-sm text-white">
                  Localizações
                </Link>
              </li>
              <li>
                <Link href="#contact_us" className="text-sm text-white">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6">
            <h2 className="text-xl font-semibold text-white">Contactos</h2>

            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  href="#"
                  className="text-sm flex items-center gap-4 font-poppins_medium text-white"
                >
                  <img src={footerPhoneIcon} className="w-5" alt="" />
                  +244 923 432 231
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm flex items-center gap-4 font-poppins_medium text-white"
                >
                  <img src={footerPlaceIcon} className="w-5" alt="" />
                  Angola, Luanda, Gamek.
                </Link>
              </li>

              <li className="flex items-center gap-8">
                <Link href="https://www.facebook.com/nossaigrej/">
                  <img src={footerFacebookIcon} className="w-8" alt="" />
                </Link>
                <Link href="#">
                  <img src={footerInstagramIcon} className="w-8" alt="" />
                </Link>
                <Link href="#">
                  <img src={footerYoutubeIcon} className="w-8" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex items-center bg-[#111111] justify-center py-14">
          <span className="text-center text-white text-sm">
            Todos os Direitos Reservados. Feito com 🤍 pela PN Clique
          </span>
        </div>
      </footer>
    </div>
  );
}
