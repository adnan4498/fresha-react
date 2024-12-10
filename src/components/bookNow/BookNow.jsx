import React from 'react'

const BookNow = (props) => {

    let priceAndDuration = props.priceAndDuration
    let selected = props.selected

    return (
        <div>
            <div className="fixed flex justify-between px-5 mt-10 py-5 bottom-0 w-[100%] left-0 border-t border-gray-400 text-center bg-white">

                {priceAndDuration && <div className=''>
                    <div>
                        <h3 className='text-left font-semibold text-black'>
                            {/* writing code in `${}` will add space between currencySymbol and price */}
                            {priceAndDuration?.price ? (`${currencySymbol} ${priceAndDuration?.price}`) : selected[0]?.price}
                        </h3>
                    </div>

                    <div className='flex gap-2 text-sm'>
                        <div> {selected.length} service{selected.length > 1 && "s"} </div>

                        <div>
                            {priceAndDuration?.duration ? priceAndDuration?.duration : selected[0]?.duration}
                        </div>
                    </div>
                </div>}

                <div onClick={() => navigate(`/dynamic-category/${categoryName}/${cityName}/${salonName}/bookingService`, {
                    state: {
                        selected
                    }
                })} className='bg-black text-white rounded-lg items-center flex px-8'>
                    <p>Continue</p>
                </div>
            </div>
        </div>
    )
}

export default BookNow