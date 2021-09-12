import React from 'react';
import { TitleHeader, Wrapper, Button } from 'components';
import { SEO } from 'utils';

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Strona nie istnieje" />
      <section>
        <Wrapper>
          <TitleHeader color="blue">Strona nie istnieje</TitleHeader>
          <p>
            Link, który próbujesz uruchomić nie jest powiązany z żadną z naszych
            stron. Przejdź z powrotem na stronę główną i zacznić przeglądać na
            nowo ;)
          </p>
          <Button to="/" pattern="gatsbyLink">
            Strona główna
          </Button>
        </Wrapper>
      </section>
    </>
  );
};

export default NotFoundPage;
