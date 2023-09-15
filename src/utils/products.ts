import product1 from "../assets/products/watch_aviators.jpg";
import product2 from "../assets/products/watch4.jpg";
import product3 from "../assets/products/watch18.jpg";
import product4 from "../assets/products/watch1.jpg";
import product5 from "../assets/products/watch2.jpg";
import product6 from "../assets/products/watch3.jpg";
import product7 from "../assets/products/watch_ulysse_nardinn.jpg";
import product8 from "../assets/products/watch6.jpg";
import product9 from "../assets/products/watch7.jpg";
import product10 from "../assets/products/watch8.jpg";
import product11 from "../assets/products/watch9.jpg";
import product12 from "../assets/products/watch10.jpg";
import product13 from "../assets/products/watch11.jpg";
import product14 from "../assets/products/watch12.jpg";
import product15 from "../assets/products/watch13.jpg";
import product16 from "../assets/products/watch14.jpg";
import product17 from "../assets/products/watch15.jpg";
import product18 from "../assets/products/watch16.jpg";

export interface ProductData {
  id: number;
  productName: string;
  type?: string;
  price: number;
  productImage: string;
  descriptions: string;
  discount: number;
}

export const PRODUCTS: ProductData[] = [
  {
    id: 1,
    productName: "AVIATOR",
    type: "F-SERIES COLLECTION",
    price: 239.99,
    discount: 290.99,
    productImage: product1,
    descriptions:
      "AVIATOR has grown into a great brand with an iconic logo. It’s the leading gent’s watch brand in Travel Retail Sales. The AVIATOR F-series watches have stunning design that are exclusive to Travel Retail and utilise only the very best materials and precision movements. Premium quality watches at great prices. Ever pioneering, AVIATOR will launch the first SMART watch to be offered in-flight. With features such as Caller ID, SMS, Email and Social Media Alerts, Step Counter and Calorie Counter amongst just some of the features. ",
  },
  {
    id: 2,
    productName: "Rolex",
    type: "Lady-Datejust",
    price: 5195.99,
    discount: 5399.99,
    productImage: product2,
    descriptions:
      "Serviced in April 2022: An excellent condition pre-owned 26mm case size 'T' serial stainless steel superlative chronometer, calibre 2135, automatic movement Rolex Lady-Datejust 26 (69174) featuring a silver baton dial housing a date aperture at 3 O'clock surrounded by a white gold fluted bezel on a stainless steel Rolex Jubilee bracelet. This particular watch comes complete with its Rolex box and paperwork being originally supplied as new in July 1997.",
  },
  {
    id: 3,
    productName: "Patek Philippe Geneve",
    type: "Classic",
    price: 89000.99,
    discount: 99999.99,
    productImage: product3,

    descriptions:
      "As the heir of a grand Patek Philippe classic, the Ref. 5270 Chronograph with a perpetual calendar is now available in yellow gold for the first time – an elegant outfit for this timeless watch with a concave bezel and fluted lugs. The silvery opaline dial is superbly legible. The caliber CH 29-535 PS Q movement combines traditional design with six patented innovations and an extremely slender calendar mechanism.",
  },
  {
    id: 4,
    productName: "Rolex",
    type: "Datejust 36",
    price: 29450.99,
    discount: 30250.99,
    productImage: product4,

    descriptions:
      "The Rolex Datejust 36 is the epitome of timeless elegance and precision craftsmanship. This iconic timepiece boasts a 36mm case size, making it the perfect choice for those who appreciate a balanced blend of classic style and modern functionality. Its stainless steel construction exudes durability and sophistication, while the white gold fluted bezel adds a touch of luxury.",
  },
  {
    id: 5,
    productName: "TAG Heuer",
    type: "Aquaracer Calibre 5 Blue Men",
    price: 109.99,
    discount: 119.99,
    productImage: product5,

    descriptions:
      "The TAG Heuer Aquaracer Calibre 5 Blue Men's watch is a true embodiment of precision, style, and adventure. Designed for the modern man who embraces both elegance and the spirit of exploration, this timepiece seamlessly combines performance with aesthetic appeal.At its heart lies the reliable Calibre 5 automatic movement, ensuring impeccable timekeeping accuracy. Encased in robust stainless steel, the watch exudes durability and reliability, making it suitable for underwater adventures with a water resistance rating of up to 300 meters.",
  },
  {
    id: 6,
    productName: "Maurice Lacroix ",
    type: "Les Classiques Date",
    price: 1180.99,
    discount: 1260.99,
    productImage: product6,
    descriptions:
      "The Maurice Lacroix Les Classiques Date is a timeless masterpiece that marries classic design with contemporary elegance. This watch is a testament to the brand's commitment to craftsmanship and precision, making it a must-have for watch enthusiasts who appreciate understated sophistication. At its core, the Les Classiques Date is powered by a reliable Swiss quartz movement, ensuring accurate and hassle-free timekeeping. Encased in high-quality stainless steel, the watch boasts durability and a sleek, polished finish that exudes refinement.",
  },
  {
    id: 7,
    productName: "Ulysse Nardin",
    type: "Blue Toro",
    price: 23000.99,
    discount: 24000.99,
    productImage: product7,
    descriptions:
      "The Ulysse Nardin Blue Toro is a horological masterpiece that embodies the spirit of innovation and precision that defines the Ulysse Nardin brand. This watch is a fusion of traditional craftsmanship and cutting-edge technology, making it a true marvel in the world of luxury timepieces. At its heart, the Blue Toro is powered by the Ulysse Nardin UN-32 automatic movement, a testament to the brand's dedication to mechanical excellence. Encased in lustrous stainless steel, the watch showcases a distinctive blue dial that captures the essence of the open sea, where Ulysse Nardin has made its mark.",
  },
  {
    id: 8,
    productName: "Omega Seamaster ",
    type: "Diver 300M",
    price: 12000.99,
    discount: 12578.99,
    productImage: product8,
    descriptions:
      "The Omega Seamaster Diver 300M is a true icon among dive watches, celebrated for its legendary performance and timeless design. Born from Omega's maritime heritage, this timepiece combines precision engineering with a bold, sporty aesthetic, making it a must-have for those who seek both style and adventure. At the heart of the Diver 300M beats the Omega Co-Axial Master Chronometer movement, a testament to Omega's commitment to exceptional accuracy and reliability. Encased in robust stainless steel, the watch is designed to withstand the rigors of underwater exploration, boasting an impressive water resistance of up to 300 meters (1000 feet).",
  },
  {
    id: 9,
    productName: "TUDOR",
    type: "M79230G-0001 Black Bay",
    price: 3810.99,
    discount: 4110.99,
    productImage: product9,
    descriptions:
      "The TUDOR Black Bay M79230G-0001 is a striking tribute to the brand's rich diving heritage, seamlessly blending vintage aesthetics with modern functionality. This watch is a true embodiment of TUDOR's commitment to producing robust and reliable timepieces that pay homage to their iconic past. At its core, the Black Bay M79230G-0001 is powered by the TUDOR Caliber MT5602, a robust automatic movement known for its accuracy and reliability. Encased in sturdy stainless steel, the watch exudes a sense of durability and adventure, with a water resistance rating of up to 200 meters (660 feet)",
  },
  {
    id: 10,
    productName: "Rolex",
    type: "Daytona Platinum Ice Blue Dial",
    price: 97500.99,
    discount: 99900.99,
    productImage: product10,
    descriptions:
      "The Rolex Daytona Platinum Ice Blue Dial is the pinnacle of luxury and precision in the world of horology. This exquisite timepiece represents the epitome of Rolex's watchmaking excellence, combining opulence, functionality, and timeless style in one stunning package. At the heart of the Daytona Platinum is the Rolex Caliber 4130, a self-winding mechanical chronograph movement renowned for its precision and reliability. Encased in the finest platinum, the watch exudes exclusivity and prestige, making it a symbol of achievement and success.",
  },
  {
    id: 11,
    productName: "Rolex",
    type: "Oyster Perpetual Submariner Date",
    price: 9100.99,
    discount: 12000.99,
    productImage: product11,
    descriptions:
      "The Rolex Oyster Perpetual Submariner Date is a legendary timepiece that stands as a beacon of precision and rugged elegance in the world of dive watches. This iconic watch is a testament to Rolex's commitment to innovation and uncompromising quality, making it a timeless classic among watch enthusiasts. At its core, the Submariner Date is powered by the Rolex Caliber 3135, a self-winding mechanical movement known for its accuracy and reliability. Encased in robust stainless steel, the watch exudes durability and adventure, with a water resistance rating of up to 300 meters (1,000 feet).",
  },
  {
    id: 12,
    productName: "Rolex",
    type: " GMT-Master II",
    price: 41400.99,
    discount: 43100.99,
    productImage: product12,
    descriptions:
      "The Rolex GMT-Master II is an iconic timepiece that combines timeless style with unparalleled functionality, making it the watch of choice for global travelers and watch aficionados. This legendary watch is a testament to Rolex's dedication to precision, innovation, and enduring design. At its heart, the GMT-Master II is powered by the Rolex Caliber 3285, a self-winding mechanical movement celebrated for its exceptional accuracy and reliability. Encased in robust stainless steel or luxurious materials like white gold or Everose gold, the watch embodies durability and sophistication, suitable for both adventure and formal occasions.",
  },
  {
    id: 13,
    productName: "Panerai Luminor",
    type: "Marina 1950 3 Days",
    price: 4000.99,
    discount: 4500.99,
    productImage: product13,
    descriptions:
      "The Panerai Luminor Marina 1950 3 Days is a true masterpiece that marries vintage aesthetics with modern watchmaking innovation, making it a quintessential timepiece for those who appreciate heritage and precision. This watch is a tribute to Panerai's rich history and its association with the Italian Navy. At its heart, the Luminor Marina 1950 3 Days is powered by the in-house Panerai P.3000 manual-winding movement, a caliber known for its accuracy and a power reserve of three days. Encased in robust stainless steel or luxurious materials like titanium or red gold, the watch exudes durability and sophistication, suitable for both casual and formal occasions.",
  },
  {
    id: 14,
    productName: "Omega Speedmaster",
    type: "Day Data 39 Cronografo Quadrante Blu",
    price: 4795.99,
    discount: 4995.99,
    productImage: product14,
    descriptions:
      "The Omega Speedmaster Day-Date 39 Cronografo Quadrante Blu is a distinguished timepiece that marries classic design with the precision and functionality that Omega is renowned for. This watch is a testament to Omega's commitment to craftsmanship and innovation, making it a cherished choice for watch enthusiasts. At its heart, the Speedmaster Day-Date 39 is powered by the Omega Caliber 1151, a self-winding automatic movement known for its accuracy and reliability. Encased in robust stainless steel, the watch exudes durability and sophistication, suitable for both formal occasions and daily wear.",
  },
  {
    id: 15,
    productName: "Lange & Söhne",
    type: "Datograph Up Down",
    price: 90700.99,
    discount: 96800.99,
    productImage: product15,
    descriptions:
      "The Lange & Söhne Datograph Up Down is a horological masterpiece that epitomizes the pinnacle of German watchmaking excellence. This watch is a testament to A. Lange & Söhne's commitment to precision, innovation, and enduring craftsmanship, making it a coveted choice among connoisseurs of fine timepieces. At the heart of the Datograph Up Down is the Lange L951.6 manual-winding movement, a movement renowned for its impeccable accuracy and artistry. Encased in elegant and durable materials like platinum or rose gold, the watch exudes sophistication and exclusivity, suitable for formal occasions and watch aficionados seeking the best of the best.",
  },
  {
    id: 16,
    productName: "Breitling",
    type: "NAVITIMER B01 CHRONOGRAPH 43",
    price: 8200.99,
    discount: 8700.99,
    productImage: product16,
    descriptions:
      "The Breitling Navitimer B01 Chronograph 43 is a watch that captures the spirit of aviation and precision timekeeping like no other. This iconic timepiece is a true testament to Breitling's heritage and commitment to excellence, making it a cherished choice for pilots, adventurers, and watch enthusiasts alike. At its core, the Navitimer B01 is powered by the Breitling Caliber B01, an in-house automatic movement celebrated for its accuracy and reliability. Encased in durable stainless steel, the watch exudes robustness and sophistication, suitable for both cockpit and everyday wear.",
  },

  {
    id: 17,
    productName: "Cartier",
    type: "Ballon gold",
    price: 11010.99,
    discount: 11350.99,
    productImage: product17,
    descriptions:
      "The Cartier Ballon Gold Watch is a true testament to the brand's tradition of elegance and innovation. This iconic timepiece combines classic design with modern sophistication, making it a symbol of luxury and timeless style. At its heart, the Ballon Bleu is powered by a precise and reliable Swiss quartz movement, ensuring impeccable timekeeping accuracy. Encased in stunning 18k yellow gold, the watch exudes opulence and refinement, making it an ideal accessory for special occasions or everyday elegance.",
  },
  {
    id: 18,
    productName: "Patek Philippe",
    type: "Grandmaster Chime",
    price: 2500000.99,
    discount: 2600000.99,
    productImage: product18,
    descriptions:
      "The Patek Philippe Grandmaster Chime is the epitome of horological artistry and innovation, a masterpiece that stands at the pinnacle of watchmaking excellence. This extraordinary timepiece represents Patek Philippe's unwavering commitment to pushing the boundaries of craftsmanship and precision. The Grandmaster Chime showcases an unparalleled array of complications and features, making it one of the most complex and sought-after watches in the world. Its intricate movement houses a perpetual calendar with a moon phase, a minute repeater, a cathedral gong chime, a second time zone, and a unique chiming alarm mechanism.",
  },
];
