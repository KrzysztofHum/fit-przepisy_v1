import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Footerr>
      <div>
        <p>
          FitPrzepisy.pl to autorski serwis z szybkimi w wykonaniu, a zarazem
          smacznymi przepisami.
        </p>
      </div>
      <div>
        <p>
          &copy; {new Date().getFullYear()} <span>Fit przepisy</span> Krzysztof
          Humienny, Wszelkie prawa zastrzeżone{" "}
        </p>
      </div>
    </Footerr>
  );
}

export const Footerr = styled.footer`
  margin: 0 auto;
  max-width: 1120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #222;
  color: #fff;
  padding: 1rem;
  p {
    margin: 0;
  }
`;
