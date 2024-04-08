import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

import Intro1Svg from '../assets/intro/1.svg';
import Intro2Svg from '../assets/intro/2.svg';
import Intro3Svg from '../assets/intro/3.svg';

interface Containerprops {
    onFinish: () => void;
}

const Intro: React.FC<Containerprops> = () => {

    return (
        <Swiper>
            <SwiperSlide>
                <img src={Intro1Svg} alt="Intro 1" />
                <IonText>
                    <h3>Build awesome apps with Ionic UI Components!</h3>
                </IonText>
            </SwiperSlide>
            <SwiperSlide>safdsafdsa</SwiperSlide>
        </Swiper>
    );
};

export default Intro;  