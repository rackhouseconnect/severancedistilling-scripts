console.log('Buy button script by RackHouse Connect.');
  // <div id="product-component-1700241468539" class="vs-buy-button vs-buy-button-one"></div>
  // <span data-rhbuybutton="sev-no2"></span>

  (function () {
    var rhBuyButtonStyles = document.createElement("style");
    rhBuyButtonStyles.id = 'rhBuyButtonStyles';
    rhBuyButtonStyles.innerHTML = `
      body span[data-rhbuybutton] {
        display: block;
        margin: 0 auto 18px !important;
      }
    `;
    document.head.appendChild(rhBuyButtonStyles);

    var productOptions = {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "title": {
            "font-family": "Raleway, sans-serif",
            "font-weight": "bold",
            "color": "#ffffff"
          },
          "button": {
            "font-family": "Raleway, sans-serif",
            "font-size": "16px",
            "font-weight": "bold",
            "text-transform": "uppercase",
            "min-width": "197px",
            "padding-top": "17px",
            "padding-bottom": "17px",
            "white-space": "nowrap",
            "color": "#eeeeee",
            "background-color": "#000000",
            ":hover": {
              "color": "#ffffff",
              "background-color": "#000000"
            },
            ":focus": {
              "color": "#ffffff",
              "background-color": "#000000"
            },
            "border-radius": "0px",
            "padding-left": "30px",
            "padding-right": "30px"
          },
          "quantityInput": {
            "font-size": "6",
            "padding-top": "17px",
            "padding-bottom": "17px"
          },
          "price": {
            "font-family": "Raleway, sans-serif",
            "color": "#ffffff"
          },
          "compareAt": {
            "font-family": "Raleway, sans-serif",
            "color": "#ffffff"
          },
          "unitPrice": {
            "font-family": "Raleway, sans-serif",
            "color": "#ffffff"
          },
          "description": {
            "font-family": "Open Sans, sans-serif"
          }
        },
        "contents": {
          "img": false,
          "title": false,
          "price": false,
          "options": false
        },
        "text": {
          "button": "Add to cart"
        },
        "googleFonts": [
          "Open Sans"
        ]
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-family": "Raleway, sans-serif",
            "font-weight": "bold",
            "font-size": "18px",
            "text-transform": "uppercase",
            "padding-top": "17px",
            "padding-bottom": "17px",
            "color": "#eeeeee",
            "background-color": "#000000",
            "border": "4px solid #000000",
            ":hover": {
              "color": "#ffffff",
              "background-color": "#000000"
            },
            ":focus": {
              "color": "#ffffff",
              "background-color": "#000000"
            },
            "border-radius": "0px",
            "padding-left": "48px",
            "padding-right": "48px"
          },
          "quantityInput": {
            "font-size": "18px",
            "padding-top": "17px",
            "padding-bottom": "17px"
          },
          "title": {
            "font-family": "Raleway, sans-serif",
            "font-weight": "bold",
            "font-size": "26px",
            "color": "#4c4c4c"
          },
          "price": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal",
            "font-size": "18px",
            "color": "#4c4c4c"
          },
          "compareAt": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            "color": "#4c4c4c"
          },
          "unitPrice": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            "color": "#4c4c4c"
          },
          "description": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal",
            "font-size": "14px",
            "color": "#4c4c4c"
          }
        },
        "googleFonts": [
          "Open Sans"
        ],
        "text": {
          "button": "BUY NOW"
        }
      },
      "option": {
        "styles": {
          "label": {
            "font-family": "Open Sans, sans-serif"
          },
          "select": {
            "font-family": "Open Sans, sans-serif"
          }
        },
        "googleFonts": [
          "Open Sans"
        ]
      },
      "cart": {
        "styles": {
          "button": {
            "font-family": "Raleway, sans-serif",
            "font-weight": "bold",
            "font-size": "18px",
            "padding-top": "17px",
            "padding-bottom": "17px",
            "color": "#eeeeee",
            "background-color": "#000000",
            ":hover": {
              "color": "#ffffff",
              "background-color": "#000000"
            },
            ":focus": {
              "color": "#ffffff",
              "background-color": "#000000"
            },
            "border-radius": "0px"
          },
          "title": {
            "color": "#000000"
          },
          "header": {
            "color": "#000000"
          },
          "lineItems": {
            "color": "#000000"
          },
          "subtotalText": {
            "color": "#000000"
          },
          "subtotal": {
            "color": "#000000"
          },
          "notice": {
            "color": "#000000"
          },
          "currency": {
            "color": "#000000"
          },
          "close": {
            "color": "#000000",
            ":hover": {
              "color": "#000000"
            }
          },
          "empty": {
            "color": "#000000"
          },
          "noteDescription": {
            "color": "#000000"
          },
          "discountText": {
            "color": "#000000"
          },
          "discountIcon": {
            "fill": "#000000"
          },
          "discountAmount": {
            "color": "#000000"
          }
        },
        "text": {
          "title": "Your Cart",
          "total": "TOTAL",
          "notice": "By proceeding you confirm you are over 21.\n\nUnfortunately we cannot ship to: AL, AK, AR, HI, MA, MI, MS, PA, OK, TN, and UT.\n\nAll sales processed and fulfilled by unaffiliated, third-party retailers on the RackHouse network. Discount codes and shipping costs are added at checkout. "
        },
        "contents": {
          "note": true
        },
        "popup": false
      },
      "toggle": {
        "styles": {
          "toggle": {
            "font-family": "Raleway, sans-serif",
            "background-color": "#000000",
            ":hover": {
              "background-color": "#e6da00",
            },
            ":focus": {
              "background-color": "#e6da00"
            }
          },
          "count": {
            "font-size": "18px",
            "color": "#ffffff",
            ":hover": {
              "color": "#000000"
            }
          },
          "iconPath": {
            "fill": "#000000"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#000000"
          },
          "title": {
            "color": "#000000"
          },
          "price": {
            "color": "#000000"
          },
          "fullPrice": {
            "color": "#000000"
          },
          "discount": {
            "color": "#000000"
          },
          "discountIcon": {
            "fill": "#000000"
          },
          "quantity": {
            "color": "#000000"
          },
          "quantityIncrement": {
            "color": "#000000",
            "border-color": "#000000"
          },
          "quantityDecrement": {
            "color": "#000000",
            "border-color": "#000000"
          },
          "quantityInput": {
            "color": "#000000",
            "border-color": "#000000"
          }
        }
      }
    };

    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'rackhouse-whiskey-club.myshopify.com',
        storefrontAccessToken: '576ad6ca4119a10f9d54bb88c15f3fb0',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        // No.2
        productOptions.product.text.button = "ADD TO CART";
        ui.createComponent('product', {
          id: '7191967793267',
          node: document.querySelector('[data-rhbuybutton="sev-no2"]'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: productOptions,
        });

        // No.9
        productOptions.product.text.button = "ADD TO CART";
        ui.createComponent('product', {
          id: '7191960813683',
          node: document.querySelector('[data-rhbuybutton="sev-no9"]'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: productOptions,
        });

        // No.9 (second instance)
        productOptions.product.text.button = "ADD TO CART";
        ui.createComponent('product', {
          id: '7191960813683',
          node: document.querySelector('[data-rhbuybutton="sev-no9.2"]'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: productOptions,
        });

        // No.10
        productOptions.product.text.button = "ADD TO CART";
        ui.createComponent('product', {
          id: '7191958159475',
          node: document.querySelector('[data-rhbuybutton="sev-no10"]'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: productOptions,
        });

        // Agave Dawn
        productOptions.product.text.button = "ADD TO CART";
        ui.createComponent('product', {
        id: '7191956488307',
          node: document.querySelector('[data-rhbuybutton="sev-ad"]'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: productOptions,
        });

        // Agave Moon
        productOptions.product.text.button = "ADD TO CART";
        ui.createComponent('product', {
          id: '7191957700723',
          node: document.querySelector('[data-rhbuybutton="sev-am"]'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: productOptions,
        });

        // Biki's Gold Rum
        productOptions.product.text.button = "ADD TO CART";
        ui.createComponent('product', {
          id: '7192030740595',
          node: document.querySelector('[data-rhbuybutton="sev-bgr"]'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: productOptions,
        });
      });
    }
  })();