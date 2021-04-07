import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from './../Contexts/ChallengesContext';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://lh3.googleusercontent.com/wjIT9zq_EXhdHfIc64DJrKzSY3vGxvroxLhVUJvuaxUCtgxz4stl55saOsezI-bUq4d6AUw=s85" alt="Lucca Silva"/>
            <div>
                <strong>Lucca Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}