import { useState } from 'react';
import styles from './App.module.css';
import poweredImages from './assets/powered.png';
import { GridItem } from './components/GridItem';

import { levels, calculateImc } from './helpers/imc';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
    } else {
      alert('Digite todos os campos!');
    }
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImages} alt='' width={150}></img>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúude para calcular o peso ideal de cada
            pessoa
          </p>
          <input
            type='number'
            placeholder='Digite a sua altura. Ex: 1.5 (em Metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
          <input
            type='number'
            placeholder='Digite a sua peso. Ex: 75.3 (em Kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, index) => (
              <GridItem key={index} item={item}></GridItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
