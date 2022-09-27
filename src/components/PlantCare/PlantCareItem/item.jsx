import React from 'react'

function PlantCareItem({lessonNum, videosrc, descript}) {
    return (
        <li className="plantcare__item">
            <h1 className="plantcare__title">Lesson {lessonNum}</h1>
            <div className="plantcare__video">
                <iframe
                    width={'100%'}
                    height={'100%'}
                    src={videosrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <p className="plantcare__text">{descript}</p>
        </li>
    )
}

export default PlantCareItem