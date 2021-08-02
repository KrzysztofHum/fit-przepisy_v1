import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;

}

body {
  margin: 0;
  background: #fafbfc;
  color: #333538;
  /* font-family: "Montserrat", sans-serif; */
    font-family: ${({ theme }) => theme.fonts.bodyFont[0]};

  font-weight: 400;
  line-height: 1.75;
}
  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  margin-bottom: 1.38rem;
  font-family: ${({ theme }) => theme.fonts.headingFont[0]};
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
  letter-spacing: 1px;
}

h1 {
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

h6 {
  margin-bottom: 0;
  padding: 2px;
}

button {
  cursor: pointer;
  appearance: none;
  color: white;
  background:  ${({ theme }) => theme.colors.primary1};
  border: none;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
   transition: ${({ theme }) => theme.animations.transition};
  text-transform: capitalize;
  width: 100%;
}
button:hover {
    background: ${({ theme }) => theme.colors.primary2};
    box-shadow: ${({ theme }) => theme.shadows.shadow2};
  }

ul {
  padding: 0;
  list-style-type: none;
}
a {
  text-decoration: none;
}
label {
  display: block;
  font-size:.8em;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
}

input,
textarea {
 width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.grey0};
    border-color: transparent;
    border: 1px solid #dbe0ea;
}
textarea {
  width: 100%;
  height: 7rem;
}
::placeholder {
  color: ${({ theme }) => theme.colors.grey600};
}
form > *:last-child {
  margin-bottom: 0;
}
`;

export default GlobalStyle;
