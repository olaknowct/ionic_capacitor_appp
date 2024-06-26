import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter()
    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister');
        router.goBack()
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <IonGrid fixed>
                    <IonRow className='ion-justify-content-center' >
                        <IonCol size='12' sizeMd="8" sizeLg="6" sizeXl="4">
                            <IonCard>
                                <IonCardContent>
                                    <form onSubmit={doRegister}>
                                        <IonInput labelPlacement='floating' fill='outline' label='Email' type='email' placeholder='olano@skig.tech'></IonInput>
                                        <IonInput className='ion-margin-top' labelPlacement='floating' fill='outline' label='Passport' type='text' placeholder='olano@skig.tech'></IonInput>
                                    </form>
                                    <IonButton className='ion-margin-top' type="submit" expand="block">
                                        Create Account
                                        <IonIcon icon={checkmarkDoneCircleOutline} slot="end" />
                                    </IonButton>

                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>

        </IonPage>
    );
};

export default Register;