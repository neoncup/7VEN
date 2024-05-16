import styled from 'styled-components'



export const Carousel = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin-top: -50px;
    position: relative;

    .members {
        .member {
            position: absolute;
            inset: 0 0 0 0;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .contain {
                position: absolute;
                top: 20%;
                left: 50%;
                color: #FFF;
                width: 1140px;
                max-width: 80%;
                padding-right: 30%;
                transform: translateX(-50%);
                text-shadow: 0 5px 10px #0004;
                box-sizing: border-box;

                .artist {
                    font-size: 1.5em;
                    font-weight: bold;
                    letter-spacing: 10px;
                    text-transform: uppercase;
                    font-family: var(--ff-alt);
                }
                .group, .about {
                    font-size: 2.5em;
                    font-weight: bold;
                    line-height: 1.3em;
                }
                .group { 
                    color: #F00; 
                }
                .buttons {
                    display: grid;
                    grid-template-columns: repeat(2, 130px);
                    grid-template-rows: 40px;
                    margin-top: 20px;
                    gap: 5px;

                    button {
                        border: none;
                        background-color: #FFF;
                        letter-spacing: 3px;
                        font-family: var(--ff-def);
                        font-weight: 500;

                        &:nth-child(2) {
                            background-color: transparent;
                            color: #EEE;
                            border: 1px solid #EEE;
                        }
                    }
                }
            }
    
            &:nth-child(1) { z-index: 1; }
            &:nth-child(1) .artist,
            &:nth-child(1) .group,
            &:nth-child(1) .about,
            &:nth-child(1) .des,
            &:nth-child(1) .buttons {
                transform: translateY(50px);
                filter: blur(20px);
                opacity: 0;
                animation: showContain 0.5s 1s linear 1 forwards;
            }
            @keyframes showContain {
                to {
                    opacity: 1;
                    filter: blur(0);
                    transform: translateY(0);
                }
            }
            &:nth-child(1) .group { animation-delay: 1.2s; }
            &:nth-child(1) .about { animation-delay: 1.4s; }
            &:nth-child(1) .des { animation-delay: 1.6s; }
            &:nth-child(1) .buttons { animation-delay: 1.8s; }
        }
    }

    .thumbnail {
        position: absolute;
        bottom: 50px;
        left: 50%;
        width: max-content;

        z-index: 100;
        display: flex;
        gap: 20px;

        .item {
            width: 150px;
            height: 220px;
            flex-shrink: 0;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
                object-fit: cover
            }

            .content {
                position: absolute;
                bottom: 10px;
                right: 10px;
                left: 10px;

                .title {
                    font-weight: bold;
                }
            }
        }
    }

    .arrows {
        position: absolute;
        top: 80%;
        right: 52%;
        width: 300px;
        max-width: 30%;
        display: flex;
        align-items: center;
        gap: 10px;

        button {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #EEE4;
            border: none;
            font-size: large;
            transition: .5s;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;

            &:hover {
                background: #EEE;
                color:#555;
            }
        }
    }


    &.next .members .member:nth-child(1) img {
        position: absolute;
        width: 150px;
        height: 220px;
        left: 50%;
        bottom: 50px;
        border-radius: 10px;
        animation: showImage 0.5s linear 1 forwards;
    }
    @keyframes showImage {
        to {
            width: 100%;
            height: 100%;
            left: 0;
            bottom: 0;
            border-radius: 0;
        }
    }
    &.next .thumbnail .item:nth-last-child(1){
        width: 0;
        overflow: hidden;
        animation: showThumbnail .5s linear 1 forwards;
    }
    @keyframes showThumbnail {
        to {
            width: 150px;
        }
    }
    &.next .thumbnail {
        transform: translateX(150px);
        animation: transformThumbnail .5s linear 1 forwards;
    }
    @keyframes transformThumbnail {
        to {
            transform: translateX(0);
        }
    }

    &.prev .members .member:nth-child(2) { z-index: 2; }
    &.prev .members .member:nth-child(2) img { 
        position: absolute;
        bottom: 0;
        left: 0;
        animation: outImage 0.5s linear 1 forwards;
    }
    @keyframes outImage {
        to {
            width: 150px;
            height: 220px;
            border-radius: 10px;
            bottom: 50px;
            left: 50%;
        }
    }
    &.prev .thumbnail .item:nth-child(1) {
        width: 0;
        opacity: 0;
        overflow: hidden;
        animation: showThumbnail 0.5s linear 1 forwards;
    }    
    &.prev .members .member:nth-child(2) .artist,
    &.prev .members .member:nth-child(2) .group,
    &.prev .members .member:nth-child(2) .about,
    &.prev .members .member:nth-child(2) .des,
    &.prev .members .member:nth-child(2) .buttons {
        animation: outContain 1.5s linear 1 forwards;
    }
    @keyframes outContain {
        to {
            transform: translateY(-150px);
            filter: blur(20px);
            opacity: 0;
        }
    }
    &.next .arrows button,
    &.prev .arrows button {
        pointer-events: none;
    }

    .time {
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: #F00;
        z-index: 100;
    }
    &.next .time,
    &.prev .time {
        width: 100%;
        animation: timeRunning 2s linear 1 forwards;
    }
    @keyframes timeRunning {
        to { width: 0; }   
    }

    @media screen and (max-width: 678px) {
        .members .member .contain {
            padding-right: 0;

            .group {
                font-size: 30px;
            }
        }
    }
`;
