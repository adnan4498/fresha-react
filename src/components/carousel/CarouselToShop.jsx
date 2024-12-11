import { StarFilled } from "@ant-design/icons";
import { Card } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { carouselResponsiveCode } from "../../ownModules/responsive/responsive";

const CarouselToShop = ({countrySalons}) => {

  let partialVisibilityGutter = 70
  const responsive = carouselResponsiveCode(partialVisibilityGutter)

  return (
    <div className=''>
      <Carousel partialVisible={true} responsive={responsive}>
        {countrySalons.map((item, index) => (
          <div key={index} className='overflow-ellipsis'>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={item.img1} className='h-36 object-cover' />}
            > <Link
              to={`/dynamic-category/${item.category}/${item.city}/${item.name}`}
            >
                <div>
                  <p className='text-lg truncate'>{item.name}</p>
                </div>
                <div className='flex gap-[6px]'>
                  <div>
                    <span className='font-bold '>{item.rating} <StarFilled /></span>
                  </div>
                  <div>
                    <span className='text-[#616769] font-semibold'>({item.reviews})</span>
                  </div>
                </div>
                <div>
                  <span className='line-clamp-1'>{item.address}</span>
                </div>
                <div className='border border-gray-400 rounded-full w-fit text-center mt-2'>
                  <span className='text-sm font-medium px-2'>{item.speciality}</span>
                </div>
              </Link>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselToShop