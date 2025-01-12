export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 FPT Polytechnic Đồng Nai. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-400 transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition duration-300">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

