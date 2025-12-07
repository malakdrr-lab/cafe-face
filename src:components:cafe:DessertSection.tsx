import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Image, Text, Float, useCursor, Environment } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"

const desserts = [
  { 
    img: '/assets/generated_images/delicious_tiramisu_dark_photography.png', 
    title: "Tiramisu Classico", 
    price: "$8.50" 
  },
  { 
    img: '/assets/generated_images/chocolate_brownie_dark_photography.png', 
    title: "Midnight Brownie", 
    price: "$7.00" 
  },
  { 
    img: '/assets/generated_images/artisan_cookies_dark_photography.png', 
    title: "Artisan Cookies", 
    price: "$5.50" 
  },
  { 
    img: '/assets/generated_images/delicious_tiramisu_dark_photography.png', 
    title: "Tiramisu Berry", 
    price: "$9.00" 
  },
  { 
    img: '/assets/generated_images/chocolate_brownie_dark_photography.png', 
    title: "Brownie A La Mode", 
    price: "$8.50" 
  },
  { 
    img: '/assets/generated_images/artisan_cookies_dark_photography.png', 
    title: "Matcha Cheesecake", 
    price: "$9.50" 
  },
  { 
    img: '/assets/generated_images/delicious_tiramisu_dark_photography.png', 
    title: "Chocolate Tart", 
    price: "$8.00" 
  },
  { 
    img: '/assets/generated_images/chocolate_brownie_dark_photography.png', 
    title: "Lemon Mousse", 
    price: "$7.50" 
  },
  { 
    img: '/assets/generated_images/artisan_cookies_dark_photography.png', 
    title: "Pistachio Dream", 
    price: "$10.00" 
  },
  { 
    img: '/assets/generated_images/delicious_tiramisu_dark_photography.png', 
    title: "Raspberry Bliss", 
    price: "$8.75" 
  },
]

function CarouselItem({ index, position, url, title, price, ...props }: any) {
  const ref = useRef<THREE.Group>(null)
  const [hovered, hover] = useState(false)
  
  useCursor(hovered)

  useFrame((state, delta) => {
    if(ref.current) {
      ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, hovered ? 0.5 : 0, 4, delta)
      const scale = hovered ? 1.15 : 1
      ref.current.scale.x = THREE.MathUtils.damp(ref.current.scale.x, scale, 4, delta)
      ref.current.scale.y = THREE.MathUtils.damp(ref.current.scale.y, scale, 4, delta)
      ref.current.scale.z = THREE.MathUtils.damp(ref.current.scale.z, scale, 4, delta)
    }
  })

  return (
    <group 
      ref={ref} 
      position={position} 
      {...props} 
      onPointerOver={() => hover(true)} 
      onPointerOut={() => hover(false)}
    >
      <Image 
        url={url} 
        transparent 
        side={THREE.DoubleSide} 
        scale={[3, 4]} 
        toneMapped={false}
      >
        <planeGeometry />
      </Image>
      <Text
        position={[0, -2.5, 0.1]}
        fontSize={0.25}
        color="#D4AF37"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff"
      >
        {title.toUpperCase()}
      </Text>
      <Text
        position={[0, -2.9, 0.1]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wlhyw.woff"
      >
        {price}
      </Text>
    </group>
  )
}

function Carousel() {
  const ref = useRef<THREE.Group>(null)
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group ref={ref} position={[0, -0.5, 0]}>
      {desserts.map((dessert, i) => {
        const count = desserts.length
        const radius = 4.5
        const angle = (i / count) * Math.PI * 2
        const x = Math.sin(angle) * radius
        const z = Math.cos(angle) * radius
        
        return (
          <CarouselItem 
            key={i} 
            index={i} 
            url={dessert.img} 
            title={dessert.title}
            price={dessert.price}
            position={[x, 0, z]} 
            rotation={[0, angle, 0]} 
          />
        )
      })}
    </group>
  )
}

export function DessertSection() {
  return (
    <section className="h-[80vh] bg-[#0a0a0a] relative z-10 overflow-hidden">
      <div className="absolute top-10 left-0 right-0 text-center z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-6xl text-white mb-2">Sweet Delights</h2>
          <p className="font-body text-muted-foreground tracking-widest uppercase text-sm">
            Rotates for your pleasure
          </p>
        </motion.div>
      </div>
      
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <fog attach="fog" args={["#0a0a0a", 5, 15]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#D4AF37" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3E2723" />
        
        <Carousel />
        
        <Environment preset="city" />
      </Canvas>
    </section>
  )
}
