import './res/theming.scss';

import { PageLayout } from './res/Components';

function Abyss() {
  return (
    <PageLayout>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
        <script>var Alert = ReactBootstrap.Alert;</script>
    </PageLayout>
  );
}

export default Abyss;
