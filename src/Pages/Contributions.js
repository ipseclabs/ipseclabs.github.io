
const products = [
    {
      id: 1,
      name: 'Flutter Reverse Engineering Tutorial',
      href: 'https://www.youtube.com/watch?v=mImWBR5cKU4',
      imageSrc: 'https://i9.ytimg.com/vi/mImWBR5cKU4/mqdefault.jpg?v=61285fa1&sqp=CISmkaIG&rs=AOn4CLCdQa692dFBYH8KsRr0-ZoQ5bvb_g',
      imageAlt: "Flutter rev",
       price: 'Abhinivesh',
      color: 'App Sec',
      
    },
    {
        id: 2,
        name: 'React Native Reverse Engineering Tutorial',
        href: 'https://www.youtube.com/watch?v=iQF25diTuJE',
        imageSrc: 'https://i9.ytimg.com/vi/iQF25diTuJE/mqdefault.jpg?v=6127102b&sqp=CISmkaIG&rs=AOn4CLDWv0PAz6FysWfHrx-l3dS4s2I6Tw',
        imageAlt: "react rev",
        price: 'Abhinivesh',
        color: 'App Sec',
        
      },
      {
        id: 3,
        name: 'SSL Pinning Bypass Flutter',
        href: 'https://www.youtube.com/watch?v=ycKl7bfsozA',
        imageSrc: 'https://i9.ytimg.com/vi/ycKl7bfsozA/mqdefault.jpg?v=62ff5101&sqp=CLCokaIG&rs=AOn4CLCGRsAeUiPUmbGix77DRKhlbFE7MQ',
        imageAlt: "bof",
        price: 'Abhinivesh',
        color: 'App Sec',
        
      },
    // More products...
  ]
  
  export default function Contributions() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Our Contributions</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  