import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Star, MessageCircle, Navigation, Share2 } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";
import grilledChicken from "@/assets/grilled-chicken-pizza.jpg";
import pasta from "@/assets/pasta.jpg";
import coffee from "@/assets/coffee.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Del Porto's — Cafe in Vasai West | Pizza, Pasta & Coffee" },
      {
        name: "description",
        content:
          "Del Porto's is a cozy cafe in Vasai West serving wood-fired pizza, pasta and coffee. Rated 4.3 by 594 diners. Open 9 AM – 11 PM.",
      },
    ],
  }),
});

const ADDRESS =
  "Bungalow, Kanaklata Co-operative Housing Society, Shop No.1, 2 Hari Niwas Apt, Near Diwanman Talav, Diwanman Rd, Navghar Manikpur, Vasai West, Vasai-Virar, Maharashtra 401202";
const PHONE = "09022856146";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Del Porto's Vasai West")}`;
const WHATSAPP_URL = `https://wa.me/91${PHONE.replace(/^0/, "")}`;

type MenuItem = { name: string; price: number; veg?: boolean };
type MenuCategory = { name: string; items: MenuItem[] };

const menuCategories: MenuCategory[] = [
  {
    name: "Coffee",
    items: [
      { name: "Americano", price: 230, veg: true },
      { name: "Black Coffee", price: 160, veg: true },
      { name: "Cafe Latte", price: 260, veg: true },
      { name: "Cafe Mocha", price: 290, veg: true },
      { name: "Cappuccino", price: 230, veg: true },
      { name: "Hot Chocolate", price: 260, veg: true },
      { name: "Machiato", price: 250, veg: true },
    ],
  },
  {
    name: "Ice Coffee & Frappe",
    items: [
      { name: "Caramel Cold Coffee", price: 250, veg: true },
      { name: "Classic Cold Coffee", price: 230, veg: true },
      { name: "Ice Frappe", price: 260, veg: true },
      { name: "Ice Latte", price: 300, veg: true },
      { name: "Ice Mocha", price: 320, veg: true },
      { name: "Mocha Frappe", price: 330, veg: true },
      { name: "Nutella Chocolate Frappe", price: 300, veg: true },
      { name: "Salted Caramel Frappe", price: 260, veg: true },
    ],
  },
  {
    name: "Smoothies",
    items: [
      { name: "Banana & Blueberry Smoothie", price: 320, veg: true },
      { name: "Coconut Choco Almond Smoothie", price: 320, veg: true },
      { name: "Strawberry & Grenadine Smoothie", price: 320, veg: true },
      { name: "Soul Smoothie", price: 320, veg: true },
      { name: "Stress Buster Smoothie", price: 320, veg: true },
    ],
  },
  {
    name: "Milkshakes",
    items: [
      { name: "Banana Caramel Milkshake", price: 240, veg: true },
      { name: "Belgium Chocolate Milkshake", price: 330, veg: true },
      { name: "Classic Brownie Milkshake", price: 370, veg: true },
      { name: "Coffee Freaky Shake Milkshake", price: 260, veg: true },
      { name: "Kit-Kat Milkshake", price: 290, veg: true },
      { name: "Nutella Chocolate Milkshake", price: 330, veg: true },
      { name: "Oreo Choco Chip Milkshake", price: 260, veg: true },
      { name: "Strawberry Milkshake", price: 240, veg: true },
    ],
  },
  {
    name: "Mocktails",
    items: [
      { name: "Blue Lagoon", price: 260, veg: true },
      { name: "Espresso Martini", price: 290, veg: true },
      { name: "Fruit Punch", price: 280, veg: true },
      { name: "Kala Khatta", price: 240, veg: true },
      { name: "Kiwi Mojito", price: 240, veg: true },
      { name: "Orange Margarita", price: 280, veg: true },
      { name: "Orange Sunrise", price: 260, veg: true },
      { name: "Pineapple Blossom", price: 240, veg: true },
      { name: "Spicy Guava Punch", price: 240, veg: true },
      { name: "Strawberry Swirl", price: 250, veg: true },
      { name: "Three Two Tango", price: 250, veg: true },
      { name: "Virgin Mojito", price: 210, veg: true },
      { name: "Virgin Pina-Colada", price: 260, veg: true },
      { name: "Watermelon Frizzito", price: 290, veg: true },
    ],
  },
  {
    name: "Fresh Lime",
    items: [
      { name: "Mix Fresh Lime", price: 120, veg: true },
      { name: "Salty Fresh Lime", price: 120, veg: true },
      { name: "Sweet Fresh Lime", price: 120, veg: true },
    ],
  },
  {
    name: "Ice Tea",
    items: [
      { name: "Ginger & Mint Ice Tea", price: 190, veg: true },
      { name: "Kiwi & Lemon Ice Tea", price: 200, veg: true },
      { name: "Lemon Ice Tea", price: 190, veg: true },
      { name: "Peach Ice Tea", price: 200, veg: true },
    ],
  },
  {
    name: "Fresh Juices",
    items: [
      { name: "Hello Sunshine (Orange, Carrot, Ginger)", price: 210, veg: true },
      { name: "Immunity Booster (Orange, Carrot, Beetroot)", price: 240, veg: true },
      { name: "Red Booster (Apple, Beetroot, Carrot)", price: 210, veg: true },
      { name: "Red Rocket (Apple, Beetroot, Mint Leaves)", price: 210, veg: true },
      { name: "Sunny Orange Juice (Fresh Orange)", price: 290, veg: true },
      { name: "Watermelon Chia Fresca (Watermelon, Chia, Mint)", price: 210, veg: true },
    ],
  },
  {
    name: "Appetizer",
    items: [
      { name: "Cheese Chilli Toast", price: 240, veg: true },
      { name: "Cheese Garlic Bread", price: 240, veg: true },
      { name: "Cheesy Mushroom Bruschetta", price: 250, veg: true },
      { name: "Chicken Popcorn", price: 260 },
      { name: "Chicken Wings", price: 340 },
      { name: "Fried Chicken Chips", price: 340 },
      { name: "Tomato Olive Bruschetta", price: 250, veg: true },
    ],
  },
  {
    name: "Soups",
    items: [
      { name: "Corn Chicken Broccoli Soup", price: 200 },
      { name: "Cream of Broccoli Soup", price: 190, veg: true },
      { name: "Cream of Mushroom Soup", price: 190, veg: true },
      { name: "Creamy Chicken Soup", price: 210 },
      { name: "Italian Minestrone Soup", price: 210, veg: true },
      { name: "Jamaican Style Chicken Soup", price: 240 },
    ],
  },
  {
    name: "Quesadilla",
    items: [
      { name: "Chicken Quesadilla", price: 370 },
      { name: "Vegetable Quesadilla", price: 320, veg: true },
    ],
  },
  {
    name: "Salad",
    items: [
      { name: "Chicken Apple Broccoli Salad", price: 370 },
      { name: "Chicken Caesar Salad", price: 360 },
      { name: "Chicken Waldorf Salad", price: 390 },
      { name: "Veg Exotic Grilled with Lemon Vinaigrette Salad", price: 450, veg: true },
    ],
  },
  {
    name: "Nachos",
    items: [
      { name: "Chicken Cheesy Nachos with Pineapple Salsa", price: 330 },
      { name: "Veg Cheesy Nachos with Tomato Salsa", price: 260, veg: true },
    ],
  },
  {
    name: "Fries",
    items: [
      { name: "Chicken Cheesy & Ham Fries", price: 320 },
      { name: "Chicken Teriyaki Fries", price: 340 },
      { name: "Loaded Chicken Fries", price: 370 },
      { name: "Veg Cheesy Fries", price: 260, veg: true },
      { name: "Veg Garlic Herbs Fries", price: 260, veg: true },
      { name: "Veg Peri Peri Fries", price: 260, veg: true },
      { name: "Veg Salted Fries", price: 240, veg: true },
    ],
  },
  {
    name: "Wraps",
    items: [
      { name: "American Style Fried Chicken Wraps", price: 370 },
      { name: "Creamy Chicken Teriyaki Wraps", price: 340 },
      { name: "Egg & Potato with Classic Sriracha Wraps", price: 320 },
      { name: "Peri Peri Chicken Wraps", price: 370 },
      { name: "Veg Lebanese Falafel Wraps", price: 300, veg: true },
      { name: "Veg Rainbow Protein Paneer Wraps", price: 290, veg: true },
    ],
  },
  {
    name: "Tacos",
    items: [
      { name: "Mexican Grilled Chicken Tacos", price: 320 },
      { name: "Veg Cajun Paneer Tacos", price: 260, veg: true },
      { name: "Veg Cheesy Grilled Vegetable Tacos", price: 260, veg: true },
      { name: "Honey Chipotle Chicken Tacos", price: 320 },
    ],
  },
  {
    name: "Sandwiches",
    items: [
      { name: "Chicken BBQ Fried Sandwich", price: 370 },
      { name: "Chicken Cheesy Egg Ham Sandwich", price: 330 },
      { name: "Chicken Club Sandwich", price: 390 },
      { name: "Chicken Crispy Open Sandwich", price: 370 },
      { name: "Chicken Spicy Sriracha Sandwich", price: 340 },
      { name: "Corn & Spinach Cheese Sandwich", price: 300, veg: true },
      { name: "Grilled Vegetable Sandwich", price: 300, veg: true },
      { name: "Indian Chicken Tikka Sandwich", price: 330 },
      { name: "Paneer Club Sandwich", price: 390, veg: true },
      { name: "Paneer Tikka Sandwich", price: 340, veg: true },
      { name: "Veg Spicy Paneer Sandwich", price: 330, veg: true },
    ],
  },
  {
    name: "Pasta",
    items: [
      { name: "Veg Carbonara Pasta", price: 390, veg: true },
      { name: "Veg Classic Arrabiata Pasta", price: 340, veg: true },
      { name: "Veg Creamy Alfredo Pasta", price: 330, veg: true },
      { name: "Veg Creamy Mushroom Spinach Pasta", price: 370, veg: true },
      { name: "Veg Fresh Basil Pesto Pasta", price: 370, veg: true },
      { name: "Veg Mac N Cheese Pasta", price: 340, veg: true },
      { name: "Veg Mix Sauce Pasta", price: 390, veg: true },
      { name: "Veg Spaghetti Aglio E Olio Pasta", price: 330, veg: true },
      { name: "Veg Spaghetti Bolognese Pasta", price: 390, veg: true },
    ],
  },
  {
    name: "Pizza",
    items: [
      { name: "BBQ Style Chicken Pizza", price: 500 },
      { name: "Chicken Hawaiian Pizza", price: 500 },
      { name: "Chicken Overloaded Pizza", price: 580 },
      { name: "Chicken Pepperoni Pizza", price: 590 },
      { name: "Chicken Pesto Pizza", price: 500 },
      { name: "Classic Grilled Chicken Pizza", price: 460 },
      { name: "Indian Style Tandoori Chicken Pizza", price: 520 },
      { name: "Italian Meatballs Pizza", price: 630 },
      { name: "Veg Green Chilli Onion Pizza", price: 370, veg: true },
      { name: "Veg Indian Style Tandoori Paneer Pizza", price: 430, veg: true },
      { name: "Veg Margherita Pizza", price: 340, veg: true },
      { name: "Veg Pesto Paneer Green Wave Pizza", price: 460, veg: true },
      { name: "Veg Three Cheese Pizza", price: 390, veg: true },
      { name: "Veggies Paradise Pizza", price: 420, veg: true },
    ],
  },
  {
    name: "Del Porto's Special",
    items: [
      { name: "Butter Garlic Spaghetti Prawns & Veggies", price: 430 },
      { name: "Chicken Shepherd's Pie", price: 420 },
      { name: "Chicken Stuffed Garlic Bread", price: 340 },
      { name: "Grilled Chicken Steak with Mash Potato, Veggies & Brown Sauce", price: 550 },
      { name: "Pan Seared Fish Butter Garlic Sauce", price: 590 },
      { name: "Stir Fry Chicken with Hot and Spice Sauce", price: 450 },
      { name: "Tuna Fish Cold Sandwich", price: 340 },
      { name: "Veg Cottage Cheese Steak with Mash Potato", price: 460, veg: true },
      { name: "Veg Stuffed Garlic Bread", price: 330, veg: true },
    ],
  },
  {
    name: "Burgers",
    items: [
      { name: "BBQ Chicken Burger", price: 420 },
      { name: "Chicken Cajun Loaded Burger", price: 460 },
      { name: "Chicken Double Patty Burger", price: 470 },
      { name: "Chicken Grilled Patty Burger", price: 340 },
      { name: "Crispy Chicken Burger", price: 390 },
      { name: "Veg Cheesy Garlic Mushroom Burger", price: 280, veg: true },
      { name: "Veg Classic Harissa Burger", price: 290, veg: true },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Belgium Chocolate", price: 390, veg: true },
      { name: "Chocolate Gooey Brownie", price: 260, veg: true },
      { name: "Chocolate Mousse Cake", price: 260, veg: true },
      { name: "Classic Italian Tiramisu", price: 280 },
      { name: "Cold Cheese Cake", price: 230, veg: true },
      { name: "New York Baked Cheese Cake", price: 290, veg: true },
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] text-stone-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#fdfaf5]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#" className="font-serif text-xl font-semibold tracking-tight">
            Del Porto's
          </a>
          <nav className="hidden gap-8 text-sm text-stone-600 md:flex">
            <a href="#menu" className="hover:text-stone-900">Menu</a>
            <a href="#about" className="hover:text-stone-900">About</a>
            <a href="#visit" className="hover:text-stone-900">Visit</a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="hidden rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800 sm:inline-block"
          >
            Call us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-stone-600">
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 font-medium text-amber-900">
                <Star className="h-3.5 w-3.5 fill-amber-500 stroke-amber-500" />
                4.3 · 594 reviews
              </span>
              <span>·</span>
              <span>₹200–400 for two</span>
            </div>
            <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Wood-fired pizza, <em className="text-amber-700">slow mornings</em>, and great coffee.
            </h1>
            <p className="mt-5 max-w-md text-stone-600">
              A neighbourhood cafe in Vasai West serving handcrafted pizza, pasta and freshly
              brewed coffee from 9 AM to 11 PM, every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
              >
                <Navigation className="h-4 w-4" /> Get directions
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium hover:bg-stone-50"
              >
                View menu
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroPizza}
              alt="Wood-fired pizza at Del Porto's"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl shadow-stone-900/20"
            />
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white px-4 py-3 shadow-lg sm:block">
              <div className="flex items-center gap-2 text-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-medium">Open now</span>
                <span className="text-stone-500">· closes 11 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info strip */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3">
          <InfoTile icon={<Clock className="h-5 w-5" />} title="Hours" body="9:00 AM – 11:00 PM · Daily" />
          <InfoTile icon={<MapPin className="h-5 w-5" />} title="Find us" body="Diwanman Rd, Vasai West" />
          <InfoTile icon={<Phone className="h-5 w-5" />} title="Order in" body="090228 56146" />
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-amber-700">Our menu</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">The full menu</h2>
          <p className="mt-3 max-w-xl text-stone-600">
            From wood-fired pizzas and pastas to cold coffees, mocktails and desserts — everything
            we serve, all in one place.
          </p>
        </div>

        {/* Featured visuals */}
        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { img: grilledChicken, label: "Wood-fired Pizza" },
            { img: pasta, label: "Fresh Pasta" },
            { img: coffee, label: "Cafe Coffee" },
            { img: heroPizza, label: "Special Menu" },
          ].map((f) => (
            <div key={f.label} className="group relative overflow-hidden rounded-2xl">
              <img
                src={f.img}
                alt={f.label}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent" />
              <p className="absolute bottom-3 left-4 text-sm font-medium text-white">{f.label}</p>
            </div>
          ))}
        </div>

        {/* Category quick nav */}
        <div className="mb-10 flex flex-wrap gap-2">
          {menuCategories.map((cat) => (
            <a
              key={cat.name}
              href={`#cat-${slugify(cat.name)}`}
              className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 hover:border-amber-700 hover:text-amber-800"
            >
              {cat.name}
            </a>
          ))}
        </div>

        <div className="space-y-14">
          {menuCategories.map((cat) => (
            <div key={cat.name} id={`cat-${slugify(cat.name)}`} className="scroll-mt-24">
              <div className="mb-5 flex items-baseline justify-between border-b border-stone-200 pb-3">
                <h3 className="font-serif text-2xl md:text-3xl">{cat.name}</h3>
                <span className="text-xs uppercase tracking-widest text-stone-500">
                  {cat.items.length} items
                </span>
              </div>
              <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-4 border-b border-dashed border-stone-200 pb-3"
                  >
                    <div className="flex min-w-0 items-start gap-2.5">
                      <VegIcon veg={item.veg} />
                      <p className="min-w-0 text-stone-800">{item.name}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-amber-700">
                      ₹{item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-stone-900 text-stone-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm uppercase tracking-widest text-amber-400">About</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">A little corner of Vasai West.</h2>
          </div>
          <div className="space-y-4 text-stone-300">
            <p>
              Tucked into a quiet lane near Diwanman Talav, Del Porto's has been a go-to for
              wood-fired pizza, hearty pasta and a strong cup of coffee since day one.
            </p>
            <p>
              Whether you're stopping by for breakfast, a leisurely lunch, or a late-night slice,
              we keep things simple — great ingredients, generous portions, and a warm welcome.
            </p>
            <div className="flex items-center gap-2 pt-2 text-amber-300">
              <Star className="h-4 w-4 fill-amber-300" />
              <Star className="h-4 w-4 fill-amber-300" />
              <Star className="h-4 w-4 fill-amber-300" />
              <Star className="h-4 w-4 fill-amber-300" />
              <Star className="h-4 w-4 fill-amber-300" />
              <span className="ml-2 text-sm text-stone-400">Loved by 594 diners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-sm uppercase tracking-widest text-amber-700">Visit</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">Come say hello</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-5 text-stone-700">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
              <p>{ADDRESS}</p>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
              <div>
                <p className="font-medium text-stone-900">Open today · 9 AM – 11 PM</p>
                <p className="text-sm text-stone-500">Open every day of the week</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
              <a href={`tel:${PHONE}`} className="hover:text-stone-900">090228 56146</a>
            </div>
            <div className="flex flex-wrap gap-3 pt-3">
              <ActionBtn href={`tel:${PHONE}`} icon={<Phone className="h-4 w-4" />} label="Call" />
              <ActionBtn href={MAPS_URL} icon={<Navigation className="h-4 w-4" />} label="Directions" />
              <ActionBtn href={WHATSAPP_URL} icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" />
              <ActionBtn href={MAPS_URL} icon={<Share2 className="h-4 w-4" />} label="Share" />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200">
            <iframe
              title="Del Porto's location"
              src={`https://www.google.com/maps?q=${encodeURIComponent("Del Porto's Vasai West Diwanman")}&output=embed`}
              className="h-80 w-full md:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-stone-500 sm:flex-row">
          <p className="font-serif text-base text-stone-900">Del Porto's</p>
          <p>© {new Date().getFullYear()} Del Porto's Cafe · Vasai West</p>
        </div>
      </footer>
    </div>
  );
}

function InfoTile({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-full bg-amber-100 p-2.5 text-amber-800">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-widest text-stone-500">{title}</p>
        <p className="mt-1 text-stone-900">{body}</p>
      </div>
    </div>
  );
}

function ActionBtn({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-50"
    >
      {icon}
      {label}
    </a>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function VegIcon({ veg }: { veg?: boolean }) {
  const color = veg ? "border-emerald-600" : "border-red-600";
  const dot = veg ? "bg-emerald-600" : "bg-red-600";
  return (
    <span
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
      className={`mt-1.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center border ${color}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
    </span>
  );
}
