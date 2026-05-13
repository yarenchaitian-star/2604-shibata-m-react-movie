import BannerSection from "./component/BannerSection";
import GenreSection from "../../components/GenreSection";
import { LISTPAGE_ARRAY } from "../../libs/const/ListPageArray";
const ListPage = () => {
    return (
        <>
            <BannerSection />
            {LISTPAGE_ARRAY.map((product)=>(
                <GenreSection key={product.id}{...product}/>
            ))}
        </>
    )
}
export default ListPage;