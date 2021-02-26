import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={ styles.profileContainer }>
      <img src="https://github.com/huriellopes.png" alt="Huriel Lopes" title="Huriel Lopes" />
      <div>
        <strong>Huriel Lopes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" title="Level" />
          Level { level }
        </p>
      </div>
    </div>
  );
}
