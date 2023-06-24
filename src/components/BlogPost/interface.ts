export interface IContent {
    // post date
    date: string
    //content click link url
    link: string
    //content image url
    featured_media: string
    //content title 
    title: {
        rendered: string
    }
    //content auth include name and link
    _embedded?: {
        author?: Array<{
            name?: string
            link?: string
        }>
    }
}
export interface IMyCardProps {
    className?: string
    // title for header
    headerTitle?: string
    // text for footer
    footer?: string
    //card content
    content: IContent
}