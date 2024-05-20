import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        <div className='featured-item bg-fixed bg-slate-500 bg-opacity-6 0  text-white pt-8 my-20'>
            <SectionTitle
                subHeading={"check it out"}
                heading={"Featured Item"}></SectionTitle>
            <div className='md:flex  justify-center items-center pb-20 pt-12 px-36 md:gap-10'>
                <div>
                    <img src={featuredImg} alt='' />
                </div>
                <div>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can I get some</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cum, temporibus aut deserunt labore, ducimus
                        ratione quibusdam fugiat culpa ipsa reprehenderit
                        voluptatum facilis eaque, ex nam dolores ad. Cum
                        expedita quidem obcaecati corporis laudantium ipsa quod
                        fugiat. Itaque corporis, expedita accusamus, dicta
                        excepturi voluptatem, dolorem omnis inventore labore
                        quis praesentium sit.
                    </p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
