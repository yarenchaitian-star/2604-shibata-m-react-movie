export interface DetailViewProps {
    anime: {
        images:{
            jpg:{
                large_image_url:string
            }
        }
        title:string;
        title_japanese:string;
        aired:{
            from:string;
        }
        synopsis:string;
        url:string;
        genres:[];
    }
    
}

export interface GenreSectionProps {
    genreId: number;
    genreName: string;
    isLarge?: boolean;
    className?: string;
}

export interface GenreSectionTypes{
    mal_id:number;
    images:{
        jpg:{
            large_image_url:string;
        }
    };
    title:string
}

export interface SynopsisProps {
    text: string 
    className?:string;
    title?:boolean;
}

export interface TitleProps {
    title: string;
    className?: string;
}

export interface DetailPageLinkProps {
    url: string ;
}

export interface DetailPictureProps {
    imageUrl: string;
    title: string;
}

export interface ReleasedateProps {
    date: string;
}

export interface SignUpFormInputs {
    username: string;
    password: string;
    rePassword: string;
    email: string;
}

export interface GenreItem {
    mal_id: number;
    name: string;
    type: string;
    url: string;
}

export interface GenreListType{
    mal_id:number;
    name:string
}

export interface LayoutProps {
    children: React.ReactNode;
}