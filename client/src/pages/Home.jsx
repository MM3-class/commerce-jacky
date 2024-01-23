import Categories from "../components/categories/Categories";
import HeaderSlide from "../components/HeaderSlide";
import MusicX from "../components/MusicX";
import NewArrival from "../components/NewArrival";
import RegularList from "../components/RegularList";
import SideBarItems from "../components/categories/SideBarItems"
import sideBarData from "../data/categories.js";
import BestSelling from "../features/products/bestSelling/BestSelling.jsx";
import ExploreProducts from "../features/products/exploreProducts/ExploreProducts";
import FlashSale from "../features/products/flashSale/FlashSale.jsx";
import Services from "../components/Services";
import ArrowToUp from "../components/ArrowToUp";

const Home = () => {
  return (
    <article>
      <section className='flex gap-5 w-full'>
        <aside className='w-1/8 grow border-r p-4 h-[80vh] overflow-y-scroll no-scrollbar hidden lg:block'>
          <nav>
            <RegularList items={sideBarData} resourceName="sideBar" itemComponent={SideBarItems} />
          </nav>
        </aside>
        <section className='w-9/12 grow'>
          <HeaderSlide />
        </section>
      </section>
      <section className="section my-[30px]">
        <FlashSale />
      </section>
      <section className="section my-[30px]">
        <h1 className='lg:title text-xl font-semibold text-secondary'>Categories</h1>
        <h1 className="lg:sub-title text-xl font-semibold">Browse By Category</h1>
        <Categories />
      </section>
      <section className="section my-[30px] relative">
        <h1 className='lg:title text-xl font-semibold text-secondary'>this month</h1>
        <h1 className="lg:sub-title text-xl font-semibold">Best Selling Products</h1>
        <BestSelling />
      </section>
      <section className="section my-[30px] w-full h-[400px] lg:h-[800px]">
        <MusicX />
      </section>
      <section className="section my-[30px]">
        <h1 className='lg:title text-xl font-semibold text-secondary'>Our Products</h1>
        <h1 className="lg:sub-title text-xl font-semibold">Explore Our Products</h1>
        <ExploreProducts />
      </section>
      <section className="section my-[30px]">
        <h1 className='lg:title text-xl font-semibold text-secondary'>Features</h1>
        <h1 className="lg:sub-title text-xl font-semibold">New Arrival</h1>
        <NewArrival />
      </section>
      <section className="section my-[30px]">
        <Services />
      </section>
      <aside className="relative"><ArrowToUp /></aside>
    </article>
  )
}

export default Home