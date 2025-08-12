const FeatureCardDetails = () => {

    return (
        <div className='mx-auto flex flex-col lg:flex-row justify-between w-full gap-12'>
            {/* Header */}
            <div className='flex flex-col gap-6 flex-1'>
                <div>
                    <div className='w-full overflow-hidden rounded-xl'>
                        <img
                            className='object-cover w-full'
                            src=""
                            alt='header image'
                        />
                    </div>
                </div>
            </div>
            <div className='md:gap-10 flex-1'>
                {/* Plant Info */}

                <hr className='my-6' />
                <div
                    className='
          text-lg font-light text-neutral-500'
                >
                    bkjb
                </div>
                <hr className='my-6' />

                <div
                    className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
                >
                    <div>Seller:Rafun</div>

                    <img
                        className='rounded-full'
                        height='30'
                        width='30'
                        alt='Avatar'
                        referrerPolicy='no-referrer'
                        src=""
                    />
                </div>
                <hr className='my-6' />
                <div>
                    <p
                        className='
                gap-4 
                font-light
                text-neutral-500
              '
                    >
                        Quantity: 0 Units Left Only!
                    </p>
                </div>
                <hr className='my-6' />
                <div className='flex justify-between'>
                    <p className='font-bold text-3xl text-gray-500'>Price: 0$</p>
                    <div>
                        <button>Purches</button>
                    </div>
                </div>
                <hr className='my-6' />
            </div>
        </div>
    );
};

export default FeatureCardDetails;