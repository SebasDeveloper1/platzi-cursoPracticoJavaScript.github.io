const coupons = [{ name: "BASIC", value: 10 }, { name: "EXPERT", value: 30 }, { name: "EXPERT_PLUS", value: 50 },];

const discount = (value, discount) => { return (value * (100 - discount) / 100); };

function validation(priceValue, discountValue, userCoupon) {
    const couponValid = function (coupon) {
        return coupon.name === userCoupon;
    }

    const finalCoupon = coupons.find(couponValid);

    if (!finalCoupon) {
        const finalPriceWithoutDiscount = discount(priceValue, discountValue);
        printResult(finalPriceWithoutDiscount);
    } else {
        const discountCoupon = finalCoupon.value;
        const finalPriceWithoutDiscount = discount(priceValue, discountValue);
        const finalPriceWithDiscount = discount(finalPriceWithoutDiscount, discountCoupon);
        printResult(finalPriceWithDiscount);
    }
}

function calculateDiscount() {
    const inputValue = document.getElementById("inputValue");
    const inputDiscount = document.getElementById("inputDiscount");
    const inputCoupon = document.getElementById("inputCoupon");
    const priceValue = Math.floor(inputValue.value);
    const discountValue = Math.floor(inputDiscount.value);
    const userCoupon = inputCoupon.value;
    validation(priceValue, discountValue, userCoupon);
}

function printResult(finalPrice) {
    const result = document.getElementById("discountResult");
    result.innerHTML = `$ ${finalPrice}`;
}