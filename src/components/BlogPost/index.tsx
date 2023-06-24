import React from 'react'
import { IMyCardProps } from './interface'
import { formateDate } from '../../utils/date'
export function BlogPostCard({
    className,
    headerTitle = 'CLOUD AND SERVER',
    footer = 'Article',
    content
}: IMyCardProps) {
    const {
        date,
        link,
        featured_media,
        _embedded,
        title
    } = content || {}
    const {
        author = []
    } = _embedded || {}
    return <div className={`p-card--blog ${className || ''}`}>
        {/**card header */}
        <div className='p-card__header'>
            <h5 className='p-muted-heading'>{headerTitle}</h5>
        </div>
        {/**card content */}
        <div className='p-card__content'>
            <a href={link}>
                <img className="p-card__image" src={featured_media} alt='media_image' />
                <h3 className='p-heading--3'>{title?.rendered || ''}</h3>
            </a>
            {/**author name joined by ',' */}
            <em >
                By{' '}
                {
                    author?.map((auth, index) => {
                        return <a href={auth?.link || '#'} key={index}>{auth?.name}{index !== author?.length - 1 ? ',' : ''}</a>
                    })
                }
                {' '}on {formateDate(date || '')}
            </em>
        </div>
        {/**card footer */}
        <div className='p-card_footer'>
            <p>{footer}</p>
        </div>
    </div>
}
export type { IContent } from './interface'