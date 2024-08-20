import { motion } from "framer-motion";

const SoundWave = ({color}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', marginLeft: '5px', marginRight: '5px' }}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: [0.5, 1.5, 0.5] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1
          }}
          style={{
            width: 1.9,
            height: 15,
            backgroundColor: color,
            margin: '0 0.8px',
          }}
        />
      ))}
    </motion.div>
  );
};

export default SoundWave;