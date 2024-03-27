import { Header } from 'components/Header/Header';
import { AboutProductLastivka } from 'components/lastivka/AboutProductLastivka/AboutProductLastivka';
import { ChooseColorLastivka } from 'components/lastivka/ChooseColorLastivka/ChooseColorLastivka';
import { MainLastivka } from 'components/lastivka/MainLastivka/MainLastivka';
import { ProductSizeLastivka } from 'components/lastivka/ProductSizeLastivka/ProductSizeLastivka';
import { ProposalLastivka } from 'components/lastivka/ProposalLastivka/ProposalLastivka';
import { ShoppingListLastivka } from 'components/lastivka/ShoppingListLastivka/ShoppingListLastivka';
import { useState } from 'react';
import { ShoppingListButton } from 'components/ShoppingListButton/ShoppingListButton';
import { Reviews } from 'components/Reviews/Reviews';
import { OurBenefits } from 'components/OurBenefits/OurBenefits';
import { Questions } from 'components/Questions/Questions';
import { Feadback } from 'components/Feadback/Feadback';
import { Contacts } from 'components/Contacts/Contacts';
import { Footer } from 'components/Footer/Footer';
export const Lastivka = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <ShoppingListLastivka
        modalOpen={modalOpen}
        modalClose={handleModalClose}
      />
      <ShoppingListButton modalOpen={handleModalOpen} />
      <Header />
      <MainLastivka />
      <ProposalLastivka />
      <AboutProductLastivka />
      <ProductSizeLastivka />
      <ChooseColorLastivka id="chooseColor" modalOpen={handleModalOpen} />
      <Reviews />
      <OurBenefits />
      <Questions />
      <Feadback />
      <Contacts />
      <Footer />
    </div>
  );
};
