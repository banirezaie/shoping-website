function sliderShow() {
  let time = 3000;
  let i = 0;
  let images = [];
  images[0] = `https://cdn11.bigcommerce.com/s-whipaa/images/stencil/1280x1280/products/1032/4252/Black-Face-Mask_2__67121.1586692680.jpg?c=2`;
  images[1] = `https://cdn11.bigcommerce.com/s-hroh71l/images/stencil/630x630/products/395/6513/1__93607.1586868607.jpg?c=2`;
  images[2] = `https://ae01.alicdn.com/kf/H82662336b1864723b22ae80cd7245e6fF/Black-Mouth-Mask-Breathable-Unisex-dust-proof-Sponge-Face-Masks-Reusable-Anti-Pollution-Shield-Wind-Proof.jpg`;
  images[3] = `https://www.dhresource.com/0x0/f2/albu/g9/M01/96/61/rBVaVV4w52OAPAT2AAGC7Je4pU8280.jpg`;
  //you can add any images you want for your slider
  setInterval(() => {
    document.slide.src = images[i];
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }, time);
}

function onLoad() {
  sliderShow();
}

window.onload = onLoad;
