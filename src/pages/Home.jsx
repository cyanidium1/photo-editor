import React, { useState } from 'react';

import * as htmlToImage from 'html-to-image';

import img from '../images/logo.png'

import bath from '../images/bath.png'
import bed from '../images/bed.png'
import euro from '../images/euro.png'
import loc from '../images/loc.png'
import square from '../images/square.png'

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import TextField from '@mui/material/TextField';

function App() {
    const [isOnSale, setIsOnSale] = useState(false)

    const [sq, setSq] = useState('');
    const [br, setbr] = useState('');
    const [bd, setbd] = useState('');

    const [location, setlocation] = useState('');
    const [price, setprice] = useState('');


    const [imageUrl, setImageUrl] = useState(null);

    const handleUploadImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImageUrl(reader.result);
        };

        reader.readAsDataURL(file);
    };


    const handleDownloadImage = () => {
        htmlToImage.toJpeg(document.getElementById('image-container'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            });
    };

    const handleSwitchChange = (event) => {
        setIsOnSale(event.target.checked);
    };

    const handleSqChange = (event) => {
        setSq(event.target.value);
    };

    const handleBrChange = (event) => {
        setbr(event.target.value);
    };

    const handleBdChange = (event) => {
        setbd(event.target.value);
    };

    const handleLocationChange = (event) => {
        setlocation(event.target.value);
    };

    const handlePriceChange = (event) => {
        setprice(event.target.value);
    };

    return (
        <div className="App flex flex-col items-center justify-center bg-blue-200 p-2 w-[800px] mx-auto">


            <div className='flex items-center'>
                <input type="file" accept="image/*" onChange={handleUploadImage} />
                <button onClick={handleDownloadImage} className="bg-blue-500 text-white px-4 py-2 rounded-md">Скачать</button>
            </div>

            <div className='flex space-x-2 mt-2'>
                <TextField id="sq" label="Площадь" variant="outlined" value={sq} onChange={handleSqChange} />
                <TextField id="br" label="Ванных" variant="outlined" value={br} onChange={handleBrChange} />
                <TextField id="bd" label="Спален" variant="outlined" value={bd} onChange={handleBdChange} />
            </div>

            <div className='flex space-x-2 mt-2 justify-between'>
                <TextField id="location" label="Адрес" variant="outlined" value={location} onChange={handleLocationChange} />
                <TextField id="price" label="Цена" variant="outlined" value={price} onChange={handlePriceChange} />
                <FormControlLabel control={<Switch checked={isOnSale} onChange={handleSwitchChange} />} label="Тип: Аренда/Продажа" />
            </div>

            <div id="image-container" className="w-fit mt-2 relative">
                {imageUrl && <img src={imageUrl} alt="Изображение" className="max-w-full max-h-full" />}
                {/* верхний */}
                <div className='absolute top-0 left-0 w-full bg-white h-32 flex justify-center items-center opacity-80'>
                    <img src={img} alt="bstrust_logo" />
                </div>
                {/* сейл */}
                <div className='opacity-80 font-prata absolute top-44 right-12 rounded-full bg-[#152544] w-40 h-40 flex flex-col justify-center items-center text-white'>
                    <p className='text-3xl border-b-2 mb-1'>{isOnSale ? 'SALE' : 'RENT'} </p>

                    <p>{isOnSale ? 'ПРОДАЖА' : 'АРЕНДА'} </p>
                </div>
                {/* нижний */}
                <div className='absolute bottom-0 left-0 w-full bg-[#152544] h-32 flex flex-col justify-around opacity-80'>
                    <div className='flex justify-around'>
                        <div className='flex items-center'>
                            <img className='w-8 h-8 mr-3 mb-1' src={square} alt="sq" />
                            <p className='text-white text-3xl'>
                                {sq} м²
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-8 h-8 mr-4' src={bed} alt="sq" />
                            <p className='text-white text-3xl'>
                                {bd}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-8 h-8 mr-4' src={bath} alt="sq" />
                            <p className='text-white text-3xl'>
                                {br}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex items-center'>
                            <img className='w-8 h-8 mr-2' src={loc} alt="sq" />
                            <p className='text-white text-2xl'>
                                {location}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-8 h-8 mr-2 mb-1' src={euro} alt="sq" />
                            <p className='text-white text-2xl'>
                                {price}
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{text}</div> */}
            </div>
        </div>
    );
}

export default App;