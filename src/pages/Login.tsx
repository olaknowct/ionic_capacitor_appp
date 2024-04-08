import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons'
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

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
                    <IonContent scrollY={false}>
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