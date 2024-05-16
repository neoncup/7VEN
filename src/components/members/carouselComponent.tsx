import React, { useEffect, useRef } from 'react'
import { Carousel } from './styled'
import cover_01 from '../../assets/Cover_01.jpg'
import cover_02 from '../../assets/Cover_02.jpg'
import cover_03 from '../../assets/Cover_03.jpg'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'


const CarouselComponent: React.FC = () => {

    const prevRef = useRef <HTMLButtonElement> (null);
    const nextRef = useRef <HTMLButtonElement> (null);

    const carouselRef = useRef<HTMLDivElement>(null);
    const membersMemberRef = useRef<HTMLDivElement>(null);
    const thumbnailRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const prevButton = prevRef.current;
        const nextButton = nextRef.current;

        if(prevButton && nextButton) {
            prevButton.addEventListener('click', () => showSlider('prev'));
            nextButton.addEventListener('click', () => showSlider('next'));
        }
    }, []);

    let timeRunning = 3000;
    let runTimeOut: number | undefined;

    const showSlider = (type: string) => {
        let itemSlider = document.querySelectorAll('.carousel .members .member');
        let itemThumbail = document.querySelectorAll('.carousel .thumbnail .item');

        if(type === 'mext') {
            if(membersMemberRef.current && thumbnailRef.current) {
                membersMemberRef.current.appendChild(itemSlider[0])
                thumbnailRef.current.appendChild(itemThumbail[0]);
            }
            if(carouselRef.current) {carouselRef.current.classList.add('next');}
        }
        else {
            let positionLastItem = itemSlider.length -1;
            if(membersMemberRef.current && thumbnailRef.current){
                membersMemberRef.current.prepend(itemSlider[positionLastItem]);
                thumbnailRef.current.prepend(itemThumbail[positionLastItem]);
            }
            if(carouselRef.current) {carouselRef.current.classList.add('prev');}
        }

        clearInterval(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselRef.current?.classList.remove('prev');
            carouselRef.current?.classList.remove('next');
        }, timeRunning) as unknown as number;
    }
    
    return(
        <Carousel className = "carousel" ref = { carouselRef }>
            <div className = "members" ref = { membersMemberRef }>
                <div className = "member">
                    <img src = { cover_01 }/>
                    <div className = "contain">
                        <div className = "artist">Sombra</div>
                        <div className = "group">6VEN</div>
                        <div className = "about">Artist / Compositor</div>
                        <div className = "des"></div>

                        <div className = "buttons">
                            <button>see more</button>
                            <button>subcribe</button>
                        </div>
                    </div>
                </div>
                <div className = "member">
                    <img src = { cover_02 } />
                    <div className = "contain">
                        <div className = "artist">OneDayDie</div>
                        <div className = "group">6VEN</div>
                        <div className = "about">Artist / Compositor / Productor</div>
                        <div className = "des"></div>

                        <div className = "buttons">
                            <button>see more</button>
                            <button>subcribe</button>
                        </div>
                    </div>
                </div>
                <div className = "member">
                    <img src = { cover_03 } />
                    <div className = "contain">
                        <div className = "artist">Emeitter</div>
                        <div className = "group">6VEN</div>
                        <div className = "about">Artist / Programador</div>
                        <div className = "des"></div>

                        <div className = "buttons">
                            <button>see more</button>
                            <button>subcribe</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className = "thumbnail" ref = { thumbnailRef }>
                <div className = "item">
                    <img src = {cover_01} />
                    <div className = "content">
                        <div className = "title">Slide name</div>
                        <div className = "des">description</div>
                    </div>
                </div>
                <div className = "item">
                    <img src = {cover_02} />
                    <div className = "content">
                        <div className = "title">Slide name</div>
                        <div className = "des">description</div>
                    </div>
                </div>
                <div className = "item">
                    <img src = {cover_03} />
                    <div className = "content">
                        <div className = "title">Slide name</div>
                        <div className = "des">description</div>
                    </div>
                </div>
            </div>

            <div className = "arrows">
                <button id = "prev" ref = { prevRef }><BsArrowLeft /></button>
                <button id = "next" ref = { nextRef }><BsArrowRight /></button>
            </div>
            <div className = "time"></div>
        </Carousel>
    )
}

export default CarouselComponent;
