import logo from './mailchimpLogo.png';
import './App.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './seta.png';
import img5 from './principal.png';
import img6 from './publico.png';
import img7 from './insta.png';
import img8 from './face.png';
import img9 from './twiter.png';
import img10 from './youtube.png';

function App() {
  return (
    <div className="App">
      <header>
      <div className="Cabecalho" id="cabecalho">
        <nav>
          <a href="#recursos">PÚBLICO</a>
          <a href="#galeria">DESIGNS</a>
          <a href="#">INSPIRAÇÃO</a>
          <a href="#">PREÇOS</a>
        </nav>
        <div className="Logo">
          <img src={logo}></img>
        </div>
        <div className="Entrar">
        <a href="#">ENTRAR</a>
        </div>
      </div>
      </header>
      <div className="Main">
          <div className="topo">
            <div className="texto1">
              <h1>Faça tudo com o <br></br>mailchimp</h1>
              <div className="p">
                <img src={img5}></img>
              </div>
          </div>
          <div className="texto2">
                <p>Com o Mailchimp, você tem as ferramentas necessárias para vender seus produtos, alcançar novos clientes e levar seu negócio a um novo patamar.</p>
              </div>
              </div>
              <div className="recursos" id="recursos">
                <h1>Sobre o seu público</h1>
                <div className="R">
                <div className="imgR">
                  <img src={img6}></img>
                  </div>
                  <div className="textoR1">
                <p> - Basta trazer todos os dados de seus contatos para o Mailchimp e já podemos mostrar insights úteis sobre seu público. Ajudaremos você a encontrar novas maneiras de conversar com pessoas que amam sua marca e de entrar em contato com aquelas que provavelmente também amarão.
                <br></br><br></br> - Mesmo que você ainda não tenha contatos para marketing, você pode fazer login e começar a conhecer as nossas ferramentas de design. Na verdade, recomendamos que faça isso.
                </p>
                <input type="submit" value="Começar agora"></input>
                
                </div>
                </div>
              
              </div>
          <div className="fundoFotos">
            <h1>Designs com o Mailchimp</h1>
            <div className="fotos" id="galeria">
              <img className="efeitoimg" src={img1}></img>
              <img className="efeitoimg" src={img2}></img>
              <img className="efeitoimg" src={img3}></img>
              <img id="seta" src={img4}></img>
            </div>
            </div>
        </div>
        <footer>
          <div className="logo2">
           <a href="#cabecalho"><img src={logo}></img></a>
          </div>
          <div className="sociais">
          <a href="https://www.instagram.com"><img src={img7}></img></a>
          <a href="https://www.facebook.com"><img src={img8}></img></a>
          <a href="https://www.twiter.com"><img src={img9}></img></a>
          <a href="https://www.youtube.com"><img src={img10}></img></a>
          </div>
          <div className="direitosR">
            <p>©2001-2021 Todos os direitos reservados. Mailchimp® é marca registrada da The Rocket Science Group</p>
            <p className="p2"> Privacidade | Termos | Preferências de cookies</p>
          </div>
              </footer>
    </div>
  );
}

export default App;
