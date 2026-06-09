import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollUp}
          aria-label="Scroll to top"
          className="
            fixed bottom-6 right-6 z-50
            w-10 h-10 rounded-full
            bg-navy-800 hover:bg-nepal-red text-white
            flex items-center justify-center
            shadow-lg hover:shadow-xl
            transition-colors duration-300
            focus-visible:ring-2 focus-visible:ring-nepal-red
          "
        >
          <ChevronUp size={18} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
