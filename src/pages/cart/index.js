import Image from "next/image";
import Layout from "@/components/Main/Layout";
import useShoppingStore from "@/contex/shoppingStore";
import { useRouter } from "next/router";
import EditShoppingValues from "@/components/cart/editShoppingValues";
const CartPage = () => {
  const { cart } = useShoppingStore();
  const router = useRouter();

  const removeItemHandler = (item) => {
    // اضافه کردن کد برای حذف آیتم از سبد خرید
  };

  return (
    <>
      <Layout title="Shopping Cart">
        <div className="mt-28 mx-4 mb-10 rtl">
          <h1 className="mb-4 text-xl">سبد خرید</h1>

          {cart.length === 0 ? (
            <div>سبد شما خالی می‌باشد</div>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.slug}>
                  <div className="flex mb-4 border-b">
                    <div className="flex item-center mb-2">
                      <Image
                        src={item.image}
                        width={50}
                        height={50}
                        alt={`تصویر ${item.title}`}
                      />
                      <span className="mr-2">{item.title}</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <span className="font-bold">تعداد: </span>
                        {item.quantity}
                      </div>
                      <div className="mb-2">
                        <span className="font-bold">قیمت: </span>
                        {item.price} تومان
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mb-4 border-b">
                <div className="flex justify-between">
                  <div className="font-bold">جمع فاکتور:</div>
                  <div>
                    {cart.reduce(
                      (acc, cur) => acc + cur.quantity * cur.price,
                      0
                    )}{" "}
                    تومان
                  </div>
                </div>
              </div>
<EditShoppingValues/>
              <button
                className="rounded-xl bg-gray-700 text-white px-4 py-2"
                onClick={() => router.push("login?redirect=/shipping")}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default CartPage;
