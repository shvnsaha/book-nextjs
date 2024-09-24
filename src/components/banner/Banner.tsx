import React from 'react';
import styles from "./Banner.module.css";


const Banner = () => {
    return (
        <div className={styles.banner_container}>
            <div className='w-[40%] flex justify-center pt-32'>
                <div>
                    <h1 className='text-7xl font-bold'>Learn & Grow <br /> <span className='font-thin'>Together</span></h1>
                    <button className='btn bg-fuchsia-800 text-white mt-4 hover:bg-fuchsia-950 '>Lets Start ▶</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;