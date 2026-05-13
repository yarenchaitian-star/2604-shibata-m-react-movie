import BannerSection from "./component/BannerSection";
import GenreSection from "../../components/GenreSection";
const ListPage = () => {
    return (
        <>
            <BannerSection />
            <GenreSection genreName="アクション" genreId={1} isLarge={true} />
            <GenreSection genreName="アドベンチャー" genreId={10} />
            <GenreSection genreName="コメディー" genreId={22} className="pb-15"/>
        </>
    )
}
export default ListPage;