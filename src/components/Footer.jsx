import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "emailjs-com";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kwg4jgj", // Seu Service ID
        "template_p0w6ftp", // Seu Template ID
        form.current,
        "8nnJgfnXmTNMbbtRn" // Sua Public Key (equivalente ao User ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Obrigado por se inscrever! Fique de olho no seu e-mail.");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(); // Limpa o formulário após o envio
  };

  return (
    <footer className="bg-[#111111] py-4 text-gray-300 font-Unbounded">
      <div className="container mx-auto px-4">
        <div className="footer-container grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Seção de Contato */}
          <div className="contact-form">
            <h3 className="text-white text-sm font-semibold mb-2">Entre em Contato</h3>
            <form id="contactForm" ref={form} onSubmit={sendEmail} className="flex flex-col space-y-2">
              <input
                type="text"
                name="user_name" // Nome que será enviado ao EmailJS
                placeholder="Nome"
                required
                className="bg-gray-800 border border-gray-600 rounded text-white p-1 text-xs"
              />
              <input
                type="text"
                name="user_phone" // Telefone que será enviado ao EmailJS
                placeholder="Telefone"
                required
                className="bg-gray-800 border border-gray-600 rounded text-white p-1 text-xs"
              />
              <textarea
                name="user_message" // Mensagem que será enviada ao EmailJS
                placeholder="Mensagem"
                required
                className="bg-gray-800 border border-gray-600 rounded text-white p-1 text-xs"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-yellow-500 rounded p-1 text-xs"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Links do Footer */}
          <div className="footer-links">
            <h3 className="text-white text-sm font-semibold mb-2">Menu</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-300 hover:text-white transition-all duration-300 text-xs"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jogos"
                  className="text-gray-300 hover:text-white transition-all duration-300 text-xs"
                >
                  Jogos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/loja"
                  className="text-gray-300 hover:text-white transition-all duration-300 text-xs"
                >
                  Loja
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/live"
                  className="text-gray-300 hover:text-white transition-all duration-300 text-xs"
                >
                  Ao Vivo
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="social-media">
            <h3 className="text-white text-sm font-semibold mb-2">Siga-nos</h3>
            <div className="flex space-x-3 mb-3">
              <a href="#" className="text-gray-300 hover:text-white transition-all duration-300">
                <img src="tiktok.svg" alt="TikTok" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all duration-300">
                <img src="x-twitter.svg" alt="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all duration-300">
                <img src="instagram.svg" alt="Instagram" className="w-5 h-5" />
              </a>
            </div>
            <form id="newsletter" className="flex items-center" ref={form} onSubmit={sendEmail}>
              <input
                type="email"
                name="user_email" // Email que será enviado ao EmailJS
                placeholder="Seu e-mail"
                className="bg-gray-800 border border-gray-600 rounded text-white p-1 text-xs w-full"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-yellow-500 rounded p-1 ml-2 text-xs"
              >
                Inscreva-se
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 text-center text-xs text-gray-500 border-t border-gray-700 pt-2">
          &copy; 2024 Turbo Racing. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
