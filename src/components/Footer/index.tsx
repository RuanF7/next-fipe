import React from "react";
import styled from ""

function Footer() {
  return (
    <React.Fragment>
          <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>corre cadeirante</h6>
            <p className="text-justify"> <i> Motivo da criação </i> <p>nós criamos com a intenção de aperfeiçoar nossas habilidades, e também com o objetivo de ficar mais próximo do dia dia de um mundo corporativo esse texto é um exemplo será mudado </p></p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6> Tecnologias </h6>
            <ul className="footer-links">
              <li><a href="https://legacy.reactjs.org/" target="_blank" >React</a></li>
              <li><a href="https://www.typescriptlang.org/" target="_blank" >Typescrip</a></li>
              <li><a href="https://nextjs.org/docs" target="_blank" >next</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6> Devs</h6>
            <ul className="footer-links">
              <li><a href="https://github.com/juliomarquesjr" target="_blank" >Julio</a></li>
              <li><a href="https://github.com/RuanF7" target="_blank" >Ruan</a></li>
              <li><a href="https://github.com/Aquillae777" target="_blank" >Kauã</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy;All Rights Reserved by 
         <a href="#">inventar </a>.
            </p>
          </div>
        </div>
      </div>
</footer>
      

      <style jsx>
      {`
      .site-footer
      {
        background-color:#26272b;
        padding:45px 0 20px;
        font-size:15px;
        line-height:24px;
        color:#737373;
      }
      {
        border-top-color:#bbb;
        opacity:0.5
      }
      .site-footer hr.small
      {
        margin:20px 0
      }
      .site-footer h6
      {
        color:#fff;
        font-size:16px;
        text-transform:uppercase;
        margin-top:5px;
        letter-spacing:2px
      }
      .site-footer a
      {
        color:#737373;
      }
      .site-footer a:hover
      {
        color:#3366cc;
        text-decoration:none;
      }
      .footer-links
      {
        padding-left:0;
        list-style:none
      }
      .footer-links li
      {
        display:block
      }
      .footer-links a
      {
        color:#737373
      }
      .footer-links a:active,.footer-links a:focus,.footer-links a:hover
      {
        color:#3366cc;
        text-decoration:none;
      }
      .footer-links.inline li
      {
        display:inline-block
      }
      .site-footer .social-icons
      {
        text-align:right
      }
      .site-footer .social-icons a
      {
        width:40px;
        height:40px;
        line-height:40px;
        margin-left:6px;
        margin-right:0;
        border-radius:100%;
        background-color:#33353d
      }
      .copyright-text
      {
        margin:0
      }
      @media (max-width:991px)
      {
        .site-footer [class^=col-]
        {
          margin-bottom:30px
        }
      }
      @media (max-width:767px)
      {
        .site-footer
        {
          padding-bottom:0
        }
        .site-footer .copyright-text,.site-footer .social-icons
        {
          text-align:center
        }
      }
      .social-icons
      {
        padding-left:0;
        margin-bottom:0;
        list-style:none
      }
      .social-icons li
      {
        display:inline-block;
        margin-bottom:4px
      }
      .social-icons li.title
      {
        margin-right:15px;
        text-transform:uppercase;
        color:#96a2b2;
        font-weight:700;
        font-size:13px
      }
      .social-icons a{
        background-color:#eceeef;
        color:#818a91;
        font-size:16px;
        display:inline-block;
        line-height:44px;
        width:44px;
        height:44px;
        text-align:center;
        margin-right:8px;
        border-radius:100%;
        -webkit-transition:all .2s linear;
        -o-transition:all .2s linear;
        transition:all .2s linear
      }
      .social-icons a:active,.social-icons a:focus,.social-icons a:hover
      {
        color:#fff;
        background-color:#29aafe
      }
      .social-icons.size-sm a
      {
        line-height:34px;
        height:34px;
        width:34px;
        font-size:14px
      }
      .social-icons a.facebook:hover
      {
        background-color:#3b5998
      }
      .social-icons a.twitter:hover
      {
        background-color:#00aced
      }
      .social-icons a.linkedin:hover
      {
        background-color:#007bb6
      }
      .social-icons a.dribbble:hover
      {
        background-color:#ea4c89
      }
      @media (max-width:767px)
      {
        .social-icons li.title
        {
          display:block;
          margin-right:0;
          font-weight:600
        }
      }

  
      `}
      
    </style>
    </React.Fragment>
  );
}
export default Footer;
