import deliveryIcon from '../assets/icon-delivery.png';
import customerServiceIcon from '../assets/Icon-Customer service.png';
import secureIcon from '../assets/Icon-secure.png'

const Services = () => {
    return (
        <div className="flex items-center justify-evenly lg:flex-row flex-col space-y-2">
            <div className=" text-center space-y-4">
                <img className="bg-black p-1 m-auto rounded-full" src={deliveryIcon} alt="delivery" />
                <h3 className="uppercase font-semibold lg:font-bold lg:text-xl">Free and fast delivery</h3>
                <p className="text-sm">Free delivery for all orders over $140</p>
            </div>
            <div className=" text-center space-y-4">
                <img className="bg-black p-1 m-auto rounded-full" src={customerServiceIcon} alt="customer service" />
                <h3 className="uppercase font-semibold lg:font-bold lg:text-xl">24/7 CUSTOMER SERVICE</h3>
                <p className="text-sm">Friendly 24/7 customer support</p>
            </div>
            <div className=" text-center space-y-4">
                <img className="bg-black p-1 m-auto rounded-full" src={secureIcon} alt="secure" />
                <h3 className="uppercase font-semibold lg:font-bold lg:text-xl">MONEY BACK GUARANTEE</h3>
                <p className="text-sm">We return money within 30 days</p>
            </div>
        </div>
    )
}

export default Services