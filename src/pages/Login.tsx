import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons'
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';
import FCC from '../assets/fcc.svg';

const INTRO_KEY = 'intro-seen'

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(true);
    const [present, dismiss] = useIonLoading();

    useEffect(() => {
        const checkStorage = async () => {
            const seen = await Preferences.get({ key: INTRO_KEY })
            console.log(seen);

            setIntroSeen(seen.value === 'true')


        }

        checkStorage()
    }, []);

    const doLogin = async (event: any) => {
        event.preventDefault();
        await present('Logging in...');
        setTimeout(async () => {
            dismiss();
            router.push('/app', 'root');
        }, 2000);
    };
    const finishIntro = async () => {
        setIntroSeen(true)
        Preferences.set({ key: INTRO_KEY, value: 'true' })
    }

    const seeIntroAgain = () => {
        setIntroSeen(false)
        Preferences.remove({ key: INTRO_KEY })

    }

    return (
        <>
            {!introSeen ? <Intro onFinish={finishIntro} /> :
                <IonPage>
                    <IonHeader>
                        <IonToolbar color={'success'}>
                            <IonTitle>Native App</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding" scrollY={false}>
                        <div className="ion-text-center ion-padding">
                            <img src={FCC} alt="FCC logo" width={'50%'} />
                        </div>
                        <IonCard>
                            <IonCardContent>
                                <form onSubmit={doLogin}>
                                    <IonInput labelPlacement='floating' fill='outline' label='Email' type='email' placeholder='olano@skig.tech'></IonInput>
                                    <IonInput className='ion-margin-top' labelPlacement='floating' fill='outline' label='Passport' type='text' placeholder='olano@skig.tech'></IonInput>
                                    <IonButton className='ion-margin-top' type="submit" expand="block">
                                        Login
                                        <IonIcon icon={logInOutline} slot="end" />
                                    </IonButton>
                                    <IonButton className='ion-margin-top' color={'secondary'} type="button" routerLink='/register' expand="block">
                                        Create Account
                                        <IonIcon icon={personCircleOutline} slot="end" />
                                    </IonButton>
                                    <IonButton onClick={seeIntroAgain} fill='clear' className='ion-margin-top' size='small' color={'medium'} type="button" expand="block">
                                        Watch intro again
                                        <IonIcon icon={personCircleOutline} slot="end" />
                                    </IonButton>
                                </form>

                            </IonCardContent>
                        </IonCard>
                    </IonContent>

                </IonPage>
            }
        </>
    );
};

export default Login;