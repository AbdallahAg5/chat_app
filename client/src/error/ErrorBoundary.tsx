import { FallbackProps } from 'react-error-boundary';
import { motion } from 'framer-motion';

export function Error(props: FallbackProps) {
  const { error, resetErrorBoundary } = props;

  return (
    <div className="error-page min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-red-600 mb-4">Error!! 🌍</h1>
        <p className="text-2xl text-gray-300 font-semibold">{error.message}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 bg-customBlue py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={resetErrorBoundary}
        >
          Reload Page
        </motion.button>
      </div>
    </div>
  );
}
