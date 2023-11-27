import Button from "./Button";

import { GoBell } from 'react-icons/go';
import { GoCloud } from 'react-icons/go';
import { GoDatabase } from 'react-icons/go';

function App() {

  const handleClick = () => {
    console.log('Clicked!!')
  }

  return (
    <>
      <div>
        <Button secondary onClick={handleClick} classNames="mb-2"> 
          <GoBell></GoBell>
          abcd
          </Button>
      </div>
      <div>
        <Button success rounded outline onClick={handleClick}>
          <GoCloud></GoCloud>
          abcd
          </Button>
      </div>
      <div>
        <Button danger onClick={handleClick}>
          <GoDatabase></GoDatabase>
          abcd
          </Button>
      </div>
      <div>
        <Button warning onClick={handleClick}>abcd</Button>
      </div>
      <div>
        <Button primary outline onClick={handleClick}>abcd</Button>
      </div>
    </>
  );
}

export default App;
