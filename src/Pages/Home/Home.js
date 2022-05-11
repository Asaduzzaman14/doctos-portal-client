import React from 'react';
import Banner from './Banner';
import ContuctUs from './ContuctUs';
import Footer from '../Shared/Footer';
import HomeAppoinment from './HomeAppoinment';
import Info from './Info';
import Services from './Services';
import Testmonuals from './Testmonuals';

const Home = () => {
    return (
        <>
            <div className='px-12'>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <HomeAppoinment></HomeAppoinment>
                <Testmonuals></Testmonuals>
            </div>
            <ContuctUs></ContuctUs>
            <Footer></Footer>
        </>
    );
};

export default Home;