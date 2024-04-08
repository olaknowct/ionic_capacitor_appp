import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React, { useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons'
import Intro from '../components/Intro';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(false);
    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('dologin');
        // router.goBack()
    }

    const finishIntro = async () => {
        console.log("fin");
        setIntroSeen(true)

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
                                </form>
                                <IonButton className='ion-margin-top' type="submit" expand="block">
                                    Login
                                    <IonIcon icon={logInOutline} slot="end" />
                                </IonButton>
                                <IonButton className='ion-margin-top' color={'secondary'} type="button" routerLink='/register' expand="block">
                                    Create Account
                                    <IonIcon icon={personCircleOutline} slot="end" />
                                </IonButton>
                            </IonCardContent>
                        </IonCard>
                    </IonContent>

                </IonPage>
            }
        </>
    );
};

export default Login;