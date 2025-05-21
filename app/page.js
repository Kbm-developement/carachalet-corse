import Header from './components/Header'
import Content from './components/Content'
import Tarifs from './components/Tarifs';
import Footer from './components/Footer';
import Duo from './components/Duo';
import Detente from './components/Detente';

export default function Home() {
  return (
    <div>
      <Header />
      <Content />
      <Duo />
      <Detente />
      <Tarifs />
      <Footer />
    </div>
  );
}
