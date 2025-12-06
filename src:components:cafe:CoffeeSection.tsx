import { motion } from "framer-motion"

interface Coffee {
  id: number
  name: string
  desc: string
  price: string
}

const coffees: Coffee[] = [
  {
    id: 1,
    name: "Espresso Noir",
    desc: "Pure, concentrated arabica with rich crema.",
    price: "$4.50",
  },
  {
    id: 2,
    name: "Golden Latte",
    desc: "Velvet milk foam with a touch of turmeric gold.",
    price: "$6.00",
  },
  {
    id: 3,
    name: "Cold Brew Reserve",
    desc: "Steeped for 24 hours. Smooth, dark, intense.",
    price: "$5.50",
  }
]

export function CoffeeSection() {
  return (
    <section className="py-24 px-6 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">The Selection</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coffees.map((coffee, index) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-card border border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-500 h-full p-8 rounded-lg text-center">
                <h3 className="font-display text-2xl text-white mb-2 group-hover:text-primary transition-colors">{coffee.name}</h3>
                <p className="text-gray-400 font-body text-sm mb-4">{coffee.desc}</p>
                <span className="font-display text-xl text-primary">{coffee.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
