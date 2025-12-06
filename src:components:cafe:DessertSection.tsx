import { motion } from "framer-motion"

interface Dessert {
  title: string
  price: string
}

const desserts: Dessert[] = [
  { title: "Tiramisu Classico", price: "$8.50" },
  { title: "Midnight Brownie", price: "$7.00" },
  { title: "Artisan Cookies", price: "$5.50" },
  { title: "Tiramisu Berry", price: "$9.00" },
  { title: "Brownie A La Mode", price: "$8.50" },
]

export function DessertSection() {
  return (
    <section className="py-24 px-6 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">Sweet Delights</h2>
          <p className="font-body text-muted-foreground tracking-widest uppercase text-sm">Exquisite treats</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {desserts.map((dessert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="bg-card border border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-500 p-8 rounded-lg text-center h-32 flex flex-col justify-center">
                <h3 className="font-display text-xl text-white mb-2 group-hover:text-primary transition-colors">{dessert.title}</h3>
                <span className="font-display text-lg text-primary">{dessert.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
