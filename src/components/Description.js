import React from "react";

export default function Description() {
  return (
    <Wrapper>
      <h1>Fit Przepisy</h1>
      <div>
        <p>
          Fit przepisy to mój autorski <strong>blog kulinarny</strong> gdzie
          zamieszczam najlepsze fit przepisy na kurczaka, gulasz, spaghetti, i
          wiele innych.{" "}
        </p>
        <p>
          <strong>Fit przepisy</strong>, które w nim publikuje to wyłącznie
          sprawdzone i proste w przygotowaniu dania, które zawierają
          zbilansowane ilości makroskładników. Każde danie jest opisane jak
          przygotować krok po kroku.{" "}
        </p>
        <p>
          <strong>Gotuję</strong>potrawy ekxponując ich najlepszy smak. Zależy
          mi na tym, by przygotowane potrawy były nie tylko smaczne, ale przede
          wszystkim zdrowe. Dlatego do każdej potrawy dodaje jak najwięcej
          naturalnych składników zamiast przetworzonych produktów.
        </p>
        <h2>Przepisy</h2>
        <p>
          Wszyscy uwielbiamy zdrowe jedzenie. A smakuje ono jeszcze lepiej gdy
          zrobimy je sami, dokładnie tak jak lubimy. Pomaga w tym mój blog
          <strong>fit przepisy</strong>Znajdziesz w nim setki przepisów na{" "}
          <strong>niskokaloryczne potrawy</strong>
        </p>

        <h3>Fit przepisy</h3>
        <p>
          Na moim blogu znajdziesz też wiele inspiracji na{" "}
          <strong>zdrowe przepisy</strong> zawierające zbilansowane ilości
          makroskładników
        </p>
        <p>
          Bez wezgędu na to jak długie masz doświadczenie w kuchni i co lubisz
          przyrządzać to łączy nas jedno. Pasja do zdrowego gotowania.
        </p>
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.greyBackground};
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
