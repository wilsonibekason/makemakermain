import React from "react";
import styles from "../../../style";
import { Link } from "react-router-dom";
import { urlFor } from "../../../client";
import { useStateShopContext } from "../../../state/OnShopContext";
import { AiOutlineEye } from "react-icons/ai";
const ProductCard = () => {
  const { products, onAdd, productQuantity } = useStateShopContext();
  return (
    <>
      {products &&
        products.map((product, index) => {
          const { title, defaultProductVariant, tags, slug } = product;
          const { images } = defaultProductVariant;
          const image = images[0];

          return (
            <div class="w-[350px] h-[450px] bg-transparent cursor-pointer group perspective ">
              <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <Link to={`/product/${slug?.current}`}>
                  <div
                    class="absolute backface-hidden border-2 w-full h-full bg-no-repeat bg-cover rounded-lg shadow opacity-80 backdrop-opacity-10"
                    style={{
                      // backgroundImage: `url("https://cdn.sanity.io/images/zyte9ttg/production/5f50b7b7de7fa240e23fbe86a82afa9c0f75c4af-600x800.jpg")`,
                      backgroundImage: `url("${urlFor(image)}")`,
                    }}
                  />
                </Link>
                <div className="absolute flex flex-col rounded-lg p-4 items-center justify-center w-full h-full ">
                  <h1
                    className={`font-raleway font-bold text-2xl text-white capitalize`}
                  >
                    {tags}
                  </h1>
                </div>
                <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-lg ">
                  <div className="flex flex-col blue__bg h-full items-center justify-center py-auto px-auto text-center ">
                    <div className="ease-linear transition-all absolute -top-20 delay-500 duration-1000 group-hover:top-20">
                      <h1
                        className={`font-poppins font-semibold text-gray-600 capitalise  text-2xl`}
                      >
                        {title}
                      </h1>
                      <h1
                        className={`font-poppins font-semibold text-gray-600 capitalise  text-2xl`}
                      >
                        {`$${defaultProductVariant?.price}`}
                      </h1>
                      <h4
                        className={`font-poppins font-medium text-white lowercase text-md  line-clamp-3 px-3 `}
                      >
                        {defaultProductVariant?.description
                          ? defaultProductVariant?.description
                          : "this is a portion for description"}
                      </h4>
                    </div>
                    <button
                      type="button"
                      className={`my-3 py-3 px-6 bg-blue-200 font-medium font-poppins text-[18px] text-primary outline-none rounded-[10px] active:bg-blue-400 shadow hover:shadow-lg focus:outline-none ease-linear transition-all  capitalize  absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 `}
                      onClick={() => onAdd(product, productQuantity)}

                      // bg-blue-gradient
                    >
                      add to cart
                    </button>
                  </div>
                  {/* <div class="text-center flex flex-col items-center justify-center h-full blue__bg px-2 py-auto px-auto">

              <div className="flex flex-row justify-around py-auto">
                <div className="bg-gray-400 rounded  w-20 h-4 flex justify-center items-center">
                  stock ready
                </div>
                <div className="bg-gray-400 rounded  w-20 h-4">stock ready</div>
              </div>
              <p className="font-poppins font-medium text-lg text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
            </div> */}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;
